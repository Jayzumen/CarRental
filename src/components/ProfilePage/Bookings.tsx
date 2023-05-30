import { Booking } from "@prisma/client";
import React from "react";

type Props = {
  bookings: Booking[];
};

const Bookings = ({ bookings }: Props) => {
  return (
    <>
      {bookings
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        .slice(0, 4)
        .map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col gap-4 rounded-md bg-gray-200 p-4 text-xl font-semibold dark:bg-gray-700"
          >
            <p className="">
              Booking ID:{" "}
              <span className="text-lg text-gray-500 dark:text-gray-400">
                {booking.id}
              </span>
            </p>
            <p className="">
              Car:{" "}
              <span className="text-lg text-gray-500 dark:text-gray-400">
                {booking.car}
              </span>
            </p>
            <p className="">
              Pickup Date:{" "}
              <span className="text-lg text-gray-500 dark:text-gray-400">
                {booking.pickupDate}
              </span>
            </p>
            <p className="">
              Dropoff Date:{" "}
              <span className="text-lg text-gray-500 dark:text-gray-400">
                {booking.dropoffDate}
              </span>
            </p>
            <p className="">
              Pickup Location:{" "}
              <span className="text-lg text-gray-500 dark:text-gray-400">
                {booking.pickupLocation}
              </span>
            </p>
            <p className="">
              Dropoff Location:{" "}
              <span className="text-lg text-gray-500 dark:text-gray-400">
                {booking.dropoffLocation}
              </span>
            </p>
            <p className="">
              Total Price:{" "}
              <span className="text-lg text-gray-500 dark:text-gray-400">
                {booking.price}
              </span>
            </p>
          </div>
        ))}
    </>
  );
};

export default Bookings;
