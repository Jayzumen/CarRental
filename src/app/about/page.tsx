import type { Metadata } from "next";
import Image from "next/image";
import { Gauge, HeartHandshake, Leaf, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about/about-main.jpg";
import rs7Image from "@/assets/premium-cars/audi-rs7.jpg";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { HowItWorks } from "@/components/home/HowItWorks";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Drivora is a Frankfurt-based car rental company making premium mobility simple, transparent and personal.",
};

const values = [
  {
    icon: Sparkles,
    title: "Quality without compromise",
    text: "Young, well-maintained cars, detailed before every single rental.",
  },
  {
    icon: HeartHandshake,
    title: "Service that's personal",
    text: "A real team that knows your name — and answers at any hour.",
  },
  {
    icon: Gauge,
    title: "Speed by design",
    text: "Booking in minutes, pick-up without queues, digital vouchers.",
  },
  {
    icon: Leaf,
    title: "Responsible mobility",
    text: "Efficient engines, CO₂-offset rentals and a growing hybrid fleet.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About us"
        title="You start the engine. We handle everything else."
        description="Founded in Frankfurt, Drivora was built on a simple idea: renting a car should feel as good as driving one."
      />

      <section className="section container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-5 grid-rows-6 gap-4">
            <div className="relative col-span-3 row-span-6 overflow-hidden rounded-3xl">
              <Image
                src={rs7Image}
                alt="Audi RS 7 Sportback parked in a city street"
                placeholder="blur"
                fill
                sizes="(min-width: 1024px) 360px, 60vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl">
              <Image
                src={aboutImage}
                alt="Drivora team member handing over car keys"
                placeholder="blur"
                fill
                sizes="(min-width: 1024px) 240px, 40vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 row-span-3 flex flex-col justify-end rounded-3xl bg-primary p-6 text-primary-foreground">
              <p className="text-4xl font-semibold">10+</p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                years on German roads
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Our story"
              title="Built by drivers, for drivers."
            />
            <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
              <p>
                We started with three cars and a small office near Frankfurt
                Hauptbahnhof. Our customers told us what they disliked about
                renting: long queues, unclear fees and cars that felt
                second-hand.
              </p>
              <p>
                So we built the opposite. Today Drivora operates in 12 cities
                with a curated fleet, all-inclusive pricing and a support team
                that is genuinely available around the clock.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="text-3xl font-semibold tabular-nums">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section border-y bg-card">
        <div className="container-page flex flex-col gap-14">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four principles behind every rental."
            align="center"
          />
          <div className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 bg-card p-8">
                <v.icon className="size-6 text-primary" />
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <CtaBanner />
    </>
  );
}
