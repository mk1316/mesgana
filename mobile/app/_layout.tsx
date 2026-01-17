import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { PostHogProvider } from 'posthog-react-native';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import posthog from '@/posthog/posthog';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  fade: true,
  duration: 350,
});

export default function RootLayout() {
  useFrameworkReady();
  SplashScreen.hideAsync();

  const appState = useRef(AppState.currentState);
  const sessionStartTime = useRef(Date.now());

  useEffect(() => {
    // Track app open on mount
    posthog.capture('app_opened', {
      platform: Platform.OS,
      platform_version: Platform.Version,
      timestamp: new Date().toISOString(),
    });

    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        // App came to foreground
        sessionStartTime.current = Date.now();
        posthog.capture('app_foregrounded', {
          platform: Platform.OS,
          previous_state: appState.current,
          timestamp: new Date().toISOString(),
        });
      } else if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
        // App went to background
        const sessionDuration = Math.round((Date.now() - sessionStartTime.current) / 1000);
        posthog.capture('app_backgrounded', {
          platform: Platform.OS,
          next_state: nextAppState,
          session_duration_seconds: sessionDuration,
          timestamp: new Date().toISOString(),
        });
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <PostHogProvider client={posthog}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="hymn/[id]" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </PostHogProvider>
  );
}
