import React from "react";

export default function CircleDot({className}) {
  return (
    <div className={`circle-main ${className}`}>
      <span className="circle-inner"></span>
    </div>
  );
}
