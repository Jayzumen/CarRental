import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { CarCard } from "@/components/fleet/CarCard";
import { categories, fleet } from "@/data/fleet";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "Browse compact, sedan, SUV and performance cars available to rent across Germany.",
};

export default function CarModelsPage() {
  return (
    <>
      <PageHero
        crumb="Fleet"
        eyebrow="Our fleet"
        title="Find the right car for the road ahead."
        description="Every model is under four years old, fully insured and includes unlimited kilometres within Germany."
      >
        <nav aria-label="Categories" className="mt-2 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a
              key={c}
              href={`#${c.toLowerCase()}`}
              className="rounded-full border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/25"
            >
              {c}
              <span className="ml-2 text-muted-foreground tabular-nums">
                {fleet.filter((car) => car.category === c).length}
              </span>
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-page flex flex-col gap-20 py-16 sm:py-20">
        {categories.map((cat, ci) => {
          const cars = fleet.filter((c) => c.category === cat);
          return (
            <section
              key={cat}
              id={cat.toLowerCase()}
              aria-labelledby={`${cat}-heading`}
              className="scroll-mt-24"
            >
              <div className="mb-8 flex items-baseline justify-between border-b pb-4">
                <h2 id={`${cat}-heading`} className="text-2xl font-semibold">
                  {cat}
                </h2>
                <p className="text-sm text-muted-foreground">
                  from €{Math.min(...cars.map((c) => c.price))} / day
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {cars.map((car, i) => (
                  <CarCard
                    key={car.slug}
                    car={car}
                    priority={ci === 0 && i < 2}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <CtaBanner
        title="Not sure which car fits?"
        description="Tell us about your trip and our team will recommend the perfect match — usually within minutes."
      />
    </>
  );
}
