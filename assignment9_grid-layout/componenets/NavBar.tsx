import React from "react";

export default function NavBar() {
  return (
<div className="flex justify-around items-center border-2 border-black bg-gradient-to-r from-blue-500 to-green-500 h-24">
      <div className="size-20 rounded-full flex justify-around items-center bg-gradient-radial ">
        logo
      </div>
      <div className="size-20 rounded-full flex justify-around items-center bg-gradient-radial">
        Home
        
      </div>
      <div className="size-20 rounded-full flex justify-around items-center bg-gradient-radial">
        About
      </div>
    </div>

  );
}
