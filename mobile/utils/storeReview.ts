import * as StoreReview from 'expo-store-review';
import posthog from '@/posthog/posthog';

// Thresholds for showing review prompt
const MIN_APP_OPENS = 5;
const MIN_HYMNS_VIEWED = 10;
const COOLDOWN_DAYS = 60;
const MAX_LIFETIME_PROMPTS = 3;

interface ReviewState {
  appOpenCount: number;
  hymnsViewedCount: number;
  lastReviewPrompt: number | null;
  reviewPromptCount: number;
}

/**
 * Check if we should show the review prompt based on user engagement
 */
export function shouldShowReviewPrompt(review: ReviewState): boolean {
  // Check if we've hit max lifetime prompts
  if (review.reviewPromptCount >= MAX_LIFETIME_PROMPTS) {
    return false;
  }

  // Check minimum engagement thresholds
  if (review.appOpenCount < MIN_APP_OPENS) {
    return false;
  }

  if (review.hymnsViewedCount < MIN_HYMNS_VIEWED) {
    return false;
  }

  // Check cooldown period
  if (review.lastReviewPrompt) {
    const daysSinceLastPrompt = (Date.now() - review.lastReviewPrompt) / (1000 * 60 * 60 * 24);
    if (daysSinceLastPrompt < COOLDOWN_DAYS) {
      return false;
    }
  }

  return true;
}

/**
 * Request the native store review dialog
 */
export async function requestStoreReview(): Promise<boolean> {
  try {
    const isAvailable = await StoreReview.isAvailableAsync();

    if (!isAvailable) {
      posthog.capture('store_review_unavailable', {
        reason: 'not_available_on_platform',
      });
      return false;
    }

    await StoreReview.requestReview();

    posthog.capture('store_review_requested', {
      success: true,
    });

    return true;
  } catch (error) {
    posthog.capture('store_review_error', {
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    return false;
  }
}

/**
 * Check if store review is available on this platform
 */
export async function isStoreReviewAvailable(): Promise<boolean> {
  try {
    return await StoreReview.isAvailableAsync();
  } catch {
    return false;
  }
}
