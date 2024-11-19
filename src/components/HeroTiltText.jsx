import React from 'react'

export const HeroTiltText = ({tiltTextRef}) => {
  return (
    <div id="tiltDiv" ref={tiltTextRef} className="ml-4 mt-[9rem]">
      <h1 className="text-[4vw] leading-none font-[anzo1]">
        I AM <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-[6.5vw] leading-none font-[anzo1]">DEVELOPER</h1>
      <h1 className="text-[4vw] leading-none font-[anzo1]">TO HIRE</h1>
    </div>
  );
}