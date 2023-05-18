import { StaticImageData } from "next/image";

interface ReservationData {
  pickupDate: string;
  dropoffDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  car: string;
  image?: StaticImageData | undefined;
  price: number;
}

interface DBReservationData extends ReservationData {
  userId: string;
}
