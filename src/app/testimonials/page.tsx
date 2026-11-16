import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { TestimonialGrid } from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What our customers say about renting with Drivora.",
};

const breakdown = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumb="Reviews"
        eyebrow="Customer reviews"
        title="Don't take our word for it."
        description="Every review comes from a verified rental. Here's what drivers across Germany say about Drivora."
      />

      <section className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[18rem_1fr]">
        <aside className="flex h-fit flex-col gap-6 rounded-3xl border bg-card p-7 shadow-soft lg:sticky lg:top-24">
          <div>
            <p className="text-5xl font-semibold tabular-nums">4.9</p>
            <div className="mt-2 flex gap-0.5 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Based on 2,431 verified rentals
            </p>
          </div>
          <ul className="flex flex-col gap-2.5 text-sm">
            {breakdown.map((b) => (
              <li key={b.stars} className="flex items-center gap-3">
                <span className="w-3 text-muted-foreground tabular-nums">
                  {b.stars}
                </span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <span
                    className="block h-full rounded-full bg-foreground"
                    style={{ width: `${b.pct}%` }}
                  />
                </span>
                <span className="w-8 text-right text-muted-foreground tabular-nums">
                  {b.pct}%
                </span>
              </li>
            ))}
          </ul>
        </aside>
        <TestimonialGrid className="md:columns-2" />
      </section>

      <CtaBanner title="Your trip could be the next review." />
    </>
  );
}
