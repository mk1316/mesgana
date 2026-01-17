import { PostHog } from 'posthog-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const POSTHOG_API_KEY = 'phc_gUrsdXypX3RSgkQlPxm7YtcC1OztiDay8ev9HRNSCjd';
const POSTHOG_HOST = 'https://app.posthog.com';

// Custom storage using AsyncStorage to avoid expo-file-system deprecation issues
const customStorage = {
  getItem: async (key: string) => {
    return AsyncStorage.getItem(key);
  },
  setItem: async (key: string, value: string) => {
    return AsyncStorage.setItem(key, value);
  },
};

export const posthog = new PostHog(POSTHOG_API_KEY, {
  host: POSTHOG_HOST,
  customStorage,
  captureNativeAppLifecycleEvents: true,
  flushAt: 20, // Default batch size for production
});

// Register persistent user properties (language, theme, etc.)
export const registerUserProperties = (properties: Record<string, any>) => {
  posthog.register(properties);
};

// Track screen views
export const trackScreen = (screenName: string, properties?: Record<string, any>) => {
  posthog.screen(screenName, properties);
};

// Track errors
export const trackError = (
  errorType: string,
  error: Error | string,
  context?: Record<string, any>
) => {
  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : undefined;

  posthog.capture('error_occurred', {
    error_type: errorType,
    error_message: errorMessage,
    ...(errorStack && { error_stack: errorStack }),
    ...context,
  });
};

// Funnel events for tracking user journey
export const FunnelEvents = {
  APP_OPENED: 'funnel_app_opened',
  HYMN_SEARCHED: 'funnel_hymn_searched',
  HYMN_VIEWED: 'funnel_hymn_viewed',
  AUDIO_PLAYED: 'funnel_audio_played',
  HYMN_FAVORITED: 'funnel_hymn_favorited',
} as const;

export const trackFunnel = (event: keyof typeof FunnelEvents, properties?: Record<string, any>) => {
  posthog.capture(FunnelEvents[event], properties);
};

export default posthog;