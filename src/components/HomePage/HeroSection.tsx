import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import MainCar from "@/assets/cars/main-car.png";

const HeroSection = () => {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-120px)] items-center justify-center px-10 lg:w-[80%] lg:justify-between xl:px-40">
      {/* Informations */}
      <section className="flex flex-col gap-4 text-center md:text-start">
        <p className="text-xl">Plan your trip now</p>
        <h1 className="text-5xl font-bold">
          Save <span className="text-red-500">big</span> with our{" "}
          <br className="hidden md:block" /> car rental
        </h1>
        <p className="mx-auto max-w-[350px] text-sm text-gray-500 md:mx-0">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className="mx-auto flex gap-4 md:mx-0">
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
      <section className="hidden lg:block">
        <Image priority width={500} height={500} src={MainCar} alt="main-car" />
      </section>
    </div>
  );
};

export default HeroSection;
