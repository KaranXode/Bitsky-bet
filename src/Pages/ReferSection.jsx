import React from "react";
import referBg from "../assets/images/referCharBg.png";
import bonusBg from "../assets/images/bonusCharBg.png";
import charOne from "../assets/Icons/charOne.png";
import playBg from "../assets/images/play-of-bg.png";

export default function ReferSection() {
  return (
    <div className="wrapper">
      <div className="gap-3 px-4 py-10 lg:flex">
        <div className="relative max-w-[762px] w-full cardOne">
          <img src={referBg} alt="image" className="rounded-[2rem] " />
          <div className="absolute top-0 flex items-center justify-end w-full h-full">
           
            <div className="max-w-sm p-3">
              <p className="text-2xl md:text-3xl xl:text-5xl font-cevicheOne">
                Refer Your Friend and Earn Rewards!
              </p>
              <p className="mt-3 text-xl">
                Refer your friends and enjoy exclusive bonuses and discounts.
              </p>
              <button>pLay now</button>
            </div>
          </div>
        </div>
        <div className="relative max-w-[762px] w-full cardTwo">
          <img src={bonusBg} alt="image" className="rounded-[2rem] " />
          <div className="absolute top-0 flex items-center justify-start w-full h-full text-right">
            <div className="max-w-md p-3">
              <p className="text-2xl md:text-3xl xl:text-5xl font-cevicheOne">
                Where the excitement knows no bounds
              </p>
              <p className="mt-3 text-xl">
                Experience unparalleled joy with our exclusive perks, from
                high-stakes adventures to unforgettable triumphs!
              </p>
              <button>pLay now</button>
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
