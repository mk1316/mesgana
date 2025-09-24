import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, PanResponder } from 'react-native';
import { Play, Pause } from 'lucide-react-native';

export interface AudioBarProps {
  isDark: boolean;
  isPlaying: boolean;
  isLoading: boolean;
  onTogglePlay: () => void;
  progress: number; // 0..1
  onSeek?: (progress: number) => void;
}

export default function AudioBar({
  isDark,
  isPlaying,
  isLoading,
  onTogglePlay,
  progress,
  onSeek,
}: AudioBarProps) {
  const styles = createStyles(isDark);
  const progressBarRef = useRef<View>(null);
  const [isDragging, setIsDragging] = useState(false);

  const clamped = Math.max(0, Math.min(1, progress || 0));

  const calculateProgress = (pageX: number, trackWidth: number, trackPageX: number) => {
    const touchX = pageX - trackPageX;
    const boundedX = Math.max(0, Math.min(trackWidth, touchX));
    return boundedX / trackWidth;
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    
    onPanResponderGrant: (evt) => {
      if (!onSeek || !progressBarRef.current) return;
      
      setIsDragging(true);
      progressBarRef.current.measure((x, y, width, height, pageX, pageY) => {
        const newProgress = calculateProgress(evt.nativeEvent.pageX, width, pageX);
        onSeek(newProgress);
      });
    },
    
    onPanResponderMove: (evt) => {
      if (!onSeek || !progressBarRef.current || !isDragging) return;
      
      progressBarRef.current.measure((x, y, width, height, pageX, pageY) => {
        const newProgress = calculateProgress(evt.nativeEvent.pageX, width, pageX);
        onSeek(newProgress);
      });
    },
    
    onPanResponderRelease: () => {
      setIsDragging(false);
    },
    
    onPanResponderTerminate: () => {
      setIsDragging(false);
    },
  });

  const handleTapSeek = (event: any) => {
    if (!onSeek || !progressBarRef.current || isDragging) return;
    
    progressBarRef.current.measure((x, y, width, height, pageX, pageY) => {
      const newProgress = calculateProgress(event.nativeEvent.pageX, width, pageX);
      onSeek(newProgress);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.playButton, isLoading && styles.playButtonDisabled]}
        activeOpacity={0.8}
        onPress={onTogglePlay}
        disabled={isLoading}
        accessibilityRole="button"
        accessibilityLabel={isPlaying ? 'Pause' : 'Play'}
      >
        {isLoading ? (
          <View style={styles.loadingSpinner} />
        ) : isPlaying ? (
          <Pause size={20} color="#FFFFFF" />
        ) : (
          <Play size={20} color="#FFFFFF" />
        )}
      </TouchableOpacity>

      <View style={styles.progressContainer}>
        <View
          ref={progressBarRef}
          style={styles.progressTrack}
          {...panResponder.panHandlers}
        >
          <TouchableOpacity
            style={styles.progressTrackTouchable}
            onPress={handleTapSeek}
            activeOpacity={1}
          >
            <View style={[styles.progressFill, { width: `${clamped * 100}%` }]} />
            <View style={[styles.progressThumb, { left: `${clamped * 100}%` }]} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const createStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDark ? '#2D2D2D' : '#FFFFFF',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: isDark ? '#404040' : '#E8E0D0',
      paddingHorizontal: 12,
      paddingVertical: 10,
      marginHorizontal: 12,
      marginBottom: 10,
    },
    playButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#D2691E',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    playButtonDisabled: {
      opacity: 0.6,
    },
    loadingSpinner: {
      width: 16,
      height: 16,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: '#FFFFFF',
      borderTopColor: 'transparent',
    },
    progressContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingVertical: 12, // Increased touch area
    },
    progressTrack: {
      height: 8,
      backgroundColor: isDark ? '#404040' : '#E8E0D0',
      borderRadius: 4,
      overflow: 'visible', // Allow thumb to extend beyond track
      position: 'relative',
      minHeight: 32, // Much larger touch area
    },
    progressTrackTouchable: {
      flex: 1,
      height: '100%',
    },
    progressFill: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#D2691E',
      borderRadius: 4,
    },
    progressThumb: {
      position: 'absolute',
      top: -2,
      width: 5,
      height: 36,
      backgroundColor: isDark ? '#FFFFFF' : '#333333',
      marginLeft: -2,
      borderRadius: 2.5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
  });


