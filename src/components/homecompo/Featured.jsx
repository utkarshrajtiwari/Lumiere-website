import React from "react";
import { SiPolestar } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import SpotlightCard from "../reactbits/SpotlightCard";

const Featured = () => {
  const navigate = useNavigate();
  const NaviagteHandler = () => {
    navigate("product");
  };

  return (
    <div className="max-w-screen-2xl min-h-screen relative overflow-hidden py-40">
      <div className="background-text absolute inset-0 w-full h-full flex items-center justify-center z-0 opacity-65">
        <h1 className=" text-[40rem] sm:text-[50rem] lg:text-[90rem] leading-none">2</h1>
        <h1 className="text-[40rem] sm:text-[50rem] lg:text-[90rem] leading-none">4</h1>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="overlay-images text relative px-5 py-10 flex flex-col gap-20 z-10">

        {/* //////////////////////////////////////////////////////////////////////////////////////// */}

        <div className="overlay-image-heading flex flex-col gap-10 text-center items-center">
          <h1 className="font-['para'] text-5xl md:text-7xl xl:text-9xl">NEW ARRIVALS</h1>
          <span className="flex gap-2 border-b-1">
            <SiPolestar className="text-2xl " /> <h5 onClick={NaviagteHandler}>SEE All</h5>
          </span>
        </div>


        {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="overlay-images-container flex flex-col gap-7 sm:flex-row">
          {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
          <SpotlightCard
            className="custom-spotlight-card  mx-auto w-[95%] flex flex-col items-center"
            spotlightColor="rgba(221, 221, 221, 0.9)"
          >
            <div className="w-full h-full overflow-hidden">
              <img className="w-full h-full object-cover" src="/src/assets/images/featured-1.jpg" alt="" />
            </div>
            <div>
              <h3 className="font-['heading']">SHIRT DRESS</h3>
            </div>
          </SpotlightCard>

          {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

          <SpotlightCard
            className="custom-spotlight-card mx-auto w-[95%] flex flex-col items-center"
            spotlightColor="rgba(221, 221, 221, 0.9)"
          >
            <div className="w-full h-full overflow-hidden">
              <img className="w-full h-full object-cover" src="/src/assets/images/featured-2.jpg" alt="" />
            </div>
            <div>
              <h3 className="font-['heading']">SHEER MESH GOWN</h3>
            </div>
          </SpotlightCard>

          {/* ////////////////////////////////////////////////////////////////////////////////////////// */}

          <SpotlightCard
            className="custom-spotlight-card mx-auto w-[95%] flex flex-col items-center"
            spotlightColor="rgba(221, 221, 221, 0.9)"
          >
            <div className="w-full h-full overflow-hidden">
              <img className="w-full h-full object-cover" src="/src/assets/images/featured-3.jpg" alt="" />
            </div>
            <div>
              <h3 className="font-['heading']">WOMEN'S POWER SUIT</h3>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Featured;
