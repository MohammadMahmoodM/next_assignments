import React from 'react'
import Image from "next/image";
import { fetchData } from "@/utlis";
import Button from "./Button"

const Card = async () => {
    const storeProducts = await fetchData();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1  gap-6 mx-10 my-5">
        {storeProducts.map((singleProduct:any)=>{
          return (

            <div className="border-2 border-black p-2 bg-gradient-to-r from-red-200 to-red-500">
            <div className="relative border-4 border-red-800 h-48">
              <Image src={singleProduct.image} fill alt={singleProduct.title}/>
            </div>
  
            <div className="flex justify-around items-center border-2 border-green-700 h-12">
              <div>Price</div>
              <div>Category</div>
            </div>
  
            <div className="flex justify-center border-2 border-pink-500">
              This is the Title of Product
            </div>
  
            <div className="flex justify-center">
            <Button singleProduct={singleProduct}/>
            </div>
          </div>

          )
        })}
      </div>
  )
}

export default Card


