import React from "react";
import heroBg from "../assets/images/heroBg.png";
import heroMachine from "../assets/images/heroVendingMachine.png";
import heroHead from "../assets/Icons/winbigIcon.svg";

export default function Hero() {
  return (
    <div className="relative h-screen ">
      <img src={heroBg} alt="image" className="h-full" />
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center h-full px-2 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24 wrapper">
        <div className="grid grid-cols-2 ">
          <div>
            <img src={heroHead} alt="image" />
            <button className="text-5xl primary-btn-lg ">Play Now</button>
          </div>

          <div>
            <img src={heroMachine} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
