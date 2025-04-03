import React from "react";
import G1 from "../assets/images/cardOne.png";
import G2 from "../assets/images/G2.png";
import G3 from "../assets/images/G3.png";
import G4 from "../assets/images/G4.png";
import G5 from "../assets/images/G5.png";
import G6 from "../assets/images/G6.png";
import G7 from "../assets/images/G7.png";
import G8 from "../assets/images/G8.png";
import G9 from "../assets/images/G9.png";
import G10 from "../assets/images/G10.png";


import HeartIcon from "../Components/HeartIcon/HeartIcon";
import SmallButton from "../Components/SmallButton/SmallButton";

export default function PopularGames() {
  const gamesImages = [G1, G2, G3, G4, G5, G6, G7, G8, G9, G10];
  return (
    <div className="wrapper">
      <div>
        {" "}
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-cevicheOne popular-heading">
          Popular Games
        </h1>
      </div>
      <div className="p-3 mt-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {gamesImages.map((item, index) => (
            <div className="gameCard">
              <div className="relative mb-4">
                <HeartIcon className="absolute top-[4px] left-[4px] md:top-[8px] md:left-[8px]" />
                <div className="mb-5">
                  <img src={item} alt="card" className="w-full " />

                  <div className=" absolute bottom-[-16px] sm:bottom-[-26px] flex items-center justify-center  w-full button-wrapper">
                    <SmallButton/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
