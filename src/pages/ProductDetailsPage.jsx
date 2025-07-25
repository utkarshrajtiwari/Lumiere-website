import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../context/ProductContext";
import ProductDetailVideo from "../components/productDetalsCompo/ProductDetailImage";
import ScrollVelocity from "../components/reactbits/ScrollVelocity";
import ProductDetailImage from "../components/productDetalsCompo/ProductDetailImage";
import Footer from "../components/common/Footer";
import Marquee from "../components/common/Marquee";

import LocomotiveScroll from "locomotive-scroll";

const ProductDetailsPage = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const { data } = useContext(productContext);
  const params = useParams();
  const product = data.find((elem) => params.id === elem.id);
  console.log(product);
  return (
    <div className="min-h-screen  max-w-screen-2xl mx-auto py-5">
      <div className=" flex flex-col sm:flex-row px-5 h-full w-full pt-30 sm:gap-10">
        <div className="w-full h-[23rem] mb-3 sm:w-1/2 sm:h-[25rem] lg:h-[30rem] flex group overflow-hidden ">
          <img
            className="h-full w-full object-cover group-hover:hidden"
            src={product.image1}
            alt=""
          />
          <img
            className="h-full w-full object-cover hidden group-hover:block"
            src={product.image2}
            alt=""
          />
        </div>
        <div className="detail-container flex flex-col sm:w-1/2 gap-7 mb-5 lg:my-auto sm:gap-10">
          <h1 className="text-4xl font-['heading'] font-light">
            {product.title}
          </h1>
          <h4 className="text-xl">{product.price}</h4>
          <p className="font-['para'] tracking-widest [word-spacing]">
            {product.disc}
          </p>
          <div className="size mb-4">
            <span className="mr-5">Size</span>
            <span className="p-3 border rounded-sm m-1">XS</span>
            <span className="p-3 border rounded-sm m-1">S</span>
            <span className="p-3 border rounded-sm m-1">M</span>
            <span className="p-3 border rounded-sm m-1">L</span>
            <span className="p-3 border rounded-sm m-1">XL</span>
          </div>
          <button className="font-['para'] border px-2 py-1 rounded-md w-[40%]">
            Order Now
          </button>
        </div>
      </div>
      <Marquee />
      <ProductDetailImage />
      <ScrollVelocity
        texts={["PRODUCT SECTION", "YOUR IMAGINATION"]}
        velocity={100}
        className="custom-scroll-text font-['heading']"
      />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
