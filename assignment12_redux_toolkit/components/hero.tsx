"use client";
import Image from "next/image";
import HeroImage from "@/public/hero_image.jpg";
import Form from "@/components/form";
import { useSelector } from "react-redux";

export default function Hero() {
  const AllServices = useSelector(
    (store: any) => store.educationalSlice.allServices
  );
  return (
    <div className="relative h-[550px] border-2 border-black">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-red-500 opacity-50 z-10"></div>

      <div className="flex items-center justify-center h-full z-20">
        <Image src={HeroImage} fill alt="Hero Image" />
      </div>

      <div className="absolute h-full inset-0 grid md:grid-cols-2 sm:grid-cols-1 z-30">
        
        
        <div className="flex items-center justify-center flex-col text-white">
        <h1 className="text-3xl text-center mb-5">Result</h1>

          {AllServices.map((service: any) => (
            <>
            <div>
              Name: {service.name}
            </div>
            <div>
              Description: {service.description}
            </div>
            </>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Form />
        </div>
s
      </div>
    </div>
  );
}
