import React from "react";
import { SiPolestar } from "react-icons/si";

const PlayReel = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-black">
      <div className="w-40 aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden md:w-60 sm:w-90">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]"
          src="../../../public/product/PlayReel.mp4"
        ></video>
      </div>

      <div className=" overlay absolute w-full h-screen  text-white flex flex-col justify-between py-20">
        <div className="w-full flex items-center justify-center gap-3">
          <SiPolestar className="text-2xl" />
          <h3 className="font-medium text-sm">Work in motion</h3>
        </div>
        <h1 className="w-full justify-center flex gap-20 md:gap-[25rem] sm:gap-[40rem]">
          <div className="text-6xl font-medium md:text-7xl sm:text-9xl">
            Play
          </div>
          <div className="text-6xl font-medium md:text-7xl sm:text-9xl">
            Reel
          </div>
        </h1>
        <p className="text-center px-10 font-medium text-sm">
          Our work is best experienced in motion.Don't forget to put on your
          headphones.
        </p>
      </div>
    </div>
  );
};

export default PlayReel;
