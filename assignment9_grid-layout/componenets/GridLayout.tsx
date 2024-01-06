import React from 'react'
import Image from "next/image";

import oneImage from '@/public/1.png'
import twoImage from '@/public/2.jpg'
import threeImage from '@/public/3.jpg'
import fourImage from '@/public/4.png'
import fiveImage from '@/public/5.png'


export default function GridLayout() {
    return (
        <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 m-8">
        <div className="relative h-64 border-2 border-black md:col-span-2 lg:col-span-2 ">
          <Image src={oneImage} fill  alt="first image"/>
        </div>
        <div className="relative min-h-64 border-2 border-black md:row-span-2 lg:row-span-2">
        <Image src={twoImage} fill  alt="first image"/>
        </div>

        <div className="relative min-h-64 border-2 border-black md:row-span-2 lg:row-span-2">
        <Image src={threeImage} fill  alt="first image"/>
        </div>
 
        <div className="relative h-64 border-2 border-black">
        <Image src={fourImage} fill  alt="first image"/>
        </div>

        <div className="relative h-64 border-2 border-black md:col-span-2 lg:col-span-2">
        <Image src={fiveImage} fill  alt="first image"/>
        </div>
      </div>
    )
}
