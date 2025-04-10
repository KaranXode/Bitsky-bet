import React from "react";
import playBg from "../assets/images/play-of-bg.png";
import ReferCards from "../Components/ReferCards/ReferCards";
import referBg from "../assets/images/referCharBg.png";
import bonusBg from "../assets/images/bonusCharBg.png";


export default function ReferSection() {
  return (
    <div className="wrapper">
      <div className="gap-6 px-4 py-10 mx-auto lg:flex">
      <ReferCards
        image={referBg}
        title="Refer Your Friend and Earn Rewards!"
        description="Refer your friends and enjoy exclusive bonuses and discounts."
        align="right"
      />
      <ReferCards
        image={bonusBg}
        title="Where the excitement knows no bounds"
        description="Experience unparalleled joy with our exclusive perks, from high-stakes adventures to unforgettable triumphs!"
        align="left"
        buttonClass="-scale-x-100"
      />
    </div>
      <div>
        <img src={playBg} alt="img" />
      </div>
    </div>
  );
}
