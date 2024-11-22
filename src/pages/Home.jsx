import { useRef, useState } from "react";
import { HeroBottomText } from "../components/HeroBottomText";
import {HeroTiltText} from '../components/HeroTiltText'
import { Hire } from "../components/Hire";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SloganSection } from "./SloganSection";
import { VideoScreen } from "./VideoScreen";
import { WorkDo } from "./WorkDo";
import { About } from "./About";
import { WorkDoText } from "./WorkDoText";
// import { HeroTiltText } from "../components/HeroTiltText";

export const Home = () => {

  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)


  const tiltTextRef = useRef(null)

  const handleMouseMoving = (e) => {
    // console.log(tiltTextRef.current.getBoundingClientRect())
    // setXValue(e.clientX / 10)
    // setYValue(e.clientY/10)
    // console.log(e.clientX - tiltTextRef.current.getBoundingClientRect().x);
    setXValue((e.clientX - tiltTextRef.current.getBoundingClientRect().x -tiltTextRef.current.getBoundingClientRect().width/2)/18)
    setYValue(-(e.clientY - tiltTextRef.current.getBoundingClientRect().y-tiltTextRef.current.getBoundingClientRect().height/2)/10)
  }


  useGSAP(function () {
    gsap.to(tiltTextRef.current, {
      transform: `rotateX(${yValue}deg) rotateY(${xValue}deg)`,
      duration: 3,
      ease: 'power1.easeInOut',
      overwrite: 'auto',
      
     
    });
  }, [xValue, yValue])

  return (
    <div
      onMouseMove={(e) => {
        handleMouseMoving(e);
      }}
      className="h-screen p-3 bg-white"
    >
      <Hire />

      <div
        id="home-inner"
        className="relative shadow-lg p-12 shadow-black w-full h-full rounded-[30px] bg-[url(../imgs/ANZO.webp)] bg-cover"
      >
        <img
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt="Logo Image"
          className="h-[4rem] ml-4"
        />
        <HeroTiltText tiltTextRef={tiltTextRef} />
        <HeroBottomText />
      </div>
      <SloganSection />
      <VideoScreen />
      <WorkDo />
      <WorkDoText/>
      <About/>
    </div>
  );
};
