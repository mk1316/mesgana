import { PostHog } from 'posthog-react-native';

// Replace with your actual PostHog project API key
const POSTHOG_API_KEY = 'YOUR_POSTHOG_API_KEY';
const POSTHOG_HOST = 'https://mesgana.com'; // Your custom domain

export const posthog = new PostHog(POSTHOG_API_KEY, {
  host: POSTHOG_HOST,
});

export default posthog;