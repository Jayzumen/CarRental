import Image from "next/image";
import React from "react";
import AboutImage from "@/assets/about/about-main.jpg";
import { AiFillCar } from "react-icons/ai";
import { GiHomeGarage } from "react-icons/gi";
import { BsTools } from "react-icons/bs";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 md:mx-auto lg:w-[80%] lg:flex-row lg:px-16 2xl:w-[70%]">
      <Image
        height={800}
        width={600}
        src={AboutImage}
        alt="Image of Two People talking"
      />
      <div className="flex flex-col gap-4 px-4 text-center lg:text-start">
        <p className="text-2xl font-semibold">About Us</p>
        <h3 className="text-5xl font-bold">
          You start the engine and your adventure begins
        </h3>
        <p className="max-w-[600px] text-gray-500">
          Welcome to our car rental website! We are dedicated to providing you
          with a seamless and hassle-free experience, ensuring that your journey
          begins with us. Our user-friendly platform allows you to easily browse
          and compare options, making your reservation process quick and
          effortless. We pride ourselves on exceptional customer service,
          offering flexible rental durations and competitive rates. Start your
          adventure today with our reliable and convenient car rental service
        </p>
        <div className="my-8 flex flex-col items-center gap-6 text-center md:flex-row">
          <div className="flex flex-col items-center gap-2">
            <AiFillCar size={70} className="text-red-500" />
            <p className="text-xl font-semibold">Wide Range of Vehicles</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GiHomeGarage size={70} className="text-red-500" />
            <p className="text-xl font-semibold">Convenient Locations</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BsTools size={70} className=" text-red-500" />
            <p className="text-xl font-semibold">24/7 Roadside Assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
