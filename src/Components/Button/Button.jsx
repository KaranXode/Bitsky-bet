import React from "react";
import buttonClip from "../../assets/Icons/buttonClip.svg";

export default function Button({className,name,textDirection,value}) {
  return (
    <>
      <button className={`relative text-sm sm:text-xl font-cevicheOne text-[#4B024A] w-3/5 ${className}`}>
      
         <img src={buttonClip} alt="button" className="w-full" />
        <span className={`absolute top-0 flex items-center justify-center w-full h-full ${textDirection}`}>
         {name || " Play Now"}
        </span>
      </button>
    </>
  );
}
