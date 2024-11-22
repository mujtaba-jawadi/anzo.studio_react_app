import React from "react";

export const VideoScreen = () => {
  return (
    <div className="relative h-screen mt-[-3rem] flex items-center justify-center">
      <img
        className="absolute h-[80vh] z-20"
        src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_942,h_542,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
        alt=""
      />
      <video
        className="h-[72vh] w-[48vw] relative z-10  object-cover"
        src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"
        autoPlay={true}
        muted
        loop
      ></video>

      <div className="h-0.5 w-[48rem] top-[40%] z-0 bg-[rgb(106,106,106)] absolute"></div>
      <div className="h-0.5 w-[65rem] top-[58%] z-0 bg-[rgb(106,106,106)] absolute"></div>
      <div className="h-0.5 w-full top-[75%] z-0 bg-[rgb(106,106,106)] absolute"></div>
    </div>
  );
};
