import { CgMenuGridO } from "react-icons/cg";

export const Hire = () => {
  return (
    <div className="fixed w-full flex items-center justify-end z-10 ml-4 py-[70px] px-[40px]">
      <button className="bg-black shadow-md shadow-gray-400 border-[5.5px] text-l rounded-full px-10 py-2 hover:bg-[rgb(155,155,155)]">
        Hire Me
      </button>
      <CgMenuGridO className="text-3xl text-gray-400 ml-2" />
    </div>
  );
};
