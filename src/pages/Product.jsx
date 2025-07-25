import React from "react";
import ProductCards from "../components/productcompo/ProductCards";
import ProductBanner from "../components/productcompo/ProductBanner";
import Footer from "../components/common/Footer";
import ScrollVelocity from "../components/reactbits/ScrollVelocity";
import { motion } from "motion/react";

import LocomotiveScroll from "locomotive-scroll";

const Product = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="max-w-screen-2xl mx-auto bg-black min-h-screen">
      <div className="pt-30">
        <div className=" px-4 sm:px-8 md:px-12 lg:px-20 pb-6 text-center">
          <h2 className="font-['para'] text-6xl md:text-8xl lg:text-9xl font-light tracking-wider overflow-hidden">
            <motion.span
              initial={{ rotate: 90, y: "40%", opacity: 0 }}
              whileInView={{ rotate: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 2 }}
              className="inline-block origin-left"
            >
              WOMEN
            </motion.span>
          </h2>
          <h1 className="font-['heading']text-xl font-light">
            Spring-Summer 2025 Collection
          </h1>
        </div>
        <ProductCards />
        <ProductBanner />
        <ScrollVelocity
          texts={["LUMIERE", "PREMIUM "]}
          velocity={100}
          className="custom-scroll-text"
        />
        <Footer />
      </div>
    </div>
  );
};

export default Product;
