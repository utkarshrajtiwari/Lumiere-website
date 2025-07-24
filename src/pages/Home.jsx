import React from "react";
import Landing from "../components/homecompo/Landing";
import PlayReel from "../components/homecompo/PlayReel";
import Featured from "../components/homecompo/Featured";
import Marquee from "../components/common/Marquee";
import NewsLetter from "../components/homecompo/NewsLetter";
import Footer from "../components/common/Footer";
const Home = () => {
  return (
    <div>
      <Landing />
      <Featured />
      <Marquee />
      <PlayReel />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
