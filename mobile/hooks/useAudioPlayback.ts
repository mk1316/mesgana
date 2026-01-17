import { useState, useEffect, useRef, useCallback } from 'react';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import posthog from '@/posthog/posthog';

interface UseAudioPlaybackProps {
  audioSource: any; // require() result
  hymnId: string;
}

interface UseAudioPlaybackReturn {
  isPlaying: boolean;
  isLoading: boolean;
  progress: number; // 0-1
  duration: number; // milliseconds
  position: number; // milliseconds
  play: () => Promise<void>;
  pause: () => Promise<void>;
  seek: (progress: number) => Promise<void>;
  error: string | null;
}

export function useAudioPlayback({ audioSource, hymnId }: UseAudioPlaybackProps): UseAudioPlaybackReturn {
  const [error, setError] = useState<string | null>(null);
  const hasTrackedCompletion = useRef(false);

  // Create audio player with the source
  const player = useAudioPlayer(audioSource, {
    updateInterval: 100, // More frequent updates for smooth progress bar
  });

  // Get real-time status updates
  const status = useAudioPlayerStatus(player);

  // Convert status to our expected format
  const isPlaying = status.playing;
  const isLoading = !status.isLoaded || status.isBuffering;
  const progress = status.duration > 0 ? status.currentTime / status.duration : 0;
  const duration = status.duration * 1000; // Convert to milliseconds
  const position = status.currentTime * 1000; // Convert to milliseconds

  // Handle track completion
  useEffect(() => {
    if (status.didJustFinish || (status.duration > 0 && status.currentTime >= status.duration - 0.1)) {
      // Track completion only once per play
      if (!hasTrackedCompletion.current) {
        hasTrackedCompletion.current = true;
        posthog.capture('audio_completed', {
          hymn_id: hymnId,
          duration_seconds: Math.round(status.duration),
          completed_naturally: true,
        });
      }
      // Reset to beginning and pause
      player.seekTo(0);
      player.pause();
    }
  }, [status.didJustFinish, status.currentTime, status.duration, player, hymnId]);

  const play = useCallback(async () => {
    try {
      hasTrackedCompletion.current = false; // Reset completion tracking
      player.play();
      posthog.capture('audio_played', {
        hymn_id: hymnId,
        action: 'play',
        position_seconds: Math.round(status.currentTime),
        position_percent: Math.round(progress * 100),
        duration_seconds: Math.round(status.duration),
        is_resuming: status.currentTime > 0.5,
      });
    } catch (err) {
      console.error('Error playing audio:', err);
      setError('Failed to play audio');
    }
  }, [player, hymnId, status.currentTime, status.duration, progress]);

  const pause = useCallback(async () => {
    try {
      player.pause();
      posthog.capture('audio_paused', {
        hymn_id: hymnId,
        action: 'pause',
        position_seconds: Math.round(status.currentTime),
        position_percent: Math.round(progress * 100),
        duration_seconds: Math.round(status.duration),
        listened_percent: Math.round(progress * 100),
      });
    } catch (err) {
      console.error('Error pausing audio:', err);
      setError('Failed to pause audio');
    }
  }, [player, hymnId, status.currentTime, status.duration, progress]);

  const seek = useCallback(async (progressValue: number) => {
    if (!status.isLoaded || !status.duration) {
      return;
    }
    
    try {
      // Clamp and snap to avoid minuscule residuals near 0
      const clamped = Math.max(0, Math.min(1, progressValue));
      const snapThreshold = 0.01; // 1%
      const snapped = clamped <= snapThreshold ? 0 : clamped;
      const positionSeconds = snapped * status.duration;
      await player.seekTo(positionSeconds);
    } catch (err) {
      console.error('Error seeking audio:', err);
      setError('Failed to seek audio');
    }
  }, [player, status.isLoaded, status.duration]);

  return {
    isPlaying,
    isLoading,
    progress,
    duration,
    position,
    play,
    pause,
    seek,
    error,
  };
}
