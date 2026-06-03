import { defineStore } from "pinia";

const STORAGE_KEY = 'theme';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    darkMode: true
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.saveState();
    },
    // Save the state to localStorage
    saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.darkMode))
    },
    loadState() {
      const storedState = localStorage.getItem(STORAGE_KEY);
      if (storedState) {
        this.darkMode = JSON.parse(storedState);
      }
    },
  },
})
