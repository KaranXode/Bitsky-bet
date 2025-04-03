import React from "react";
import SocialMediaBG from "../assets/images/socialMedia-bg.png";
import youtube from "../assets/images/YouTube.svg";
import instagram from "../assets/images/Instagram.svg";
import twitch from "../assets/images/Twitch.svg";
import facebook from "../assets/images/Facebook.svg";
import whatsapp from "../assets/images/WhatsApp.svg";
import tiktok from "../assets/images/TikTok.svg";





export default function SocialMedia() {
  const socialMediaData = [
    { name: "Youtube", icon: youtube },
    { name: "Instagram", icon: instagram },
    { name: "Twitch", icon: twitch },
    { name: "Facebook", icon: facebook },
    { name: "WhatsApp", icon: whatsapp },

    { name: "Til Tok", icon: tiktok },
  ];
  return (
    <div className="relative wrapper">
      <img src={SocialMediaBG} alt="image" />
      <div className="absolute top-0 flex items-center justify-end w-full h-full">
        <div className="text-[10px] font-semibold md:text-xl relative top-[12px] sm:top-[24px] lg:text-3xl 2xl:text-[42px] uppercase">Follow Us on &gt;&gt;</div>
        <div className="grid w-[70%] grid-cols-3 gap-1 md:gap-3 px-3 md:px-20">
          {socialMediaData.map((item, index) => (
            <a href="#" className="gap-1 p-1 cursor-pointer social-media-card md:p-3 md:gap-4 zoom-effect">
              <span>
                <img src={item.icon} alt={`${item.name}`}  className="w-4 sm:w-3/4 xl:w-auto"/>
              </span>
              <div className="text-[8px] sm:text-xs font-semibold lg:text-xl xl:text-xl whitespace-nowrap pr-[6px] sm:pr-0" >{item.name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
