import { CarProps } from "@/types";
import Image from "next/image";
import { CustomButton } from "@/components";
import { calculateCarRent } from "@/utils";

interface CarPropsType {
  Car: CarProps;
}

const CarCard = ({ Car }: CarPropsType) => {
  // const {city_mpg, year,combination_mpg,cylinders,make} = Car;

  const carRent = calculateCarRent(Car.city_mpg, Car.year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        {/* {year } {cylinders} */}
        <h2>
          {Car.make} {Car.year}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>

      <div className="relative  h-40 w-full my-5">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {Car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{Car.drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{Car.highway_mpg} Mile/Gallon</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default CarCard;
