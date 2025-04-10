import React from "react";
import LshapeTopLeft from "../../assets/Icons/Lshape-topLeft.svg";
import LshapeTopRight from "../../assets/Icons/Lshape-topRight.svg";
import headBg from "../../assets/Icons/accountHeadbg.svg";

export default function AccountBorder({ activeTab }) {
  return (
    <>
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
        <div className="relative">
          <img src={headBg} alt="icon" className="min-w-[246px]" />
          <span className="absolute top-[2px] md:top-[12px] text-sm md:text-xl font-bold text-[#0D0D0D] w-full text-center mx-auto ">
            {activeTab}
          </span>
        </div>
      </div>
      <div className="absolute top-[-7px] left-[-5px]">
        <img src={LshapeTopLeft} alt="icon" />
      </div>
      <div className="absolute top-[-7px] right-[-5px]">
        <img src={LshapeTopRight} alt="icon" />
      </div>
      <div className="absolute bottom-[26px] right-[-5px]">
        <span className="triangle-br"></span>
      </div>
      <div className="absolute bottom-[26px] left-[-5px]">
        <span className="triangle-bl"></span>
      </div>
    </>
  );
}
