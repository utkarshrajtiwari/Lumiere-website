import React from "react";

const Landing = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="picture w-full h-screen overflow-hidden ">
        <img
          className="w-full h-full object-cover  object-[33%_center] md:object-cover"
          src="/public/four (1).jpg"
          alt=""
        />
      </div>
      <div className="text absolute top-0 h-full  max-w-screen-2xl mx-auto px-2 md:px-15 left-1/2 transform -translate-x-1/2 ">
        <div className="heading font-['logofont'] mt-72">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[14rem]">LUMIERE</h1>
        </div>
        <div className="sub-heading font-['logofont'] h-0.5 text-center">
          <h4 className="text-[0.5rem] sm:text-[0.7rem] lg:text-base">WHERE IMAGINATION MEETS FASHION</h4>
        </div>
      </div>
    </div>
  );
};

export default Landing;
