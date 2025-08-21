import posthog from "posthog-js"

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  // Send API traffic via our Next.js rewrites to PostHog Cloud
  api_host: "/ingest",
  defaults: '2025-05-24',
  ui_host: "https://us.posthog.com",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
});
