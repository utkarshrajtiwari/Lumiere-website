import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 md:py-6">
      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 md:mb-8">
          {/* Left Navigation */}
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-16 mb-8 lg:mb-0">
            <div className="flex flex-col space-y-4 ">
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                COLLECTIONS
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                SHOP
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                CONTACT US
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                STORY
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                SUSTAINABILITY
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                ABOUT US
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                HIGHLIGHTS
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                READY TO WEAR
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 text-sm  tracking-wider"
              >
                ACCESSORIES
              </a>
            </div>
          </div>

          {/* Right Section - Social Icons and Images */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/utkarsh_raj_tiwari/"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>

              <a
                href="linkedin.com/in/utkarsh-raj-tiwari-02b18b218"
                className="text-white hover:text-gray-300"
              >
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://github.com/utkarshrajtiwari"
                className="text-white hover:text-gray-300"
              >
                <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2">
              <div className="w-12 h-20 sm:w-14 sm:h-32 md:w-16 md:h-36 bg-gray-700 rounded overflow-hidden">
                <img
                  src="/images/footer_one.jpg"
                  alt="Gallery 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-20 sm:w-14 sm:h-32 md:w-16 md:h-36 bg-gray-700 rounded overflow-hidden">
                <img
                  src="/images/footer_two.jpg"
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-20 sm:w-14 sm:h-32 md:w-16 md:h-36 bg-gray-700 rounded overflow-hidden">
                <img
                  src="/images/footer_three.jpg"
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Policy Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 mb-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 text-xs sm:text-sm tracking-wider"
          >
            SHIPPING
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 text-xs sm:text-sm tracking-wider"
          >
            RETURNS
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 text-xs sm:text-sm tracking-wider"
          >
            TERMS OF SERVICE
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 text-xs sm:text-sm tracking-wider"
          >
            PRIVACY POLICY
          </a>
        </div>

        {/* Brand Name */}
        <div className="text-center overflow-hidden w-full">
          <h1 
            className="text-7xl sm:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold tracking-wider opacity-50 whitespace-nowrap transform scale-x-100 origin-center"
            style={{
              background: 'url(/images/footer_one.jpg) center/cover',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent'
            }}
          >
            LUMIERE
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
