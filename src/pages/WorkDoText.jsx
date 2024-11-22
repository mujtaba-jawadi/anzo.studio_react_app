import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import React from "react";

export const WorkDoText = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".workDoText", {
      transform: "rotateX(-70deg)",
      opacity: 0,
      duration: 1.5,
      stagger: 1,
      scrollTrigger: {
        trigger: ".workDoText",
        // markers: "true",
        start: "top 100%",
        end: "top -300%",
        scrub: 2,
      },
    });
  });

  return (
    <div className="workDoSection bg-white text-black p-12 text-center">
      <div className="workDoText pt-10">
        <h1 className="text-[38vw] font-[anzo5] leading-[30vw]">HELPING</h1>
      </div>
      <div className="workDoText">
        <h1 className="text-[38vw] font-[anzo5] leading-[30vw] text-[#9b9b9b]">
          MY
        </h1>
      </div>
      <div className="workDoText">
        <h1 className="text-[38vw] font-[anzo5] leading-[30vw]">CLIENTS</h1>
      </div>
      <div className="workDoText">
        <h1 className="text-[38vw] font-[anzo5] leading-[30vw]">TO ACHIEVE</h1>
      </div>
      <div className="workDoText">
        <h1 className="text-[38vw] font-[anzo5] leading-[30vw] text-[#9b9b9b]">
          THEIR
        </h1>
      </div>
      <div className="workDoText">
        <h1 className="text-[38vw] font-[anzo5] leading-[30vw]">DREAMS!</h1>
      </div>
    </div>
  );
};
