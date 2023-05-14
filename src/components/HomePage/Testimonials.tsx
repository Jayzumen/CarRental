import { FaUserCircle } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="flex min-h-[calc(100vh-100px)] flex-col justify-center gap-4 py-8">
      <p className="text-center text-xl font-semibold">Reviewed by People</p>
      <h3 className="text-center text-5xl font-bold">
        Client&apos;s Testimonials
      </h3>
      <p className="mx-auto max-w-[600px] text-center text-gray-500">
        Discover the positive impact we&apos;ve made on the our clients by
        reading through their testimonials. Our clients have experienced our
        service and results, and they&apos;re eager to share their positive
        experiences with you.
      </p>
      <div className="my-12 flex flex-wrap justify-center gap-12">
        <section className="flex max-w-[450px] flex-col gap-4 border border-gray-700 bg-white p-4 shadow-sm shadow-gray-700 dark:bg-[#141414]">
          <p className="min-h-[120px] text-xl font-semibold">
            &apos;&apos;We rented a car from this website and had an amazing
            experience! The booking was easy and the rental rates were very
            affordable.&apos;&apos;
          </p>
          <div className="flex items-center gap-4">
            <FaUserCircle
              size={50}
              className="rounded-full bg-black text-white shadow-md shadow-gray-400"
            />
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Anonymous User</p>
              <p className="text-lg">Frankfurt</p>
            </div>
          </div>
        </section>
        <section className="flex max-w-[450px] flex-col gap-4 border border-gray-700 bg-white p-4 shadow-sm shadow-gray-700 dark:bg-[#141414]">
          <p className="min-h-[120px] text-xl font-semibold">
            &apos;&apos;The car was in great condition and made our trip even
            better. I highly recommend this car rental service!&apos;&apos;
          </p>
          <div className="flex items-center gap-4">
            <FaUserCircle
              size={50}
              className="rounded-full bg-black text-white shadow-md shadow-gray-400"
            />
            <div className="flex flex-col ">
              <p className="text-xl font-semibold">Anonymous User</p>
              <p className="text-lg">Berlin</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
