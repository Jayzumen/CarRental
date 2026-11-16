import { Star } from "lucide-react";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Avatar } from "@/components/ui/avatar";
import { testimonials } from "@/data/site";
import { cn } from "@/lib/utils";

export function TestimonialGrid({
  limit,
  className = "md:columns-2 lg:columns-3",
}: {
  limit?: number;
  className?: string;
}) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <div className={cn("columns-1 gap-4", className)}>
      {items.map((t, i) => (
        <figure
          key={t.name}
          className={cn(
            "mb-4 flex break-inside-avoid flex-col gap-6 rounded-3xl border bg-card p-7 shadow-soft",
            i === 0 && "lg:bg-ink lg:text-ink-foreground",
          )}
        >
          <div className="flex gap-0.5 text-amber-500" aria-label="5 out of 5">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="size-4 fill-current" />
            ))}
          </div>
          <blockquote
            className={cn("leading-relaxed", i === 0 && "lg:text-lg")}
          >
            “{t.quote}”
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <Avatar
              name={t.name}
              size={40}
              className={cn(i === 0 && "lg:bg-ink-foreground lg:text-ink")}
            />
            <div className="text-sm">
              <p className="font-semibold">{t.name}</p>
              <p
                className={cn(
                  "text-muted-foreground",
                  i === 0 && "lg:text-ink-muted",
                )}
              >
                {t.role} · {t.city}
              </p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section border-t bg-card">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by thousands of drivers."
          description="Rated 4.9 out of 5 from over 2,400 verified rentals."
          align="center"
        />
        <TestimonialGrid limit={6} />
      </div>
    </section>
  );
}
