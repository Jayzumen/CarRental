"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, CarFront, Lock, LogOut } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CarImage } from "@/components/fleet/CarImage";
import { findCar } from "@/data/fleet";
import { formatDate, formatPrice, rentalDays } from "@/lib/utils";
import type { Booking } from "@/types/reservation";

export function ProfileView() {
  const { user, ready, openSignIn, signOut } = useAuth();
  const [bookings, setBookings] = useState<Booking[] | null>(null);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    (async () => {
      try {
        const { db, collection, getDocs, query, where } =
          await import("@/lib/firebase/db");
        const snap = await getDocs(
          query(collection(db, "bookings"), where("userId", "==", user.uid)),
        );
        const rows = snap.docs
          .map((d) => ({ id: d.id, ...d.data() }) as Booking)
          .sort(
            (a, b) =>
              new Date(b.pickupDate).getTime() -
              new Date(a.pickupDate).getTime(),
          );
        if (!cancelled) setBookings(rows);
      } catch {
        if (!cancelled) setBookings([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (!ready) return <ProfileSkeleton />;

  if (!user) {
    return (
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
        <span className="grid size-14 place-items-center rounded-2xl bg-muted">
          <Lock className="size-6 text-muted-foreground" />
        </span>
        <h1 className="text-3xl font-semibold">Sign in to see your bookings</h1>
        <p className="max-w-md text-muted-foreground">
          Your reservations, receipts and upcoming trips — all in one place.
        </p>
        <Button size="lg" onClick={openSignIn}>
          Sign in
        </Button>
      </section>
    );
  }

  const name = user.displayName || user.email || "Driver";
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = bookings?.filter((b) => b.dropoffDate >= today).length ?? 0;
  const spent = bookings?.reduce((sum, b) => sum + (b.price || 0), 0) ?? 0;

  return (
    <>
      <section className="border-b">
        <div className="container-page flex flex-col gap-8 py-12 sm:py-16 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-5">
            <Avatar name={name} size={64} />
            <div>
              <p className="text-sm text-muted-foreground">Welcome back</p>
              <h1 className="text-3xl font-semibold sm:text-4xl">{name}</h1>
            </div>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/#booking">
                New booking <ArrowRight />
              </Link>
            </Button>
            <Button variant="outline" onClick={signOut}>
              <LogOut /> Sign out
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page flex flex-col gap-10 py-12 sm:py-16">
        <dl className="grid grid-cols-3 divide-x rounded-2xl border bg-card shadow-soft">
          {[
            { label: "Total bookings", value: bookings?.length ?? "–" },
            { label: "Upcoming", value: bookings ? upcoming : "–" },
            {
              label: "Total spent",
              value: bookings ? formatPrice(spent) : "–",
            },
          ].map((s) => (
            <div key={s.label} className="p-5 sm:p-6">
              <dt className="text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </dt>
              <dd className="mt-1 text-xl font-semibold tabular-nums sm:text-2xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Your reservations</h2>

          {bookings === null ? (
            <div className="grid gap-4">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="h-36 animate-pulse rounded-2xl bg-muted"
                />
              ))}
            </div>
          ) : bookings.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed px-6 py-16 text-center">
              <CarFront className="size-8 text-muted-foreground" />
              <p className="text-lg font-semibold">No bookings yet</p>
              <p className="max-w-sm text-sm text-muted-foreground">
                When you reserve a car it will show up here with all the trip
                details.
              </p>
              <Button asChild className="mt-2">
                <Link href="/car-models">Browse the fleet</Link>
              </Button>
            </div>
          ) : (
            <ul className="grid gap-4">
              {bookings.map((b) => {
                const car = findCar(b.car);
                const isUpcoming = b.dropoffDate >= today;
                const days = rentalDays(b.pickupDate, b.dropoffDate);
                return (
                  <li
                    key={b.id}
                    className="grid overflow-hidden rounded-2xl border bg-card shadow-soft sm:grid-cols-[14rem_1fr]"
                  >
                    {car ? (
                      <CarImage
                        car={car}
                        sizes="224px"
                        className="aspect-[16/10] sm:aspect-auto sm:h-full"
                      />
                    ) : (
                      <div className="grid aspect-[16/10] place-items-center bg-muted sm:aspect-auto">
                        <CarFront className="size-8 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex flex-col gap-4 p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-lg font-semibold">{b.car}</p>
                          <p className="font-mono text-xs text-muted-foreground">
                            #{b.id.slice(0, 8).toUpperCase()}
                          </p>
                        </div>
                        <Badge variant={isUpcoming ? "primary" : "default"}>
                          {isUpcoming ? "Upcoming" : "Completed"}
                        </Badge>
                      </div>
                      <div className="grid gap-4 text-sm sm:grid-cols-3">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Pick-up
                          </p>
                          <p className="font-medium">{b.pickupLocation}</p>
                          <p className="flex items-center gap-1.5 text-muted-foreground">
                            <CalendarDays className="size-3.5" />
                            {formatDate(b.pickupDate)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Return
                          </p>
                          <p className="font-medium">{b.dropoffLocation}</p>
                          <p className="flex items-center gap-1.5 text-muted-foreground">
                            <CalendarDays className="size-3.5" />
                            {formatDate(b.dropoffDate)}
                          </p>
                        </div>
                        <div className="sm:text-right">
                          <p className="text-xs text-muted-foreground">
                            {days} {days === 1 ? "day" : "days"}
                          </p>
                          <p className="text-xl font-semibold tabular-nums">
                            {formatPrice(b.price)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

function ProfileSkeleton() {
  return (
    <div className="container-page flex flex-col gap-6 py-16">
      <div className="flex items-center gap-5">
        <div className="size-16 animate-pulse rounded-full bg-muted" />
        <div className="h-9 w-64 animate-pulse rounded-lg bg-muted" />
      </div>
      <div className="h-24 animate-pulse rounded-2xl bg-muted" />
      <div className="h-36 animate-pulse rounded-2xl bg-muted" />
    </div>
  );
}
