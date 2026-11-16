import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Car } from "@/data/fleet";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { CarImage } from "./CarImage";
import { CarSpecs } from "./CarSpecs";

export function CarCard({ car, priority }: { car: Car; priority?: boolean }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-soft transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-lift">
      <div className="relative">
        <CarImage
          car={car}
          priority={priority}
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="[&_img]:group-hover:scale-[1.04]"
        />
        <Badge
          variant={car.photo === "lifestyle" ? "glass" : "outline"}
          className={
            car.photo === "lifestyle"
              ? "absolute top-4 left-4 bg-black/30"
              : "absolute top-4 left-4 bg-white/80 text-neutral-600"
          }
        >
          {car.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground">
              {car.brand} · {car.year}
            </p>
            <h3 className="mt-1 text-lg font-semibold">{car.model}</h3>
          </div>
          <p className="text-right">
            <span className="block text-xl font-semibold tabular-nums">
              {formatPrice(car.price)}
            </span>
            <span className="text-xs text-muted-foreground">per day</span>
          </p>
        </div>

        <CarSpecs car={car} />

        <Link
          href={`/?car=${car.slug}#booking`}
          className="mt-auto inline-flex items-center justify-between rounded-full border px-5 py-2.5 text-sm font-medium transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground after:absolute after:inset-0 after:content-['']"
          aria-label={`Book the ${car.name}`}
        >
          Book this car
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
