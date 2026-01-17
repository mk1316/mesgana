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
  flushAt: 1,
});

export default posthog;