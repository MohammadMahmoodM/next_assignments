'use client'
import Image from "next/image";
import HeroImage from "@/public/hero_image.jpg";
import Form from "@/components/form";
import { useSelector } from "react-redux";

export default function Hero() {
  const AllServices= useSelector((store:any)=>store.educationalSlice.allServices)
  return (
    <div className="h-[550px] bg-center bg-no-repeat bg-cover relative border-2 border-black">
      <Image src={HeroImage} fill alt="Hero Image" />

      <div className="grid grid-cols-3">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-red-500 opacity-50">
        {
          AllServices.map((service:any)=>{
            return(
              <>
             <div>
                {service.name}
             </div>
              </>
            )
          })
        }
      </div>
      
        <Form />
      </div>

     
    </div>
  );
}
