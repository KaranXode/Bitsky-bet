import React, { useState } from "react";
import profile from "../assets/Icons/Profile.svg";
import headBg from "../assets/Icons/accountHeadbg.svg";
import inBitskyLogo from "../assets/Icons/inBitskyLogo.svg";
import headerBg from "../assets/Icons/headerBg.svg";
import LshapeTopLeft from "../assets/Icons/Lshape-topLeft.svg";
import LshapeTopRight from "../assets/Icons/Lshape-topRight.svg";
import CircleDot from "../Components/CircleDot/CircleDot";
import Button from "./../Components/Button/Button";
import { Link } from "react-router-dom";
import cashbg from "../assets/Icons/cashBg.svg";
import avatar from "../assets/Icons/accountAvatar.svg";
import AccountDetails from "../Components/AccountDetails/AccountDetails";

const AccountScreen = () => {
  const [activeTab, setActiveTab] = useState("My Account");

  const tabs = ["My Account", "Wallet", "All Transactions", "My Affiliates"];
;

  return (
    <div className="min-h-screen text-white bg-[#0E0E0E]" id="Profile">
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
                  John123
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1346px] w-full mx-auto">
        <div className="flex justify-center mt-5">
          <div className="flex justify-between w-full px-2 pb-2 md:px-10">
            {tabs.map((tab, index) => (
              <div
                className={`relative w-full tab-main ${
                  index % 2 ? "border-bottom-main" : " "
                }`}
              >
                <span
                  key={tab}
                  className={`cursor-pointer text-xs sm:text-sm md:text-lg xl:text-2xl pb-1 font-cevicheOne flex justify-center items-center ${
                    index % 2 ? " trapezoid-bottom" : " trapezoid-top"
                  }  ${
                    activeTab === tab
                      ? "tab-active text-white"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span>{tab}</span>
                </span>
                {index % 2 ? (
                  <CircleDot className={"circleTopRight"} />
                ) : (
                  <CircleDot className={"circleBottomRight"} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative p-3 m-3 md:p-8  mt-10 bg-[#1B1B1B]  rounded-lg">
          <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
            <div className="relative">
              <img src={headBg} alt="icon" className="min-w-[246px]" />
              <span className="absolute top-[2px] md:top-[12px] text-sm md:text-xl font-bold text-[#0D0D0D] w-full text-center mx-auto ">
                {" "}
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

          {activeTab === "My Account" && (
            <div className="flex flex-col items-center w-full mt-12 lg:flex-row">
              <div className="flex flex-col items-center w-1/2 mt-10">
                <div className="relative">
                  <img src={profile} alt="Avatar" className="" />
                </div>
              </div>

             <AccountDetails/>
            </div>
          )}

          {activeTab === "Wallet" && (
            <div className="mt-12 text-base font-bold text-center text-white">
              Wallet 
            </div>
          )}
          {activeTab === "All Transactions" && (
            <div className="mt-12 text-base font-bold text-center text-white">
              Transaction 
            </div>
          )}
          {activeTab === "My Affiliates" && (
            <div className="mt-12 text-base font-bold text-center text-white">
              Affiliate 
            </div>
          )}

          <div className="flex justify-end mt-8">
            <Link to="/">
              <Button className={"w-auto"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountScreen;
