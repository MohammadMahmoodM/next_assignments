import Logo from "@/public/logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-around items-center h-16 bg-gradient-to-r from-green-400 to-red-500 border-2 border-red-800">
      <Image src={Logo} height={100} width={100} alt="" />
      <div>Home</div>
      <div>Contact US</div>
    </div>
  );
}
