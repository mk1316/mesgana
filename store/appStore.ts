import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Language = 'amharic' | 'english';
export type Theme = 'light' | 'dark';

interface AppState {
  language: Language;
  theme: Theme;
  favorites: string[];
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
  toggleFavorite: (hymnId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'english',
      theme: 'light',
      favorites: [],
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      toggleFavorite: (hymnId) => set((state) => ({
        favorites: state.favorites.includes(hymnId)
          ? state.favorites.filter(id => id !== hymnId)
          : [...state.favorites, hymnId]
      })),
    }),
    {
      name: 'mesgana-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);