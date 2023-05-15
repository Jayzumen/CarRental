import { Fleet } from "@/types/fleet";
import { create } from "zustand";
import Audi_A1 from "../assets/cars/audia1.jpg";

interface IFleetStore {
  selectedFleet: Fleet;
  setSelectedFleet: (fleet: Fleet) => void;
}

export const useFleetStore = create<IFleetStore>((set) => ({
  selectedFleet: {
    name: "Audi A1 S-Line",
    price: 45,
    image: Audi_A1,
    details: {
      brand: "Audi",
      model: "A1 S-Line",
      year: 2012,
      fuel: "Gasoline",
      doors: 5,
      AC: true,
      Gearbox: "Automatic",
    },
  } as Fleet,
  setSelectedFleet: (fleet: Fleet) => set({ selectedFleet: fleet }),
}));
