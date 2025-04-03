import React from "react";
import heroBg from "../assets/images/heroBg.png";
import heroMachine from "../assets/images/heroVendingMachine.png";
import heroHead from "../assets/Icons/winbigIcon.svg";
import SmallButton from "../Components/SmallButton/SmallButton";

export default function Hero() {
  return (
    <div className="relative h-screen ">
      <img src={heroBg} alt="image" className="h-full" />
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center px-2 pt-16 pb-6 mx-auto lg:h-full sm:px-6 lg:px-8 lg:pt-24 wrapper">
        <div className="grid gap-4 lg:grid-cols-2 ">
          <div className="flex items-center justify-center text-center lg:block">
            <div className="w-3/4 text-center sm:w-1/2 lg:w-full">
              <img src={heroHead} alt="image" className="heroTitle" />
              <SmallButton
                className={"max-w-[280px] w-3/5 sm:w-full -scale-x-100 sm:text-[34px] top-0 sm:top-[-20px] left-[-40px]"}
                textDirection="-scale-x-100 sm:text-[34px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center lg:block">
            <div className="w-3/4 sm:w-1/2 lg:w-full">
              <img src={heroMachine} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
