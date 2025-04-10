import React from "react";

import Button from "../Button/Button";

export default function ReferCards({
  image,
  title,
  description,
  align = "right",
  buttonClass = "",
}) {
  const isRight = align === "right";
  return (
    <>
      <div
        className={`relative max-w-[762px] w-full ${
          isRight ? "cardOne" : "cardTwo"
        } mx-auto`}
      >
        <img src={image} alt="promo" className="rounded-[2rem]" />
        <div
          className={`absolute top-[16px] sm:top-[24px] flex items-center justify-${
            isRight ? "end" : "start"
          } w-full h-full`}
        >
          <div
            className={`${
              isRight
                ? "max-w-[54%] sm:max-w-[50%]"
                : "max-w-[58%] sm:max-w-[56%]"
            } p-3 text-${isRight ? "left" : "right"}`}
          >
            <p className="sm:text-2xl md:text-3xl 2xl:text-5xl font-cevicheOne">
              {title}
            </p>
            <p className="my-1 sm:my-2 text-[10px] sm:text-sm lg:my-4 xl:text-xl">
              {description}
            </p>
            <Button
              className={`w-1/2 sm:w-auto ${buttonClass}`}
              textDirection={buttonClass}
            />
          </div>
        </div>
      </div>
    </>
  );
}
