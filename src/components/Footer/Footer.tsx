import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center p-20">
      <div className="mx-auto flex flex-wrap justify-center gap-x-12 gap-y-8 text-center lg:w-[80%] lg:justify-between lg:gap-20">
        <section className="flex flex-col gap-4">
          <h4 className="text-xl font-bold">
            CAR
            <span className="font-light"> Rental</span>
          </h4>
          <p className="mx-auto max-w-[200px] text-sm font-light">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>

          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold">Phone:</span> (123) 456-7890
            </p>
            <p>
              <span className="font-bold">Email:</span>
              carrental@gmail.com
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h4 className="text-xl font-bold">COMPANY</h4>
          <ul className="flex flex-col gap-2">
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h4 className="text-xl font-bold">WORKING HOURS</h4>
          <p>
            <span className="font-bold">Mon - Fri:</span> 8:00 AM - 8:00PM
          </p>
          <p>
            <span className="font-bold">Sat:</span> 8:00 AM - 4:00PM
          </p>
        </section>

        <section className="flex max-w-[250px] flex-col items-center gap-4">
          <h4 className="text-xl font-bold">FOLLOW US</h4>
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
