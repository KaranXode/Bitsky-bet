import React from "react";
import heroBg from "../assets/images/heroBg.png";
import heroMachine from "../assets/Icons/VendingMachine.svg";
import heroHead from "../assets/Icons/winbigIcon.svg";
import SmallButton from "../Components/SmallButton/SmallButton";
import coin1 from "../assets/Icons/bitcoin1.svg"
import coin2 from "../assets/Icons/bitcoin2.svg"
import coin3 from "../assets/Icons/bitcoin3.svg"
import coin4 from "../assets/Icons/bitcoin4.svg"
import coin5 from "../assets/Icons/bitcoin5.svg"


export default function Hero() {
  return (
    <div className="relative h-screen ">
      <img src={heroBg} alt="image" className="h-full" />
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center px-2 pt-16 pb-6 mx-auto lg:h-full sm:px-6 lg:px-8 lg:pt-24 wrapper">
        <div className="grid gap-12 lg:grid-cols-2 ">
          <div className="flex items-center justify-center text-center lg:block">
            <div className="w-3/4 text-center sm:w-1/2 lg:w-full">
              <img src={heroHead} alt="image" className="upDownAnim" />
              <SmallButton
                className={"max-w-[280px] w-3/5 sm:w-full -scale-x-100 sm:text-[34px] top-0 sm:top-[-20px] left-[-40px]"}
                textDirection="-scale-x-100 sm:text-[34px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center lg:block">
            <div className="relative flex items-center justify-center w-3/4 sm:w-1/2 lg:w-full">
              <img src={heroMachine} alt="image" className="w-4/5 scale-up-center lg:w-auto" />
              <img src={coin1} alt="coin" className="absolute bottom-0 w-10 lg:w-auto max-w-[180px] left-0 lg:left-[-90px] downUpAnim" />
              <img src={coin2} alt="coin" className="absolute top-0 max-w-[120px] left-[24px] downUpAnim  w-10 lg:w-auto" />
              <img src={coin3} alt="coin" className="absolute top-0  max-w-[96px] right-[-24px] downUpAnim  w-10 lg:w-auto" />
              <img src={coin4} alt="coin" className="absolute top-[50%]  max-w-[100px] right-[24px] downUpAnim  w-10 lg:w-auto" />
              <img src={coin5} alt="coin" className="absolute top-[30%] max-w-[30px] left-[98px] downUpAnim  w-10 lg:w-auto" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
