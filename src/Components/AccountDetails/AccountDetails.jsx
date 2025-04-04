import React from "react";
import CircleDot from "./../CircleDot/CircleDot";

export default function AccountDetails() {
  const formFields = [
    { type: "text", placeholder: "First Name" },
    { type: "text", placeholder: "Last Name" },
    { type: "text", placeholder: "User Name" },
    { type: "text", placeholder: "Date of Birth" },
    { type: "email", placeholder: "Email Address" },
    { type: "text", placeholder: "Phone Number" },
  ];
  return (
    <>
      <div className="relative grid w-full grid-cols-2 gap-5 p-3 mt-8 md:px-10">
        {formFields.map((field, index) => (
          <div key={index} className="relative">
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full p-2 text-xs font-semibold text-white placeholder-white bg-transparent border-none outline-none md:px-10 md:py-4 md:text-sm md:text-base placeholder:font-semibold focus:outline-none"
              style={{
                borderBottom: index % 2 === 0 ? "1px solid white" : "none",
                borderTop: index % 2 !== 0 ? "1px solid white" : "none",
                borderImage: "none",
                borderRadius: "0",
              }}
              onFocus={(e) => {
                e.target.style.borderImage =
                  "linear-gradient(to right, #FF00EE, #3F3F3F) 1";
              }}
              onBlur={(e) => {
                e.target.style.borderImage = "";
                e.target.style.borderBottom =
                  index % 2 === 0 ? "1px solid white" : "none";
                e.target.style.borderTop =
                  index % 2 !== 0 ? "1px solid white" : "none";
              }}
            />

            {index % 2 !== 0 && (
              <div className="absolute -left-[0px] top-0 w-[1px] bg-white  rotate-[32deg] md:rotate-[20deg] origin-top-left h-[115%] md:h-[105%]"></div>
            )}

            {index % 2 === 0 ? (
              <div className="absolute bottom-[6px] left-[-11px] md:bottom-[11px] md:left-[-20px]">
                <CircleDot circleActive={true} />
              </div>
            ) : (
              <div className="absolute top-[-6px] md:top-[-12px] right-0">
                <CircleDot />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
