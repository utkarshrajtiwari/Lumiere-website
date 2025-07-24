import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed z-[999]">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="desktop hidden md:flex md:justify-between md:items-center md:py-5 md:px-14">
          <div className="logo text-4xl">
            <h1 className="font-['logofont']">Lumiere</h1>
          </div>
          <div className="link flex gap-15 text-sm font-semibold">
            <NavLink className={(e) => (e.isActive ? "border-b-2" : "")} to="/">
              Home
            </NavLink>
            <NavLink
              className={(e) => (e.isActive ? "border-b-2 " : "")}
              to="/product"
            >
              Product
            </NavLink>
            <NavLink
              className={(e) => (e.isActive ? "border-b-2 " : "")}
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>

        <div className="mobile md:hidden px-6 py-5 flex flex-col gap-2 border-white">
          <div className="flex justify-between">
            <h1 className="font-['logofont'] text-4xl ">Lumiere</h1>

            <button className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
              <IoIosMenu />
            </button>
          </div>
          {isOpen && (
            <div className="flex justify-around font-semibold ">
              <NavLink
                className={(e) => (e.isActive ? " border-b-2" : "")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={(e) => (e.isActive ? " border-b-2" : "")}
                to="/product"
              >
                Product
              </NavLink>
              <NavLink
                className={(e) => (e.isActive ? "border-b-2" : "")}
                to="/about"
              >
                About
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
