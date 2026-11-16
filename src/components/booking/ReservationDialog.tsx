"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Loader2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/components/auth/AuthProvider";
import { CarImage } from "@/components/fleet/CarImage";
import { findCar } from "@/data/fleet";
import { formatDate, formatPrice, rentalDays } from "@/lib/utils";
import type { ReservationData } from "@/types/reservation";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: ReservationData;
};

export default function ReservationDialog({ open, onOpenChange, data }: Props) {
  const { user } = useAuth();
  const [status, setStatus] = useState<"idle" | "saving" | "done">("idle");
  const car = findCar(data.car);
  const days = rentalDays(data.pickupDate, data.dropoffDate);
  const total = data.price * days;

  const confirm = async () => {
    if (!user) return;
    setStatus("saving");
    try {
      const { db, addDoc, collection } = await import("@/lib/firebase/db");
      await addDoc(collection(db, "bookings"), {
        ...data,
        price: total,
        userId: user.uid,
        createdAt: new Date().toISOString(),
      });
      setStatus("done");
      toast.success("Reservation confirmed", {
        description: `${data.car} · ${formatDate(data.pickupDate)}`,
      });
    } catch {
      setStatus("idle");
      toast.error("We couldn't complete your booking. Please try again.");
    }
  };

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    if (!next) setStatus("idle");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden p-0">
        {status === "done" ? (
          <div className="flex flex-col items-center gap-4 px-8 py-14 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-success/15 text-success">
              <CheckCircle2 className="size-7" />
            </span>
            <DialogTitle className="text-2xl">You&apos;re all set</DialogTitle>
            <DialogDescription className="max-w-sm text-base">
              Your {data.car} is reserved for {formatDate(data.pickupDate)} in{" "}
              {data.pickupLocation}. A confirmation and rental voucher are on
              their way to your inbox.
            </DialogDescription>
            <div className="mt-4 flex gap-3">
              <Button variant="outline" onClick={() => handleOpenChange(false)}>
                Close
              </Button>
              <Button asChild>
                <Link href="/profile">
                  View bookings <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col border-b md:border-r md:border-b-0">
              {car && (
                <CarImage
                  car={car}
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="aspect-[4/3]"
                />
              )}
              <div className="flex flex-col gap-1 p-6">
                <p className="text-xs font-medium text-muted-foreground">
                  {car?.category}
                </p>
                <p className="text-lg font-semibold">{data.car}</p>
                <p className="text-sm text-muted-foreground">
                  {formatPrice(data.price)} / day
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div className="flex flex-col gap-1.5 pr-8">
                <DialogTitle className="text-2xl">
                  Review reservation
                </DialogTitle>
                <DialogDescription>
                  Check your details before confirming.
                </DialogDescription>
              </div>

              <ol className="relative flex flex-col gap-5 text-sm before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-border">
                {[
                  {
                    label: "Pick-up",
                    place: data.pickupLocation,
                    date: data.pickupDate,
                  },
                  {
                    label: "Return",
                    place: data.dropoffLocation,
                    date: data.dropoffDate,
                  },
                ].map((s) => (
                  <li key={s.label} className="relative flex gap-4 pl-0">
                    <span className="relative z-10 mt-1 size-[15px] shrink-0 rounded-full border-[3px] border-primary bg-popover" />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {s.label}
                      </span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <MapPin className="size-3.5 text-muted-foreground" />
                        {s.place}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <CalendarDays className="size-3.5" />
                        {formatDate(s.date)}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>

              <dl className="flex flex-col gap-2 rounded-2xl bg-muted p-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">
                    {formatPrice(data.price)} × {days}{" "}
                    {days === 1 ? "day" : "days"}
                  </dt>
                  <dd className="tabular-nums">{formatPrice(total)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Insurance & taxes</dt>
                  <dd>Included</dd>
                </div>
                <div className="mt-1 flex justify-between border-t pt-3 text-base font-semibold">
                  <dt>Total</dt>
                  <dd className="tabular-nums">{formatPrice(total)}</dd>
                </div>
              </dl>

              <p className="flex items-start gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="size-4 shrink-0 text-success" />
                Free cancellation up to 48 hours before pick-up. You&apos;ll
                receive a rental voucher to present at the desk.
              </p>

              <Button
                size="lg"
                onClick={confirm}
                disabled={status === "saving"}
              >
                {status === "saving" && <Loader2 className="animate-spin" />}
                Confirm reservation
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
