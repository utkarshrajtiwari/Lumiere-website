import React from "react";
import SplitText from "../reactbits/SplitText";

const AboutLanding = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="picture w-full h-screen overflow-hidden">
        <img
          className="w-full h-full object-cover object-[33%_center] sm:object-[33%_center]"
          src="/images/AboutLanding.webp"
          alt=""
        />
      </div>
      <div className="text absolute inset-0 flex flex-col justify-center items-center max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="heading font-['logofont'] text-center">
          <SplitText
            ease="power3.out"
            delay={300}
            duration={2}
            text="Welcome to LUMIERE"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl leading-tight"
          />
        </div>
        <div className="sub-heading font-['logofont']  text-center">
          <SplitText
            ease="power3.out"
            delay={400}
            duration={2}
            text="KNOW MORE ABOUT US!"
            className="text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]"
          >
            KNOW MORE ABOUT US
          </SplitText>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
