import React from "react";
import Games from "../Components/Games/Games";

export default function PopularGames() {
  return (
    <div className="wrapper">
      <div>
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-cevicheOne popular-heading">
          Popular Games
        </h1>
      </div>
      <Games />
    </div>
  );
}
