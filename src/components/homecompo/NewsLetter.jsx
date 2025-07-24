import React from "react";
import LightRays from "../reactbits/LightRays";

const NewsLetter = () => {
  return (
    <div className="max-w-screen-2xl h-screen py-10 sm:h-[70vh] lg:h-[80vh] px-5">
      <div className="news-letter-container relative h-full w-full  rounded-4xl overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#07528B"
          raysSpeed={1.5}
          lightSpread={7}
          rayLength={100}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full relative overflow-hidden"
        />

        <div className="newsletter absolute inset-0 flex items-center justify-center">
          <div className="h-[80%] w-[80%] lg:w-1/2 lg:h-[70%] mx-auto my-auto bg-white/10 backdrop-blur-sm px-5 rounded-xl flex items-center justify-center text-center">
            <div className="newsLetter-content flex flex-col gap-5">
                <h3 className="text-2xl font-bold">Sign up to keep up to date with LUMIERE!</h3>
                <h5>Dive into your unique style, sans pretense and without conformity and experience NOUSHELLA.</h5>
                <input className="border-b w-full outline-none focus:outline-none px-5 py-1" type="email" placeholder="Your Email..." />
                <button className="border-2 rounded-md px-6 py-2 w-full text-2xl active:scale-95 transition-transform duration-150">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
