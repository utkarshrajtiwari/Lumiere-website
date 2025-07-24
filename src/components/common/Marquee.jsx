import { motion } from "motion/react";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-7  lg:py-10 ">
      <div className="text border-b-2 border-t-2 border-[#dddddd] flex whitespace-nowrap lg:gap-7 overflow-hidden">
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="font-['heading'] lg:text-5xl xl:text-[7rem] md:text-4xl text-3xl pt-4 lg:pt-2 pr-7 leading-none font-semibold pb-2"
        >
          LUMIERE • WHERE LUXURY MEETS ARTISTRY
        </motion.h1>
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="font-['heading'] lg:text-5xl xl:text-[7rem] md:text-4xl text-3xl pt-4 lg:pt-2 pr-7  leading-none font-semibold pb-2"
        >
          LUMIERE • WHERE LUXURY MEETS ARTISTRY
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
