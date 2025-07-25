import React from "react";
import Landing from "../components/homecompo/Landing";
import PlayReel from "../components/homecompo/PlayReel";
import Featured from "../components/homecompo/Featured";
import Marquee from "../components/common/Marquee";
import NewsLetter from "../components/homecompo/NewsLetter";
import Footer from "../components/common/Footer";
import ScrollVelocity from "../components/reactbits/ScrollVelocity";

import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <Landing />
      <Featured />
      <Marquee />
      <PlayReel />
      <ScrollVelocity
        texts={["LUMIERE", "PREMIUM "]}
        velocity={100}
        className="custom-scroll-text"
      />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
/* 
   
*/
