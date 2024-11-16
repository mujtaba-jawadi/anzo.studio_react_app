import { HeroBottomText } from "../components/HeroBottomText";
import { HeroTiltText } from "../components/HeroTiltText";

export const Home = () => {

  const handleMouseMoving = (e) => {
    console.log(e)
  }

  return (
    <div onMouseMove={(e) => {
      handleMouseMoving(e);
    }} className="h-screen p-3 bg-white">
      <div className="shadow-lg p-12 shadow-black w-full h-full rounded-[30px] bg-[url(../imgs/ANZO.webp)] bg-cover">
        <img
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt="Logo Image"
          className="h-[4rem] ml-4"
        />
        <HeroTiltText />
        <HeroBottomText />
      </div>
    </div>
  );
};
