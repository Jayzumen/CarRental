import { Fleet } from "@/types/fleet";
import Audi_A1 from "../assets/cars/audia1.jpg";
import Benz_GLK from "../assets/cars/benz.jpg";
import BMW_320 from "../assets/cars/bmw320.jpg";
import Golf_6 from "../assets/cars/golf6.jpg";
import Passat_CC from "../assets/cars/passatcc.jpg";
import Toyota_Camry from "../assets/cars/toyotacamry.jpg";

export const cars: Fleet[] = [
  {
    name: "Audi A1 S-Line",
    price: 45,
    image: Audi_A1,
    details: {
      brand: "Audi",
      model: "A1 S-Line",
      year: 2012,
      fuel: "Gasoline",
      doors: 5,
      AC: true,
      Gearbox: "Automatic",
    },
  },
  {
    name: "Benz GLK",
    price: 50,
    image: Benz_GLK,
    details: {
      brand: "Mercedes",
      model: "GLK",
      year: 2015,
      fuel: "Gasoline",
      doors: 5,
      AC: true,
      Gearbox: "Automatic",
    },
  },
  {
    name: "BMW 320",
    price: 55,
    image: BMW_320,
    details: {
      brand: "BMW",
      model: "320",
      year: 2016,
      fuel: "Gasoline",
      doors: 5,
      AC: true,
      Gearbox: "Manual",
    },
  },
  {
    name: "Golf 6",
    price: 40,
    image: Golf_6,
    details: {
      brand: "Volkswagen",
      model: "Golf 6",
      year: 2010,
      fuel: "Gasoline",
      doors: 5,
      AC: true,
      Gearbox: "Manual",
    },
  },
  {
    name: "Passat CC",
    price: 40,
    image: Passat_CC,
    details: {
      brand: "Volkswagen",
      model: "Passat CC",
      year: 2010,
      fuel: "Gasoline",
      doors: 5,
      AC: true,
      Gearbox: "Manual",
    },
  },
  {
    name: "Toyota Camry",
    price: 50,
    image: Toyota_Camry,
    details: {
      brand: "Toyota",
      model: "Camry",
      year: 2015,
      fuel: "Gasoline",
      doors: 5,
      AC: true,
      Gearbox: "Automatic",
    },
  },
];
