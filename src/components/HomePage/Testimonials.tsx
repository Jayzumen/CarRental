import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="flex min-h-[calc(100vh-100px)] flex-col justify-center gap-4 bg-slate-100 text-center dark:bg-[#121212]">
      <p className="text-xl font-semibold">Reviewed by People</p>
      <h3 className="text-5xl font-bold">Client&apos;s Testimonials</h3>
      <p className="mx-auto max-w-[600px] text-gray-500">
        Discover the positive impact we've made on the our clients by reading
        through their testimonials. Our clients have experienced our service and
        results, and they're eager to share their positive experiences with you.
      </p>
      <div className="my-12 flex flex-wrap justify-center gap-12">
        <section className="flex max-w-[450px] flex-col gap-4 border border-gray-700 bg-white p-4 shadow-sm shadow-gray-700 dark:bg-[#141414]">
          <p className="min-h-[120px] text-xl font-semibold">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable."
          </p>
          <div className="flex items-center gap-2">
            <FaUserCircle
              size={50}
              className="rounded-full bg-black text-white shadow-md shadow-gray-400"
            />
            <p className="text-xl font-semibold"></p>
            <p className="text-lg">Frankfurt</p>
          </div>
        </section>
        <section className="flex max-w-[450px] flex-col gap-4 border border-gray-700 bg-white p-4 shadow-sm shadow-gray-700 dark:bg-[#141414]">
          <p className="min-h-[120px] text-xl font-semibold">
            "The car was in great condition and made our trip even better. I
            highly recommend this car rental service!"
          </p>
          <div className="flex items-center gap-2">
            <FaUserCircle
              size={50}
              className="rounded-full bg-black text-white shadow-md shadow-gray-400"
            />
            <p className="text-xl font-semibold"></p>
            <p className="text-lg">Berlin</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
