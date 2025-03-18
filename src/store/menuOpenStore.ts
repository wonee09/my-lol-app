import { create } from "zustand";

type MenuToggle = {
  isMenuOpen: boolean;
  setIsMenuOpenToggle: () => void;
};
export const useMenuToggle = create<MenuToggle>((set) => ({
  isMenuOpen: false,
  setIsMenuOpenToggle: () => {
    set((state) => ({ isMenuOpen: !state.isMenuOpen }));
    
  },
}));
