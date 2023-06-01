import CarDetails from "@/components/CarModelsPage/CarDetails";
import PageHeader from "@/components/util/PageHeader";
import { cars } from "@/utils/carModels";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Car Models",
  description: "Car Models page",
};

const CarModels = () => {
  return (
    <div>
      <PageHeader>
        <h1 className="text-4xl font-bold">Models</h1>
        <div className="flex gap-2">
          <Link
            className="text-lg font-semibold transition-colors duration-200 hover:text-red-500"
            href={"/"}
          >
            Home
          </Link>
          <p className="text-lg font-semibold">/ Models</p>
        </div>
      </PageHeader>

      <div className="flex flex-col gap-12 pb-24 pt-[500px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-12 px-2">
          {cars.map((car) => (
            <div
              key={car.name}
              className="flex flex-col gap-4 rounded-md border border-gray-500 p-4"
            >
              <div className="min-h-[220px]">
                <Image
                  height={200}
                  width={300}
                  src={car.image}
                  alt={car.name}
                />
              </div>
              <CarDetails car={car} />
              <div className="border border-gray-400" />
              <Link
                href="/"
                className="rounded-sm bg-red-500 p-4 text-center text-xl font-semibold text-white transition duration-300 hover:bg-red-600"
              >
                Book Ride
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarModels;
