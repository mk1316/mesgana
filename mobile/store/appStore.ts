import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Language = 'amharic' | 'english';
export type Theme = 'light' | 'dark' | null;

interface AppState {
  language: Language;
  theme: Theme;
  favorites: string[];
  fontSize: number;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
  setFontSize: (fontSize: number) => void;
  toggleFavorite: (hymnId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'english',
      theme: 'light',
      favorites: [],
      fontSize: 16,
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      toggleFavorite: (hymnId) => set((state) => ({
        favorites: state.favorites.includes(hymnId)
          ? state.favorites.filter(id => id !== hymnId)
          : [...state.favorites, hymnId]
      })),
    }),
    {
      name: 'mobile-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);