"use client";

import { AiFillCar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const Booking = () => {
  return (
    <div className="min-h-[600px] p-4 lg:mx-auto lg:w-[70%]">
      <div className="flex flex-col gap-4 rounded-md border border-gray-400 bg-white p-12 shadow-lg shadow-gray-400 dark:border-gray-800 dark:bg-black dark:shadow-gray-800">
        <h2 className="text-2xl font-bold">Book a car</h2>
        <form className="grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-3">
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
              <option value="car1">Car 1</option>
              <option value="car2">Car 2</option>
              <option value="car3">Car 3</option>
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
              <option value="">Location 1</option>
              <option value="">Location 2</option>
              <option value="">Location 3</option>
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
              <option value="">Location 1</option>
              <option value="">Location 2</option>
              <option value="">Location 3</option>
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
              name="dropoff-date"
              id="dropoff-date"
              className="cursor-pointer rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Submit */}
          <div className="flex items-end justify-start">
            <button className="w-full rounded-sm bg-red-500 px-4 py-2 text-center text-xl text-white transition duration-300 hover:shadow-md hover:shadow-slate-900 dark:hover:shadow-white">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
