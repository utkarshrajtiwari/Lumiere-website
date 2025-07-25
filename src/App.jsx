import React from "react";
import Mainroutes from "./routes/Mainroutes";
import NavBar from "./components/common/NavBar";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full text-[#DDDDDD] bg-[#000000] overflow-hidden">
      <NavBar />
      <div className="relative">
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;
