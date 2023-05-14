import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-center border-t-2 border-gray-200 bg-white px-10 py-20 dark:border-gray-800 dark:bg-black">
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 p-4 text-center lg:justify-around lg:gap-20 2xl:w-[70%]">
        <section className="flex flex-col gap-4">
          <h5 className="text-xl font-bold text-red-500">
            CAR
            <span className="font-light text-black dark:text-white">
              {" "}
              Rental
            </span>
          </h5>
          <p className="mx-auto max-w-[200px] text-sm font-light">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>

          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold">Phone:</span> (123) 456-7890
            </p>
            <p>
              <span className="font-bold">Email: </span>
              carrental@gmail.com
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h5 className="text-xl font-bold">COMPANY</h5>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer transition-colors hover:text-red-500">
              Careers
            </li>
            <li className="cursor-pointer transition-colors hover:text-red-500">
              Mobile
            </li>
            <li className="cursor-pointer transition-colors hover:text-red-500">
              Blog
            </li>
            <li className="cursor-pointer transition-colors hover:text-red-500">
              How we work
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h5 className="text-xl font-bold">WORKING HOURS</h5>
          <p>
            <span className="font-bold">Mon - Fri:</span> 8:00 AM - 8:00PM
          </p>
          <p>
            <span className="font-bold">Sat:</span> 8:00 AM - 4:00PM
          </p>
        </section>

        <section className="flex max-w-[250px] flex-col items-center gap-4">
          <h5 className="text-xl font-bold">FOLLOW US</h5>
          <div className="flex gap-4">
            <FaFacebookF className="h-8 w-8 cursor-pointer rounded-full bg-gray-200 p-1 transition hover:scale-105 dark:text-black " />
            <FaInstagram className="h-8 w-8 cursor-pointer rounded-full bg-gray-200 p-1 transition hover:scale-105 dark:text-black " />
            <FaTwitter className="h-8 w-8 cursor-pointer rounded-full bg-gray-200 p-1 transition hover:scale-105 dark:text-black " />
          </div>

          <div className="text-sm font-light">
            © 2023 Car Rental. All rights reserved. Designed by{" "}
            <Link
              href={"https://github.com/Jayzumen"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Jayzumen
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
