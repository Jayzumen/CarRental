import type { StaticImageData } from "next/image";
// Photos: Unsplash License — see src/assets/CREDITS.md
import audiA1 from "@/assets/cars/audi-a1-sportback.jpg";
import vwGolfR from "@/assets/cars/vw-golf-r.jpg";
import bmw6Gc from "@/assets/cars/bmw-6-gran-coupe.jpg";
import vwPassat from "@/assets/cars/vw-passat.jpg";
import volvoXc60 from "@/assets/cars/volvo-xc60.jpg";
import amgGle from "@/assets/cars/mercedes-amg-gle-coupe.jpg";
import audiRs3 from "@/assets/cars/audi-rs3-sedan.jpg";
import audiRs7 from "@/assets/premium-cars/audi-rs7.jpg";
import bmwM2 from "@/assets/premium-cars/bmw-m2.jpg";
import bmwM4 from "@/assets/premium-cars/bmw-m4.jpg";

export type CarCategory = "Compact" | "Sedan" | "SUV" | "Performance";

export interface Car {
  slug: string;
  name: string;
  brand: string;
  model: string;
  category: CarCategory;
  price: number;
  year: number;
  fuel: "Petrol" | "Diesel";
  gearbox: "Automatic" | "Manual";
  seats: number;
  doors: number;
  ac: boolean;
  image: StaticImageData;
}

export const fleet: Car[] = [
  {
    slug: "audi-a1-sportback",
    name: "Audi A1 Sportback",
    brand: "Audi",
    model: "A1 Sportback S line",
    category: "Compact",
    price: 45,
    year: 2022,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 5,
    doors: 5,
    ac: true,
    image: audiA1,
  },
  {
    slug: "vw-golf-r",
    name: "Volkswagen Golf R",
    brand: "Volkswagen",
    model: "Golf R",
    category: "Compact",
    price: 59,
    year: 2020,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 5,
    doors: 5,
    ac: true,
    image: vwGolfR,
  },
  {
    slug: "vw-passat",
    name: "Volkswagen Passat",
    brand: "Volkswagen",
    model: "Passat R-Line",
    category: "Sedan",
    price: 52,
    year: 2021,
    fuel: "Diesel",
    gearbox: "Automatic",
    seats: 5,
    doors: 4,
    ac: true,
    image: vwPassat,
  },
  {
    slug: "bmw-6-gran-coupe",
    name: "BMW 6 Series Gran Coupé",
    brand: "BMW",
    model: "6 Series Gran Coupé",
    category: "Sedan",
    price: 89,
    year: 2018,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 5,
    doors: 4,
    ac: true,
    image: bmw6Gc,
  },
  {
    slug: "volvo-xc60",
    name: "Volvo XC60",
    brand: "Volvo",
    model: "XC60",
    category: "SUV",
    price: 72,
    year: 2021,
    fuel: "Diesel",
    gearbox: "Automatic",
    seats: 5,
    doors: 5,
    ac: true,
    image: volvoXc60,
  },
  {
    slug: "mercedes-amg-gle-coupe",
    name: "Mercedes-AMG GLE Coupé",
    brand: "Mercedes-AMG",
    model: "GLE Coupé",
    category: "SUV",
    price: 129,
    year: 2022,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 5,
    doors: 5,
    ac: true,
    image: amgGle,
  },
  {
    slug: "audi-rs3-sedan",
    name: "Audi RS 3 Sedan",
    brand: "Audi",
    model: "RS 3 Sedan",
    category: "Performance",
    price: 119,
    year: 2020,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 5,
    doors: 4,
    ac: true,
    image: audiRs3,
  },
  {
    slug: "bmw-m2",
    name: "BMW M2 Competition",
    brand: "BMW",
    model: "M2 Competition",
    category: "Performance",
    price: 149,
    year: 2023,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 4,
    doors: 2,
    ac: true,
    image: bmwM2,
  },
  {
    slug: "bmw-m4",
    name: "BMW M4 Coupé",
    brand: "BMW",
    model: "M4 Coupé",
    category: "Performance",
    price: 169,
    year: 2023,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 4,
    doors: 2,
    ac: true,
    image: bmwM4,
  },
  {
    slug: "audi-rs7",
    name: "Audi RS 7 Sportback",
    brand: "Audi",
    model: "RS 7 Sportback",
    category: "Performance",
    price: 189,
    year: 2024,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 5,
    doors: 5,
    ac: true,
    image: audiRs7,
  },
];

export const categories: CarCategory[] = [
  "Compact",
  "Sedan",
  "SUV",
  "Performance",
];

export const findCar = (slugOrName: string) =>
  fleet.find((c) => c.slug === slugOrName || c.name === slugOrName);
