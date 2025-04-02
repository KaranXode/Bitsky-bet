import React from 'react'
import subscribeBg from"../assets/images/subscribeBg.png"
import questionBg from "../assets/images/QuestionBg.png"

export default function SubscribeSection() {
  return (
    <div className='wrapper'>
         <div className="gap-3 px-4 py-10 lg:flex">
        <div className="relative max-w-[762px] w-full cardOne">
          <img src={subscribeBg} alt="image" className="rounded-[2rem] " />
          <div className="absolute top-0 flex items-center w-full h-full">
           
            <div className="max-w-sm p-6">
              <p className="text-2xl md:text-3xl xl:text-5xl font-cevicheOne">
              Subscribe to our news!
              </p>
              <p className="mt-3 text-xl">
              Please provide your email to receive regular updates on our promotions and tournaments.
              </p>
              <button className='clip-button'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="relative max-w-[762px] w-full cardTwo">
          <img src={questionBg} alt="image" className="rounded-[2rem] " />
          <div className="absolute top-0 flex items-center justify-start w-full h-full ">
            <div className="max-w-md p-6">
              <p className="text-2xl md:text-3xl xl:text-5xl font-cevicheOne">
              Got any questions?
              </p>
              <p className="mt-3 text-xl">
              Visit our FAQ section for comprehensive information on  frequently asked questions.
              </p>
              <button>FAQ Page</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
