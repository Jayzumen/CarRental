import { create } from "zustand";

interface IModalStore {
  isOpen: boolean;
  toggle: () => void;
}

export const useLoginModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useReservationModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const useMobileMenuStore = create<IModalStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
