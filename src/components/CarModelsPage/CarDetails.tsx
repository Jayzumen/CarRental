import { Fleet } from "@/types/fleet";
import { AiFillCar } from "react-icons/ai";
import { FaGasPump } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { TbEngine } from "react-icons/tb";

type Props = {
  car: Fleet;
};

const CarDetails = ({ car }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <h2 className="text-2xl font-bold">{car.name}</h2>
        <p className="flex flex-col text-lg">
          <span className="text-2xl font-bold">{car.price}€ </span> per day
        </p>
      </div>
      <div className="border border-gray-400" />

      <div className="flex items-center justify-between px-4 py-2 text-lg">
        <div className="flex items-center gap-2">
          <AiFillCar size={25} />{" "}
          <span className="font-semibold text-gray-500">
            {car.details.brand}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-500">
            {car.details.doors}
          </span>
          <GiCarDoor size={25} />
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-2 text-lg">
        <div className="flex items-center gap-2">
          <TbEngine size={25} />
          <span className="font-semibold text-gray-500">
            {car.details.Gearbox}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-500">
            {car.details.fuel}
          </span>
          <FaGasPump size={25} />
        </div>
      </div>
    </>
  );
};

export default CarDetails;
