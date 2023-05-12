import { create } from "zustand";

interface IModalStore {
  isOpen: boolean;
  toggle: () => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useMobileMenuStore = create<IModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
