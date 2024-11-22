import React from "react";

export const About = () => {
  return (
    <div className="h-screen relative z-500 pt-3">
      <div className="h-full w-full overflow-hidden  rounded-[30px] bg-black">
        <video
          className="h-full w-full object-cover"
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"
          autoPlay={true}
          loop
          muted
        ></video>
        <h1 className="font-[anzo5] absolute text-red text-[40vw] left-20 top-3 tracking-wide">ABOUT</h1>
      </div>
    </div>
  );
};
