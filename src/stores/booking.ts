import { create } from "zustand";
import { fleet } from "@/data/fleet";

type BookingStore = {
  /** slug of the car pre-selected in the booking widget */
  car: string;
  setCar: (slug: string) => void;
};

export const useBookingStore = create<BookingStore>((set) => ({
  car: fleet[0]!.slug,
  setCar: (car) => set({ car }),
}));
