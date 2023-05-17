import { StaticImageData } from "next/image";

interface ReservationData {
  id: string;
  pickupDate: string;
  dropoffDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  car: string;
  image: StaticImageData | undefined;
  price: number;
}
