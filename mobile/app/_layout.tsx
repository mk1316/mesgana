import { useEffect } from 'react';
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
