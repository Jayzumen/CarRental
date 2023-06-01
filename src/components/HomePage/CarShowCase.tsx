"use client";
import Image from "next/image";
import { cars } from "@/utils/carModels";
import { useFleetStore } from "@/stores/fleetStore";
import ScrollLink from "../util/ScrollLink";

const CarShowCase = () => {
  const { selectedFleet, setSelectedFleet } = useFleetStore();

  return (
    <div className="my-20 flex min-h-[800px] flex-col gap-4 px-4 xl:mx-auto xl:w-[70%]">
      <p className="text-center text-2xl font-semibold">Car Models</p>
      <h2 className="text-center text-5xl font-bold">Our rental fleet</h2>
      <p className="mx-auto max-w-[500px] text-center text-gray-500">
        Choose from a variety of amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <div className="my-8 flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
        {/* Car Selector */}
        <section className="flex w-full flex-col gap-4 lg:basis-1/4">
          {cars.map((car) => (
            <button
              key={car.name}
              className={`${
                selectedFleet?.name === car.name
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black transition-colors duration-200 hover:bg-red-500 hover:text-white"
              } px-4 py-2 text-xl font-semibold`}
              onClick={() => setSelectedFleet(car)}
            >
              {car.name}
            </button>
          ))}
        </section>
        {/* Car Image */}
        <section className="mx-auto flex justify-center lg:basis-1/2">
          <Image
            height={300}
            width={550}
            src={selectedFleet.image}
            alt={selectedFleet.name}
          />
        </section>
        {/* Car Details */}
        <section className="w-full lg:basis-1/4">
          <div className="flex flex-col">
            <div className=" bg-red-500 px-4 py-2 text-white">
              <p className="text-xl">
                <span className="text-3xl font-bold">
                  {selectedFleet.price}€
                </span>{" "}
                / rent per day
              </p>
            </div>
            <table className="w-full border-2 border-gray-500">
              <tbody>
                <tr className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500 p-2 text-gray-500">
                    Brand
                  </td>
                  <td className="min-w-[150px] p-2 text-right">
                    {selectedFleet.details.brand}
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500 p-2 text-gray-500">
                    Model
                  </td>
                  <td className="p-2 text-right">
                    {selectedFleet.details.model}
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500 p-2 text-gray-500">
                    Year
                  </td>
                  <td className="p-2 text-right">
                    {selectedFleet.details.year}
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500 p-2 text-gray-500">
                    Fuel
                  </td>
                  <td className="p-2 text-right">
                    {selectedFleet.details.fuel}
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500 p-2 text-gray-500">
                    Doors
                  </td>
                  <td className="p-2 text-right">
                    {selectedFleet.details.doors}
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500 p-2 text-gray-500">
                    AC
                  </td>
                  <td className="p-2 text-right">
                    {selectedFleet.details.AC ? "Yes" : "No"}
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-500">
                  <td className="border-r-2 border-gray-500 p-2 text-gray-500">
                    Gearbox
                  </td>
                  <td className="p-2 text-right">
                    {selectedFleet.details.Gearbox}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Reserve Button */}
            <ScrollLink
              href="#booking"
              className="mt-4 bg-red-500 px-8 py-2 text-center text-xl font-semibold text-white transition hover:bg-red-600"
            >
              RESERVE NOW
            </ScrollLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarShowCase;
