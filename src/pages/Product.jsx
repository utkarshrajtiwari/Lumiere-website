import React from "react";
import ProductCards from "../components/productcompo/ProductCards";
import ProductBanner from "../components/productcompo/ProductBanner";

const Product = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-black min-h-screen">
      <div className="pt-30">
        <div className=" px-4 sm:px-8 md:px-12 lg:px-20 pb-6 text-center">
          <h2 className="font-['para'] text-6xl md:text-8xl lg:text-9xl font-light tracking-wider">
            WOMEN
          </h2>
          <h1 className="font-['heading']text-xl font-light">
            Spring-Summer 2025 Collection
          </h1>
        </div>
        <ProductCards />
        <ProductBanner />
      </div>
    </div>
  );
};

export default Product;
