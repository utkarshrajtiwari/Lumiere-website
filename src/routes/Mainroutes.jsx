import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetailsPage";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/details/:id" element={<ProductDetails />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
