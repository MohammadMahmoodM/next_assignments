"use client";
import Link from 'next/link'
import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
     <nav className="w-full mb-1 h-15 fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-red-300 to-red-700 border-2 border-black">
      <div className='flex justify-around items-center my-4'>
        <div>
          Logo
        </div>
        <div>
          About
        </div>
      </div>
     </nav>
    </>
  );
};

export default NavBar;
