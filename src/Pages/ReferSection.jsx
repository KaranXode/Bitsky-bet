import React from "react";
import referBg from "../assets/images/referCharBg.png";
import bonusBg from "../assets/images/bonusCharBg.png";
import playBg from "../assets/images/play-of-bg.png";
import Button from "./../Components/Button/Button";

export default function ReferSection() {
  return (
    <div className="wrapper">
      <div className="gap-6 px-4 py-10 mx-auto lg:flex">
        <div className="relative max-w-[762px] w-full cardOne  mx-auto">
          <img src={referBg} alt="image" className="rounded-[2rem] " />
          <div className="absolute top-[24px] flex items-center justify-end w-full h-full">
            <div className="max-w-[54%] sm:max-w-[50%] p-3">
              <p className="sm:text-2xl md:text-3xl 2xl:text-5xl font-cevicheOne">
                Refer Your Friend and Earn Rewards!
              </p>
              <p className="my-1 sm:my-2 text-[10px] sm:text-sm lg:my-4 xl:text-xl">
                Refer your friends and enjoy exclusive bonuses and discounts.
              </p>
              <Button className="w-1/2 sm:w-auto" />
            </div>
          </div>
        </div>
        <div className="relative max-w-[762px] w-full cardTwo mx-auto">
          <img src={bonusBg} alt="image" className="rounded-[2rem] " />
          <div className="absolute top-[16px] sm:top-[24px] flex items-center justify-start w-full h-full text-right">
            <div className="max-w-[58%] sm:max-w-[56%] p-3">
              <p className="sm:text-2xl md:text-3xl 2xl:text-5xl font-cevicheOne">
                Where the excitement knows no bounds
              </p>
              <p className="my-1 sm:my-2 text-[10px] sm:text-sm lg:my-4 xl:text-xl">
                Experience unparalleled joy with our exclusive perks, from
                high-stakes adventures to unforgettable triumphs!
              </p>
              <Button
                className="w-1/2 sm:w-auto -scale-x-100"
                textDirection="-scale-x-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={playBg} alt="img" />
      </div>
    </div>
  );
}
