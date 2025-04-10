import React from "react";
import coin1 from "../../assets/Icons/bitcoin1.svg";
import coin2 from "../../assets/Icons/bitcoin2.svg";
import coin3 from "../../assets/Icons/bitcoin3.svg";
import coin4 from "../../assets/Icons/bitcoin4.svg";
import coin5 from "../../assets/Icons/bitcoin5.svg";
import heroMachine from "../../assets/Icons/VendingMachine.svg";


export default function HeroCoin() {
  return (
    <>
      <div className="flex items-center justify-center lg:block">
        <div className="relative flex items-center justify-center w-3/4 sm:w-1/2 lg:w-full">
          <img
            src={heroMachine}
            alt="image"
            className="w-4/5 scale-up-center lg:w-auto"
          />
          <img
            src={coin1}
            alt="coin"
            className="absolute bottom-0 w-10 lg:w-auto max-w-[180px] left-0 lg:left-[-90px] downUpAnim"
          />
          <img
            src={coin2}
            alt="coin"
            className="absolute top-0 max-w-[120px] left-[24px] downUpAnim  w-10 lg:w-auto"
          />
          <img
            src={coin3}
            alt="coin"
            className="absolute top-0  max-w-[96px] right-[-24px] downUpAnim  w-10 lg:w-auto"
          />
          <img
            src={coin4}
            alt="coin"
            className="absolute top-[50%]  max-w-[100px] right-[24px] downUpAnim  w-10 lg:w-auto"
          />
          <img
            src={coin5}
            alt="coin"
            className="absolute top-[30%] max-w-[30px] left-[98px] downUpAnim  w-10 lg:w-auto"
          />
        </div>
      </div>
    </>
  );
}
