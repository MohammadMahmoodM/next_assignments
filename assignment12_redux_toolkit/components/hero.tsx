import Image from "next/image";
import HeroImage from "@/public/hero_image.jpg";
import Form from "@/components/form";

export default function Hero() {
  return (
    <div className="h-[550px] bg-center bg-no-repeat bg-cover relative border-2 border-black">
      <Image src={HeroImage} fill alt="Hero Image" />

      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-red-500 opacity-50"></div>
        <Form />
    </div>
  );
}
