import { ReservationData } from "@/types/reservation";
import { cars } from "@/utils/carModels";
import { create } from "zustand";

interface IReservationStore {
  reservationData: ReservationData | undefined;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const useReservationStore = create<IReservationStore>((set) => ({
  reservationData: {
    pickupDate: "",
    dropoffDate: "",
    pickupLocation: "",
    dropoffLocation: "",
    car: "",
    image: undefined,
    price: 0,
  },
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reservationData: ReservationData = {
      pickupDate: data.get("pickup-date") as string,
      dropoffDate: data.get("dropoff-date") as string,
      pickupLocation: data.get("pickup") as string,
      dropoffLocation: data.get("dropoff") as string,
      car: data.get("car") as string,
      image: cars.filter((car) => car.name === data.get("car"))[0].image,
      price: cars.filter((car) => car.name === data.get("car"))[0].price,
    };
    set({ reservationData });

    event.currentTarget.reset();
  },
}));
