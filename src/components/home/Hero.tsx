import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/premium-cars/bmw-m4.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { stats } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate">
      <div
        aria-hidden
        className="bg-grid absolute inset-x-0 top-0 -z-10 h-[38rem] [mask-image:radial-gradient(ellipse_60%_80%_at_30%_0%,black,transparent)]"
      />

      <div className="container-page grid items-center gap-12 pt-10 pb-16 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col gap-8">
          <Link
            href="/car-models#performance"
            className="group inline-flex w-fit items-center gap-2 rounded-full border bg-card py-1 pr-3 pl-1 text-sm shadow-soft transition-colors hover:border-foreground/20"
          >
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
              New
            </span>
            <span className="text-muted-foreground">
              Performance collection now available
            </span>
            <ArrowRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>

          <div className="flex flex-col gap-6">
            <h1 className="text-5xl leading-[1.02] font-semibold sm:text-6xl xl:text-7xl">
              Drive something
              <br />
              <span className="text-primary">exceptional.</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Premium and everyday cars across 12 German cities. Transparent
              pricing, unlimited kilometres and a team that picks up at 3 am.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#booking">
                Book a car <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/car-models">Explore the fleet</Link>
            </Button>
          </div>

          <dl className="grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="order-1 text-2xl font-semibold tabular-nums">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink shadow-lift sm:aspect-[5/5] lg:aspect-[4/5]">
            <Image
              src={heroImage}
              alt="BMW M4 Coupé at dusk on an open road"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[50%_70%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-black/35 p-4 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6">
              <div>
                <p className="text-xs text-white/70">Featured</p>
                <p className="font-semibold">BMW M4 Coupé</p>
              </div>
              <p className="text-right">
                <span className="text-xs text-white/70">from</span>{" "}
                <span className="text-lg font-semibold">€169</span>
                <span className="text-xs text-white/70">/day</span>
              </p>
            </div>
          </div>

          <Card className="absolute top-6 -left-6 hidden items-center gap-3 px-4 py-3 sm:flex">
            <div className="flex -space-x-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-sm">
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground"> · 2,400+ reviews</span>
            </p>
          </Card>
        </div>
      </div>

      {/* Booking */}
      <div id="booking" className="container-page scroll-mt-24">
        <Card className="p-5 sm:p-7">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold">Find your car</h2>
            <p className="text-sm text-muted-foreground">
              Free cancellation · No hidden fees
            </p>
          </div>
          <BookingWidget />
        </Card>
      </div>
    </section>
  );
}
