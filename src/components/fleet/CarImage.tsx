import Image from "next/image";
import type { Car } from "@/data/fleet";
import { cn } from "@/lib/utils";

type Props = {
  car: Car;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Studio shots (white background) sit in a neutral "well" and blend into it;
 * lifestyle photos fill the frame.
 */
export function CarImage({ car, sizes, priority, className }: Props) {
  const studio = car.photo === "studio";
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden",
        studio && "image-well",
        className,
      )}
    >
      <Image
        src={car.image}
        alt={`${car.name}`}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={studio ? "empty" : "blur"}
        className={cn(
          "transition-transform duration-500 ease-out",
          studio ? "object-contain p-6" : "object-cover",
        )}
      />
    </div>
  );
}
