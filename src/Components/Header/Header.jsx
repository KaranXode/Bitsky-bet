import React from 'react'
import cashbg from "../../assets/Icons/cashBg.svg";
import avatar from "../../assets/Icons/accountAvatar.svg";
import headerBg from "../../assets/Icons/headerBg.svg";
import inBitskyLogo from "../../assets/Icons/inBitskyLogo.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Header() {
  const [userGameName , setUserGameName ] = useState("")
  return (
    <>
      <div className="flex flex-col items-center justify-between md:flex-row ">
      <Link to="/">
          <img src={inBitskyLogo} alt="logo" className="h-[60px] md:h-auto" />
        </Link>
        <div className="relative w-full">
          <div className="">
            <img
              src={headerBg}
              alt="logo"
              className="min-h-[142px] hidden md:block"
            />
          </div>
          <div className="static top-0 flex items-center justify-between w-full h-full px-4 md:absolute">
            <div className="flex items-center justify-between w-full gap-4 p-3 md:p-0">
              <div className="hidden md:block"></div>
              <div className="relative flex items-center w-[130px] sm:w-[150px] lg:w-auto">
                <img src={cashbg} alt="icon" />
                <div className="absolute top-0 flex items-center justify-center w-full h-full">
                  <span className="text-xs sm:text-sm lg:text-lg">
                    10,000{" "}
                    <span className="text-[10px] sm:text-xs text-[#6D6D6D] font-semibold">
                      USD
                    </span>{" "}
                  </span>
                  <button className="flex items-center justify-center w-[24px] h-[24px] md:w-[30px] md:h-[30px] font-[500] absolute right-[-12px] text-xl md:text-2xl  text-black bg-[#02E902] rounded-full">
                    +
                  </button>
                </div>
              </div>
              <div className="relative lg:bottom-[10px] w-[150px] lg:w-auto right-[14px]">
                <img src={avatar} alt="User Avatar" />
                <span className="absolute top-0 flex items-center justify-center w-full h-full text-xs md:text-sm left-[24px] font-semibold lg:text-base">
                 {userGameName || "Karan001"}
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}
