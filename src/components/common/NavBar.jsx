import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import logo from "../../assets/lumiere.png";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-screen-2xl mx-auto text-white">
      <div className="desktop hidden md:flex md:justify-between md:items-center md:py-10 md:px-10">
        <div className="logo text-4xl">
          <h1 className="font-['logofont']">Lumiere</h1>
        </div>
        <div className="link flex gap-10 text-xs font-medium">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="mobile md:hidden px-6 py-5 flex flex-col gap-2 border-b-2 border-white">
        <div className="flex justify-between">
          <h1 className="font-['logofont'] text-2xl ">Lumiere</h1>

          <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
            <IoIosMenu />
          </button>
        </div>
        {isOpen && (
          <div className="flex justify-around font-semibold ">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/about">About</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
