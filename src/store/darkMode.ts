import { create } from "zustand";

export type Theme = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
const modeStore = create<Theme>((set) => ({
  darkMode: false,
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return { darkMode: newMode };
    }),
}));

export default modeStore;
