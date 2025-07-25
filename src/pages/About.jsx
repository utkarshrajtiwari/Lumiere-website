import React from "react";
import AboutLanding from "../components/aboutcompo/AboutLanding";
import AboutMain from "../components/aboutcompo/AboutMain";
import Footer from "../components/common/Footer";

import LocomotiveScroll from "locomotive-scroll";

const About = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <AboutLanding />
      <AboutMain />
      <Footer />
    </div>
  );
};

export default About;
