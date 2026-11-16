import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FleetShowcase } from "@/components/home/FleetShowcase";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { CtaBanner } from "@/components/layout/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FleetShowcase />
      <Features />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
