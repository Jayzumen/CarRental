import Image from "next/image";
import {
  BadgeEuro,
  Headset,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import aboutImage from "@/assets/premium-cars/bmw-m2.jpg";
import { SectionHeading } from "@/components/layout/SectionHeading";

const features = [
  {
    icon: BadgeEuro,
    title: "Transparent pricing",
    text: "Insurance, taxes and unlimited kilometres included. No deposit surprises.",
  },
  {
    icon: MapPinned,
    title: "12 cities, one-way friendly",
    text: "Pick up in Berlin, return in Munich. Flexible by default.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured",
    text: "Comprehensive cover on every rental, with optional zero excess.",
  },
  {
    icon: Headset,
    title: "24/7 human support",
    text: "Real people, around the clock, wherever the road takes you.",
  },
];

export function Features() {
  return (
    <section className="section container-page">
      <SectionHeading
        eyebrow="Why Drivora"
        title="Everything you expect from premium. Nothing you don't."
        align="center"
      />
      <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        <div className="relative isolate flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl bg-ink p-8 text-ink-foreground lg:row-span-2">
          <Image
            src={aboutImage}
            alt=""
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 400px, 100vw"
            className="-z-10 object-cover opacity-70"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
          />
          <Sparkles className="mb-4 size-6 text-primary" />
          <h3 className="text-2xl font-semibold">
            Every car detailed before every trip.
          </h3>
          <p className="mt-2 text-sm text-ink-muted">
            A 60-point inspection and full valet between each rental — no
            exceptions.
          </p>
        </div>
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col gap-4 rounded-3xl border bg-card p-7 shadow-soft"
          >
            <f.icon className="size-6 text-primary" />
            <div className="flex flex-col gap-1.5">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
