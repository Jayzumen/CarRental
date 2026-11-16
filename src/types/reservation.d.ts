export interface ReservationData {
  pickupDate: string;
  dropoffDate: string;
  pickupLocation: string;
  dropoffLocation: string;
  car: string;
  price: number;
  userId?: string;
}

export interface Booking extends ReservationData {
  id: string;
  userId: string;
  createdAt: string;
}
