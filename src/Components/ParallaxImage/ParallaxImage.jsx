import React from 'react'
import ParallaxImg from "../../assets/images/paralex-bg.jfif"; 

export default function ParallaxImage() {
  return (
    <div className='fixed left-0 right-0 opacity-[0.2] -z-[1]'>
        <img src={ParallaxImg} alt="parallax" className='object-cover w-full h-screen'  />
    </div>
  )
}
