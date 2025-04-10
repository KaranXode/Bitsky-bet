import React from 'react'
import CircleDot from './../CircleDot/CircleDot';

export default function Tabs({tabs,activeTab,tabClick}) {
  return (
    <>
          <div className="flex justify-center mt-5">
          <div className="flex justify-between w-full px-2 pb-2 md:px-10">
            {tabs.map((tab, index) => (
              <div key={index}
                className={`relative w-full tab-main ${
                  index % 2 ? "border-bottom-main" : " "
                }`}
              >
                <span
                  key={tab}
                  className={`cursor-pointer text-xs sm:text-sm md:text-lg xl:text-2xl pb-1 font-cevicheOne flex justify-center items-center ${
                    index % 2 ? " trapezoid-bottom" : " trapezoid-top"
                  }  ${
                    activeTab === tab
                      ? "tab-active text-white"
                      : "text-gray-400"
                  }`}
                  onClick={() => tabClick(tab)}
                >
                  <span>{tab}</span>
                </span>
                {index % 2 ? (
                  <CircleDot className={"circleTopRight"} />
                ) : (
                  <CircleDot className={"circleBottomRight"} />
                )}
              </div>
            ))}
          </div>
        </div>
    </>
  )
}
