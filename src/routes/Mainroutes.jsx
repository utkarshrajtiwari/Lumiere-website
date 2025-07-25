import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetailsPage";
import PageTransition from "../components/common/PageTransition";

const Mainroutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/product" 
          element={
            <PageTransition>
              <Product />
            </PageTransition>
          } 
        />
        <Route 
          path="/product/details/:id" 
          element={
            <PageTransition>
              <ProductDetails />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Mainroutes;
