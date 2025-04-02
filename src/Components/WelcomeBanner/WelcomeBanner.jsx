import React from 'react'
import arrowIcon from "../../assets/Icons/arrowIcon.gif"
export default function WelcomeBanner() {
  return (
    <div className='flex items-center justify-between py-[25px]  '>
        <div className='text-lg font-normal font-cevicheOne md:text-2xl lg:text-3xl 2xl:text-4xl'>Welcome to <span className='text-[#FF00EE] '>Bitsky</span></div>
        <div className='hidden text-lg font-normal font-cevicheOne md:text-2xl lg:text-3xl 2xl:text-4xl sm:block'>Welcome to <span className='text-[#FF00EE] '>Bitsky</span></div>
        <div className='w-[48px] md:w-[80px]'><img src={arrowIcon} className='rotate-90' alt="icon" /></div>
        <div className='hidden text-lg font-normal font-cevicheOne md:text-2xl lg:text-3xl 2xl:text-4xl sm:block'>Welcome to <span className='text-[#FF00EE] '>Bitsky</span></div>
        <div className='text-lg font-normal font-cevicheOne md:text-2xl lg:text-3xl 2xl:text-4xl'>Welcome to <span className='text-[#FF00EE] '>Bitsky</span></div>
    </div>
  )
}
