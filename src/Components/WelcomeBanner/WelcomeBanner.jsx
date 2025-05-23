import React from "react";
import arrowIcon from "../../assets/Icons/arrowIcon.gif";
export default function WelcomeBanner() {
  return (
    <div className="relative welcomeBanner">
      <div className="flex items-center justify-between py-[25px] loopAnim   ">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`${index === 0 || index === 3 ? "" : "hidden sm:block"}`}
          >
            <div className="text-lg font-normal font-cevicheOne md:text-2xl lg:text-3xl 2xl:text-4xl">
              Welcome to <span className="text-[#FF00EE] ">Bitsky</span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 flex items-center justify-center w-full ">
        <div className=" arrowIcon">
          <img
            src={arrowIcon}
            className="rotate-90 w-[48px] md:w-[80px] relative top-[16px] md:static"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
}
