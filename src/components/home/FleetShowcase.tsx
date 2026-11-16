"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CarImage } from "@/components/fleet/CarImage";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { findCar, fleet } from "@/data/fleet";
import { cn, formatPrice } from "@/lib/utils";
import { useBookingStore } from "@/stores/booking";

export function FleetShowcase() {
  const slug = useBookingStore((s) => s.car);
  const setCar = useBookingStore((s) => s.setCar);
  const car = findCar(slug) ?? fleet[0]!;

  const details = [
    ["Brand", car.brand],
    ["Model", car.model],
    ["Year", car.year],
    ["Fuel", car.fuel],
    ["Gearbox", car.gearbox],
    ["Seats", car.seats],
    ["Doors", car.doors],
    ["Air conditioning", car.ac ? "Yes" : "No"],
  ] as const;

  return (
    <section className="section border-y bg-card">
      <div className="container-page flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Our fleet"
            title="Hand-picked cars for every kind of trip."
            description="From nimble city compacts to 600 hp grand tourers — all serviced, insured and ready to go."
          />
          <Button asChild variant="outline" className="w-fit">
            <Link href="/car-models">
              View all models <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[15rem_1fr_19rem]">
          {/* Selector */}
          <div
            role="tablist"
            aria-label="Select a car"
            className="-mx-4 flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
          >
            {fleet.map((c) => {
              const active = c.slug === car.slug;
              return (
                <button
                  key={c.slug}
                  role="tab"
                  aria-selected={active}
                  aria-controls="fleet-panel"
                  onClick={() => setCar(c.slug)}
                  className={cn(
                    "flex shrink-0 items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left text-sm transition-colors focus-visible:ring-4 focus-visible:ring-ring",
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-transparent bg-muted hover:border-border hover:bg-background",
                  )}
                >
                  <span className="font-medium whitespace-nowrap">
                    {c.name}
                  </span>
                  <span
                    className={cn(
                      "hidden text-xs tabular-nums lg:inline",
                      active ? "text-background/70" : "text-muted-foreground",
                    )}
                  >
                    €{c.price}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Image */}
          <div
            id="fleet-panel"
            role="tabpanel"
            className="overflow-hidden rounded-2xl border"
          >
            <CarImage
              key={car.slug}
              car={car}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="h-full min-h-72 animate-in duration-500 fade-in-0 lg:aspect-auto"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col overflow-hidden rounded-2xl border bg-background">
            <div className="flex items-baseline justify-between gap-2 border-b p-5">
              <p className="text-sm text-muted-foreground">Daily rate</p>
              <p>
                <span className="text-3xl font-semibold tabular-nums">
                  {formatPrice(car.price)}
                </span>
                <span className="text-sm text-muted-foreground"> /day</span>
              </p>
            </div>
            <dl className="divide-y text-sm">
              {details.map(([k, v]) => (
                <div key={k} className="flex justify-between px-5 py-2.5">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-auto flex flex-col gap-3 p-5">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="size-3.5 text-success" /> Insurance &
                unlimited km included
              </p>
              <Button asChild size="lg">
                <a href="#booking">
                  Reserve {car.model} <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
