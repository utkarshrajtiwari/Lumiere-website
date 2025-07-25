import { useState, useEffect } from "react";
import { motion } from "motion/react";

const AboutMain = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const images = [
    {
      id: 1,
      src: "/images/AboutMain_1.png",
      alt: "Fashion interior 1",
      aspect: "aspect-[4/5]",
    },
    {
      id: 2,
      src: "/images/AboutMain_2.png",
      alt: "Fashion item 2",
      aspect: "aspect-[3/2]",
    },
    {
      id: 3,
      src: "/images/AboutMain_3.jpg",
      alt: "Fashion workspace 3",
      aspect: "aspect-[5/6]",
    },
    {
      id: 4,
      src: "/images/AboutMain_4.jpg",
      alt: "Fashion design 4",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Image */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div
              className={`relative group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredImage === 1 ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-center">
            <div className="space-y-8">
              {/* "nk" small text */}
              <div
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <span className="text-lg md:text-xl text-gray-600 font-light tracking-[0.3em]">
                  LUMIERE
                </span>
              </div>

              {/* Large "About us" Typography */}
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-gray-900 leading-none tracking-tight">
                  <span className="inline-block hover:text-gray-700 transition-colors duration-300 cursor-default overflow-hidden">
                    <motion.span
                      initial={{ rotate: 90, y: "40%", opacity: 0 }}
                      whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ ease: [0.22, 1, 0.36, 1], duration: 2 }}
                      className="inline-block origin-left"
                    >
                      About us
                    </motion.span>
                  </span>
                </h1>
              </div>

              {/* Description Text */}
              <div
                className={`max-w-md mx-auto transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <p className="text-sm md:text-base text-gray-700 leading-relaxed tracking-wide">
                  Lumiere is a fashion company that believes fashion is made
                  with intention, expression, and innovation. We bring together
                  leading international brands and an original line with its own
                  identity. We translate our essence into a unique style of
                  dress, with a curious eye and attention to detail.
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed tracking-wide mt-4">
                  Welcome to our universe.
                </p>
              </div>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="lg:col-span-3 order-3">
            <div className="grid grid-cols-1 gap-4">
              {/* Top Small Image */}
              <div
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
                onMouseEnter={() => setHoveredImage(2)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="aspect-[3/2] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredImage === 2 ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Bottom Tall Image */}
              <div
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "1200ms" }}
                onMouseEnter={() => setHoveredImage(3)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="aspect-[5/6] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredImage === 3 ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Featured Image */}
        <div
          className={`mt-16 lg:mt-24 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "1400ms" }}
          onMouseEnter={() => setHoveredImage(4)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <div className="max-w-2xl mx-auto">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredImage === 4 ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-10 w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-gray-300 rounded-full animate-ping"></div>
    </div>
  );
};

export default AboutMain;
