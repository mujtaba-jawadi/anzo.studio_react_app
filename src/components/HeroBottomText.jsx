import { useGSAP } from "@gsap/react";
import gsap, { Linear } from "gsap";
import React from "react";

export const HeroBottomText = () => {


  useGSAP(function () {
    gsap.to("#banner-images img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear"
    })
  })

  return (
    <div className="absolute left-0 bottom-0 flex items-end justify-between p-10 w-full">
      <div className="ml-[2.5rem]">
        <h2 className="text-l font-[anzo2]">BRAND WEBSITE | BLOG WEBSITE</h2>
        <h3 className="text-l font-[anzo3] text-[#9b9b9b]">BESPOKE FREELANCE</h3>
      </div>
      <div id="banner-images" className="flex justify-end items-center flex-col gap-2">
        <img
          src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
          alt=""
          className="h-20 rounded-full"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
          alt=""
          className="h-16 rounded-full"
        />
      </div>
    </div>
  );
};
