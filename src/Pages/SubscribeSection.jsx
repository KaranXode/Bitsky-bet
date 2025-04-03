import React from "react";
import subscribeBg from "../assets/images/subscribeBg.png";
import questionBg from "../assets/images/QuestionBg.png";
import SmallButton from "../Components/SmallButton/SmallButton";
import { FaEnvelope } from "react-icons/fa";

export default function SubscribeSection() {
  return (
    <div className="wrapper">
      <div className="gap-3 px-2 py-10 lg:flex">
        <div className="relative max-w-[762px] w-full cardOne mx-auto">
          <img
            src={subscribeBg}
            alt="image"
            className="rounded-[2rem] mb-3 lg:mb-0"
          />
          <div className="absolute top-0 flex items-center w-full h-full left-[24px]">
            <div className="max-w-[54%] sm:max-w-[60%] p-6">
              <p className="sm:text-2xl md:text-3xl 2xl:text-5xl font-cevicheOne">
                Subscribe to our news!
              </p>
              <p className="my-1 sm:my-2 text-[10px] font-semibold sm:text-sm lg:my-4 xl:text-xl">
                Please provide your email to receive regular updates on our
                promotions and tournaments.
              </p>
              <div className="relative">
              <FaEnvelope color="#D646D0 " className="absolute top-[6px] sm:top-[16px] left-[16px]"/>
                <input
                  type="text"
                  
                  placeholder="Your Email Address..."
                  className="bg-[#72005A]  text-[10px] sm:text-sm border-[#E85FE4] border w-[95%] sm:pl-[2.5rem] pl-[2.5rem] p-[6px] sm:p-[10px] rounded-[8px] mb-3"
                />
              </div>{" "}
              <SmallButton name={"Subscribe"} className={"w-1/2 sm:w-auto"} />
            </div>
          </div>
        </div>
        <div className="relative max-w-[762px] w-full cardTwo  mx-auto">
          <img src={questionBg} alt="image" className="rounded-[2rem] " />
          <div className="absolute top-0 flex items-center justify-start  h-full left-[24px] ">
            <div className="max-w-[54%] sm:max-w-[60%] p-6">
              <p className="sm:text-2xl md:text-3xl 2xl:text-5xl font-cevicheOne">
                Got any questions?
              </p>
              <p className="my-1 sm:my-2 text-[10px] font-semibold sm:text-sm lg:my-4 xl:text-xl">
                Visit our FAQ section for comprehensive information on
                frequently asked questions.
              </p>
              <SmallButton name={"FAQ Page"} className={"w-1/2 sm:w-auto"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
