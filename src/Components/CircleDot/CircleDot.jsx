import React from "react";

export default function CircleDot({className,circleActive=false}) {

  return (
    <div className={`circle-main ${className}`}>
      <span className={`circle-inner ${circleActive ? "dotactive" : ""}`}></span>
    </div>
  );
}
