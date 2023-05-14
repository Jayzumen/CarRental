import icon1 from "@/assets/plan/icon1.png";
import icon2 from "@/assets/plan/icon2.png";
import icon3 from "@/assets/plan/icon3.png";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="my-20 flex min-h-[600px] flex-col items-center gap-4 lg:mx-auto lg:w-[70%]">
      <p className="text-2xl font-semibold">Plan your trip now</p>
      <h2 className="text-center text-5xl font-bold">
        Quick & easy car rental
      </h2>
      <div className="mt-20 flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col items-center gap-4">
          <Image src={icon1} alt="icon1" width={150} height={150} />
          <p className="text-2xl font-bold">Select Car</p>
          <p className="mx-auto max-w-[300px] text-center text-gray-500">
            We offer a big range of vehicles for all your driving needs. We have
            the perfect car to meet your needs.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={icon2} alt="icon2" width={150} height={150} />
          <p className="text-2xl font-bold">Contact Operator</p>
          <p className="mx-auto max-w-[300px] text-center text-gray-500">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={icon3} alt="icon3" width={150} height={150} />
          <p className="text-2xl font-bold">Let&apos;s Drive</p>
          <p className="mx-auto max-w-[300px] text-center text-gray-500">
            Whether you&apos;re hitting the open road, we&apos;ve got you
            covered with our wide range of cars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
