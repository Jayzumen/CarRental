"use client";

import { AiFillCar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { cars } from "@/utils/carModels";
import { locations } from "@/utils/locations";
import { useReservationModalStore } from "@/stores/modalStore";
import ReservationModal from "../util/ReservationModal";
import { useReservationStore } from "@/stores/reservationStore";
import { useSession } from "next-auth/react";
import { FormEvent } from "react";
import { darkToast, lightToast } from "@/lib/toasts";
import { useTheme } from "next-themes";

const Booking = () => {
  const { isOpen, toggle } = useReservationModalStore();
  const { reservationData, handleSubmit } = useReservationStore();
  const { status } = useSession();
  const { resolvedTheme } = useTheme();
  const currentDate = new Date().toISOString().split("T")[0] as string;

  const handleBooking = (e: FormEvent<HTMLFormElement>) => {
    if (status === "unauthenticated") {
      e.preventDefault();
      if (resolvedTheme === "light") {
        darkToast("You need to be logged in to book a car");
      } else {
        lightToast("You need to be logged in to book a car");
      }
    }
    if (status === "authenticated") {
      handleSubmit(e);
      toggle();
    }
  };

  return (
    <div id="booking" className="min-h-[600px] p-4 lg:mx-auto lg:w-[70%]">
      <div className="flex flex-col gap-4 rounded-md border border-gray-400 bg-white p-12 shadow-lg shadow-gray-400 dark:border-gray-800 dark:bg-black dark:shadow-gray-800">
        <h2 className="text-2xl font-bold">Book a car</h2>
        <form
          onSubmit={handleBooking}
          className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-3"
        >
          {/* Car select */}
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 text-lg font-bold"
              htmlFor="car"
            >
              <AiFillCar size={20} className="text-red-500" /> Select your car
            </label>
            <select
              required
              name="car"
              id="car"
              className="cursor-pointer rounded-md border border-gray-300 px-3 py-2"
            >
              {cars.map((car) => (
                <option key={car.name} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>

          {/* Pick up location */}
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 text-lg font-bold"
              htmlFor="pickup"
            >
              <MdLocationOn size={20} className="text-red-500" /> Pick-up
              location
            </label>
            <select
              required
              name="pickup"
              id="pickup"
              className="cursor-pointer rounded-md border border-gray-300 px-3 py-2"
            >
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          {/* Drop off location */}
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 text-lg font-bold"
              htmlFor="dropoff"
            >
              <MdLocationOn size={20} className="text-red-500" /> Drop-off
              location
            </label>
            <select
              required
              name="dropoff"
              id="dropoff"
              className="cursor-pointer rounded-md border border-gray-300 px-3 py-2"
            >
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          {/* Pick up date */}
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 text-lg font-bold"
              htmlFor="pickup-date"
            >
              <FaCalendarAlt size={20} className="text-red-500" />
              Pick-up date
            </label>
            <input
              required
              type="date"
              min={currentDate}
              name="pickup-date"
              id="pickup-date"
              className="cursor-pointer rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Drop off date */}
          <div className="flex flex-col gap-2">
            <label
              className="flex items-center gap-2 text-lg font-bold"
              htmlFor="dropoff-date"
            >
              <FaCalendarAlt size={20} className="text-red-500" />
              Drop-off date
            </label>
            <input
              required
              type="date"
              min={currentDate}
              name="dropoff-date"
              id="dropoff-date"
              className="cursor-pointer rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Submit */}
          <div className="flex items-end justify-start">
            <button
              type="submit"
              className="w-full rounded-sm bg-red-500 px-8 py-2 text-center text-xl font-semibold text-white transition duration-300 hover:bg-red-600"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Reservation modal */}
      {isOpen && (
        <ReservationModal
          open={isOpen}
          toggle={toggle}
          data={reservationData}
        />
      )}
    </div>
  );
};

export default Booking;
