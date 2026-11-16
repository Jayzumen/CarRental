"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { CalendarDays, Car as CarIcon, MapPin, Search } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, Input, Label, Select } from "@/components/ui/field";
import { useAuth } from "@/components/auth/AuthProvider";
import { categories, findCar, fleet } from "@/data/fleet";
import { locations } from "@/data/site";
import { useBookingStore } from "@/stores/booking";
import type { ReservationData } from "@/types/reservation";

// Loaded on demand the first time a search is submitted.
const ReservationDialog = dynamic(() => import("./ReservationDialog"), {
  ssr: false,
});

const isoDay = () => new Date().toISOString().slice(0, 10);
const noop = () => () => {};

export function BookingWidget() {
  const { user, openSignIn } = useAuth();
  const car = useBookingStore((s) => s.car);
  const setCar = useBookingStore((s) => s.setCar);

  // Client-only value; undefined during SSR so markup stays deterministic.
  const today = useSyncExternalStore(noop, isoDay, () => undefined);
  const [pickupDate, setPickupDate] = useState("");
  const [reservation, setReservation] = useState<ReservationData | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Optional ?car= preselection (links from the fleet page)
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("car");
    if (slug && findCar(slug)) setCar(slug);
  }, [setCar]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const selected = findCar(String(data.get("car")));
    const from = String(data.get("pickup-date"));
    const to = String(data.get("dropoff-date"));

    if (!selected) return;
    if (new Date(to) < new Date(from)) {
      toast.error("Return date must be after pick-up date.");
      return;
    }
    if (!user) {
      toast("Please sign in to continue your booking.");
      openSignIn();
      return;
    }

    setReservation({
      car: selected.name,
      price: selected.price,
      pickupLocation: String(data.get("pickup")),
      dropoffLocation: String(data.get("dropoff")),
      pickupDate: from,
      dropoffDate: to,
    });
    setDialogOpen(true);
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        aria-label="Book a car"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_auto] lg:items-end"
      >
        <Field>
          <Label htmlFor="car">
            <CarIcon /> Vehicle
          </Label>
          <Select
            id="car"
            name="car"
            required
            value={car}
            onChange={(e) => setCar(e.target.value)}
          >
            {categories.map((cat) => (
              <optgroup key={cat} label={cat}>
                {fleet
                  .filter((c) => c.category === cat)
                  .map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name} · €{c.price}/day
                    </option>
                  ))}
              </optgroup>
            ))}
          </Select>
        </Field>
        <Field>
          <Label htmlFor="pickup">
            <MapPin /> Pick-up
          </Label>
          <Select id="pickup" name="pickup" required defaultValue="Frankfurt">
            {locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label htmlFor="dropoff">
            <MapPin /> Return
          </Label>
          <Select id="dropoff" name="dropoff" required defaultValue="Frankfurt">
            {locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </Select>
        </Field>
        <Field>
          <Label htmlFor="pickup-date">
            <CalendarDays /> From
          </Label>
          <Input
            id="pickup-date"
            name="pickup-date"
            type="date"
            required
            min={today}
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="dropoff-date">
            <CalendarDays /> Until
          </Label>
          <Input
            id="dropoff-date"
            name="dropoff-date"
            type="date"
            required
            min={pickupDate || today}
          />
        </Field>
        <Button
          type="submit"
          size="lg"
          className="h-11 sm:col-span-2 lg:col-span-1"
        >
          <Search /> <span className="lg:sr-only xl:not-sr-only">Search</span>
        </Button>
      </form>

      {reservation && (
        <ReservationDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          data={reservation}
        />
      )}
    </>
  );
}
