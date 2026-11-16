import type { StaticImageData } from "next/image";
import audiA1 from "@/assets/cars/audia1.jpg";
import benzGlk from "@/assets/cars/benz.jpg";
import bmw320 from "@/assets/cars/bmw320.jpg";
import golf6 from "@/assets/cars/golf6.jpg";
import passatCc from "@/assets/cars/passatcc.jpg";
import toyotaCamry from "@/assets/cars/toyotacamry.jpg";
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
  /** Studio shots on white vs. lifestyle photography */
  photo: "studio" | "lifestyle";
}

export const fleet: Car[] = [
  {
    slug: "audi-a1-s-line",
    name: "Audi A1 S-Line",
    brand: "Audi",
    model: "A1 S-Line",
    category: "Compact",
    price: 45,
    year: 2021,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 4,
    doors: 5,
    ac: true,
    image: audiA1,
    photo: "studio",
  },
  {
    slug: "vw-golf",
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    model: "Golf",
    category: "Compact",
    price: 40,
    year: 2020,
    fuel: "Petrol",
    gearbox: "Manual",
    seats: 5,
    doors: 5,
    ac: true,
    image: golf6,
    photo: "studio",
  },
  {
    slug: "bmw-320",
    name: "BMW 320",
    brand: "BMW",
    model: "320",
    category: "Sedan",
    price: 55,
    year: 2022,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 5,
    doors: 4,
    ac: true,
    image: bmw320,
    photo: "studio",
  },
  {
    slug: "vw-passat-cc",
    name: "Volkswagen Passat CC",
    brand: "Volkswagen",
    model: "Passat CC",
    category: "Sedan",
    price: 48,
    year: 2019,
    fuel: "Diesel",
    gearbox: "Manual",
    seats: 5,
    doors: 4,
    ac: true,
    image: passatCc,
    photo: "studio",
  },
  {
    slug: "toyota-camry",
    name: "Toyota Camry",
    brand: "Toyota",
    model: "Camry",
    category: "Sedan",
    price: 50,
    year: 2021,
    fuel: "Petrol",
    gearbox: "Automatic",
    seats: 5,
    doors: 4,
    ac: true,
    image: toyotaCamry,
    photo: "studio",
  },
  {
    slug: "mercedes-glk",
    name: "Mercedes-Benz GLK",
    brand: "Mercedes-Benz",
    model: "GLK",
    category: "SUV",
    price: 62,
    year: 2020,
    fuel: "Diesel",
    gearbox: "Automatic",
    seats: 5,
    doors: 5,
    ac: true,
    image: benzGlk,
    photo: "studio",
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
    photo: "lifestyle",
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
    photo: "lifestyle",
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
    photo: "lifestyle",
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
