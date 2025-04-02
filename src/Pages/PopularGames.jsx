import React from "react";
import cardOne from "../assets/images/cardOne.png";
import HeartIcon from "../Components/HeartIcon/HeartIcon";

export default function PopularGames() {
  return (
    <div className="wrapper">
      <div>
        {" "}
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-cevicheOne popular-heading">
          Popular Games
        </h1>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-5 gap-4">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <div className="gameCard">
                <div className="relative">
                  <img src={cardOne} alt="card" />
                  <HeartIcon className="absolute top-[8px] left-[8px]" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
