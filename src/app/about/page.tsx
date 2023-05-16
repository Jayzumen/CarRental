import AboutSection from "@/components/AboutPage/AboutSection";
import CallToAction from "@/components/HomePage/CallToAction";
import Banner from "@/components/util/Banner";
import PageHeader from "@/components/util/PageHeader";
import Link from "next/link";
import { AiFillPhone } from "react-icons/ai";

export const metadata = {
  title: "About",
  description: "About page",
};

const About = () => {
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl font-bold">About</h1>
        <div className="flex gap-2">
          <Link
            className="text-lg font-semibold transition-colors duration-200 hover:text-red-500"
            href={"/"}
          >
            Home
          </Link>
          <p className="text-lg font-semibold">/ About</p>
        </div>
      </PageHeader>

      <div className="flex flex-col gap-12 pt-[500px]">
        <AboutSection />
        <CallToAction />
        <Banner>
          <div className="flex flex-wrap justify-center gap-4">
            <p className="text-3xl font-bold">
              Book a car by getting in touch with us
            </p>
            <div className="flex items-center gap-4 text-red-500">
              <AiFillPhone size={40} />{" "}
              <p className="text-3xl font-semibold">(123) 456-7890</p>
            </div>
          </div>
        </Banner>
      </div>
    </>
  );
};

export default About;
