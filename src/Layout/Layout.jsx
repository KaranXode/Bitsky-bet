import React from 'react'
import Hero from './../Pages/Hero';
import WelcomeBanner from '../Components/WelcomeBanner/WelcomeBanner';
import ReferSection from '../Pages/ReferSection';
import SubscribeSection from '../Pages/SubscribeSection';
import PopularGames from '../Pages/PopularGames';
import SocialMedia from '../Pages/SocialMedia';

export default function Layout() {
  return (
    <div>
        <Hero/>
        <WelcomeBanner/>
        <ReferSection/>
        <PopularGames/>
        <SubscribeSection/>
        <SocialMedia/>
    </div>
  )
}
