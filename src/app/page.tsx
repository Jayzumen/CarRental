import Booking from "@/components/HomePage/Booking";
import CallToAction from "@/components/HomePage/CallToAction";
import CarShowCase from "@/components/HomePage/CarShowCase";
import HeroSection from "@/components/HomePage/HeroSection";
import Testimonials from "@/components/HomePage/Testimonials";
import Banner from "@/components/util/Banner";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <Booking />
      <CallToAction />
      <CarShowCase />
      <Banner>
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-4xl font-bold">
            Save big with our cheap car rental service!
          </h3>
          <p className="mx-auto max-w-[500px]">
            Take advantage of our cheap rates today and secure the vehicle type
            best suiting your travel needs.{" "}
            <span className="text-red-500">24/7</span> Support.
          </p>
        </div>
      </Banner>
      <Testimonials />
    </div>
  );
}
