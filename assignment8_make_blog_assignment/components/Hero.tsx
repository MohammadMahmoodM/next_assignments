"use client";
import Image from "next/image";
import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {
    alert("Button Clicked");
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">FIne, Book, and Rent a Car</h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with out effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue
                text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
