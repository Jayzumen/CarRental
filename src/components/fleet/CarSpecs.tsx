import { CarFront, Fuel, Settings2, Users } from "lucide-react";
import type { Car } from "@/data/fleet";
import { cn } from "@/lib/utils";

export function CarSpecs({ car, className }: { car: Car; className?: string }) {
  const specs = [
    { icon: Users, label: `${car.seats} seats` },
    { icon: Settings2, label: car.gearbox },
    { icon: Fuel, label: car.fuel },
    { icon: CarFront, label: `${car.doors} doors` },
  ];
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-muted-foreground",
        className,
      )}
    >
      {specs.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2">
          <Icon aria-hidden className="size-4 shrink-0" />
          {label}
        </li>
      ))}
    </ul>
  );
}
