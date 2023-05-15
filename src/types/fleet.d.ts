import { StaticImageData } from "next/image";

interface Fleet {
  name: string;
  price: number;
  image: StaticImageData;
  details: {
    brand: string;
    model: string;
    year: number;
    fuel: string;
    doors: number;
    AC: boolean;
    Gearbox: string;
  };
}
