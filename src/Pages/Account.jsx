import React, { useState } from "react";
import profile from "../assets/Icons/Profile.svg";
import headBg from "../assets/Icons/accountHeadbg.svg";
import inBitskyLogo from "../assets/Icons/inBitskyLogo.svg";
import headerBg from "../assets/Icons/headerBg.svg";
import LshapeTopLeft from "../assets/Icons/Lshape-topLeft.svg";
import LshapeTopRight from "../assets/Icons/Lshape-topRight.svg";
import CircleDot from "../Components/CircleDot/CircleDot";
import Button from './../Components/Button/Button';
import { Link } from "react-router-dom";

const AccountScreen = () => {
  const [activeTab, setActiveTab] = useState("My Account");

  const tabs = ["My Account", "Wallet", "All Transactions", "My Affiliates"];

  return (
    <div className="min-h-screen text-white bg-[#0E0E0E]" id="Profile">
      <div className="flex items-center justify-between ">
        <Link to="/"><img src={inBitskyLogo} alt="logo" /></Link>
        <div className="relative ">
          <div className="">
            <img src={headerBg} alt="logo" className="min-h-[142px]" />
          </div>
          <div className="absolute top-0 flex items-center justify-between w-full h-full">
            <div className="flex flex-wrap items-center justify-between w-full gap-4">
              <div></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-lg">
                <span className="text-lg">10,000 USD</span>
                <button className="px-2 py-1 text-black bg-green-500 rounded-full">
                  +
                </button>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 border-2 border-pink-500 rounded-full"
                />
                <span className="text-lg">John123</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1346px] w-full mx-auto">
        <div className="flex justify-center mt-5">
          <div className="flex justify-between w-full px-2 pb-2 md:px-10">
            {tabs.map((tab, index) => (
              <div className={`relative w-full  ${
                index % 2 ? "border-bottom-main" : " "
              }`}>
                <span
                  key={tab}
                  className={`cursor-pointer text-sm xl:text-2xl pb-1 font-cevicheOne flex justify-center items-center ${
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

              <div className="grid w-full grid-cols-2 gap-5 mt-8">
                <div>
                  <label className="block text-base font-bold text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-transparent rounded"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-transparent rounded"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-white">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-transparent rounded"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-white">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 bg-transparent rounded"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 bg-transparent rounded"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-transparent rounded"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "Wallet" && (
            <div className="mt-12 text-base font-bold text-center text-white">
              Wallet details coming soon...
            </div>
          )}
          {activeTab === "All Transactions" && (
            <div className="mt-12 text-base font-bold text-center text-white">
              Transaction history will be displayed here...
            </div>
          )}
          {activeTab === "My Affiliates" && (
            <div className="mt-12 text-base font-bold text-center text-white">
              Affiliate program details coming soon...
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
