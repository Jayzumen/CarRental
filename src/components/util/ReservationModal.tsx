"use client";
import Image from "next/image";
import { ReservationData } from "@/types/reservation";
import { AiOutlineClose } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

type Props = {
  open: boolean;
  toggle: () => void;
  data: ReservationData | undefined;
};

const ReservationModal = (props: Props) => {
  if (!props.data) return null;

  const pickupDate = new Date(props.data.pickupDate);
  const dropoffDate = new Date(props.data.dropoffDate);
  const totalDays = Math.floor(
    (dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 3600 * 24) + 1
  );

  return (
    // backdrop
    <div
      onClick={props.toggle}
      className={`
    fixed inset-0 z-20 flex items-center justify-center transition-colors
    ${props.open ? "visible bg-black/40" : "invisible"}
    `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
         flex w-full flex-col border border-slate-800 bg-white shadow-md shadow-slate-800 transition-all duration-300 dark:bg-black md:w-[80%] xl:w-[60%]
        ${props.open ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        {/* Close Button */}
        <button onClick={props.toggle}>
          <AiOutlineClose
            size={30}
            className="absolute right-4 top-5 rounded-full bg-white p-1 transition-colors duration-300 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-gray-500"
          />
        </button>

        {/* Content */}
        <div className="flex flex-col ">
          {/* Header */}
          <div className="w-full bg-red-500 p-4">
            <h2 className="text-3xl font-bold text-white">
              COMPLETE RESERVATION
            </h2>
          </div>
          {/* Reminder */}
          <div className="flex flex-col items-center gap-4 bg-yellow-200 p-4 text-center text-black">
            <div className="flex items-center gap-2">
              <BsInfoCircleFill size={30} className="text-red-500" />
              <p className="text-lg font-semibold">
                Upon completing this reservation enquiry, you will receive:
              </p>
            </div>
            <p className="test-gray-500 mx-auto max-w-[400px]">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>

          {/* Data */}
          <div className="mt-4 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
            {/* Left */}
            <div className="flex flex-col gap-2 px-8">
              <p className="font-bold text-red-500">Location & Date</p>
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1 font-semibold">
                  <FaCalendarAlt size={20} className="text-red-500" />
                  Pickup Date
                </p>
                <p>{props.data.pickupDate}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1 font-semibold">
                  <FaCalendarAlt size={20} className="text-red-500" />
                  Dropoff Date
                </p>
                <p>{props.data.dropoffDate}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1 font-semibold">
                  <MdLocationOn size={20} className="text-red-500" />
                  Pickup Location
                </p>
                <p>{props.data.pickupLocation}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1 font-semibold">
                  <MdLocationOn size={20} className="text-red-500" />
                  Dropoff Location
                </p>
                <p>{props.data.dropoffLocation}</p>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col gap-4">
              <p className="text-center font-semibold">
                Car - <span className="text-red-500">{props.data.car}</span>
              </p>
              <Image
                height={200}
                width={300}
                src={props.data.image!}
                alt={props.data.car}
              />

              <p className=" text-center">
                Total Price:
                <span className="font-semibold">
                  {" "}
                  {props.data.price * totalDays} €
                </span>
              </p>
            </div>
          </div>

          {/* Reserve Button */}
          <div className="flex items-center justify-center p-8">
            <button className="rounded-md bg-red-500 p-2 font-semibold text-white transition-colors duration-300 hover:bg-red-600">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
