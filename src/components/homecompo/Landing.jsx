import React from "react";
import SplitText from "../reactbits/SplitText";

const Landing = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="picture w-full h-screen overflow-hidden">
        <img
          className="w-full h-full object-cover object-[33%_center] sm:object-[33%_center]"
          src="/public/four (1).jpg"
          alt=""
        />
      </div>
      <div className="text absolute inset-0 flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="heading font-['logofont'] text-center">
          <SplitText
          ease="power3.out"
          delay={300}
          duration={2}
            text="LUMIERE"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[14rem] leading-tight"
          />
        </div>
        <div className="sub-heading font-['logofont']  text-center">
          <SplitText ease="power3.out"
          delay={100}
          duration={2}
            text="LUMIERE WHERE LUXURY MEETS ARTISTRY" className="text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]">
            LUMIERE • WHERE LUXURY MEETS ARTISTRY
          </SplitText>
        </div>
      </div>
    </div>
  );
};

export default Landing;
