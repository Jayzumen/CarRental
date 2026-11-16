import Image from "next/image";
import type { Car } from "@/data/fleet";
import { cn } from "@/lib/utils";

type Props = {
  car: Car;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function CarImage({ car, sizes, priority, className }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden bg-muted",
        className,
      )}
    >
      <Image
        src={car.image}
        alt={car.name}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className="object-cover transition-transform duration-500 ease-out"
      />
    </div>
  );
}
