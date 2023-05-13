import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import MainCar from "@/assets/cars/main-car.png";

const HeroSection = () => {
  return (
    <div className="flex min-h-[calc(100vh-120px)] items-center justify-center gap-8 px-10 2xl:mx-auto 2xl:w-[70%] 2xl:justify-between">
      {/* Informations */}
      <section className="flex flex-col gap-4 text-center md:text-start">
        <p className="text-2xl font-semibold">Plan your trip now</p>
        <h1 className="text-6xl font-bold">
          Save <span className="text-red-500">big</span> with{" "}
          <br className="hidden md:block" /> our car rental
        </h1>
        <p className="max-w-[350px] text-gray-500">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl">
          <button className="flex items-center gap-2 rounded-sm bg-red-500 p-4 text-white transition duration-300 hover:shadow-md hover:shadow-slate-900 dark:hover:shadow-white">
            <span className="font-semibold">Book a Ride</span>
            <AiFillCheckCircle size={15} />
          </button>
          <button className="flex items-center gap-2 rounded-sm border border-black bg-black p-4 text-white transition duration-300 hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white">
            <span className="font-semibold">Learn More</span>
            <BsChevronRight size={15} />
          </button>
        </div>
      </section>

      {/* Image */}
      <section className="relative hidden md:h-[250px] md:w-[400px] lg:block 2xl:h-[450px] 2xl:w-[800px]">
        <Image priority fill src={MainCar} alt="main-car" />
      </section>
    </div>
  );
};

export default HeroSection;
