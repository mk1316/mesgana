import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Language = 'amharic' | 'english';
export type Theme = 'light' | 'dark' | null;

interface ReviewState {
  appOpenCount: number;
  hymnsViewedCount: number;
  lastReviewPrompt: number | null;
  reviewPromptCount: number;
}

interface AppState {
  language: Language;
  theme: Theme;
  favorites: string[];
  fontSize: number;
  review: ReviewState;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
  setFontSize: (fontSize: number) => void;
  toggleFavorite: (hymnId: string) => void;
  incrementAppOpens: () => void;
  incrementHymnsViewed: () => void;
  recordReviewPrompt: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'english',
      theme: 'light',
      favorites: [],
      fontSize: 16,
      review: {
        appOpenCount: 0,
        hymnsViewedCount: 0,
        lastReviewPrompt: null,
        reviewPromptCount: 0,
      },
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      toggleFavorite: (hymnId) => set((state) => ({
        favorites: state.favorites.includes(hymnId)
          ? state.favorites.filter(id => id !== hymnId)
          : [...state.favorites, hymnId]
      })),
      incrementAppOpens: () => set((state) => ({
        review: { ...state.review, appOpenCount: state.review.appOpenCount + 1 }
      })),
      incrementHymnsViewed: () => set((state) => ({
        review: { ...state.review, hymnsViewedCount: state.review.hymnsViewedCount + 1 }
      })),
      recordReviewPrompt: () => set((state) => ({
        review: {
          ...state.review,
          lastReviewPrompt: Date.now(),
          reviewPromptCount: state.review.reviewPromptCount + 1,
        }
      })),
    }),
    {
      name: 'mobile-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);