import React, { useState, useEffect } from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import smallhero1 from "../assets/smallhero1.webp";
import smallhero2 from "../assets/smallhero2.webp";
import smallhero3 from "../assets/smallhero3.webp";

const Hero = () => {
  const smallAndMediumImages = [smallhero1, smallhero2, smallhero3];
  const largeImages = [hero1, hero2, hero3];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = windowWidth >= 1024 ? largeImages : smallAndMediumImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="px-0 md:py-6 md:px-12 lg:py-10 lg:px-44">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "auto" }}
      >
        {/* Slider images */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
              style={{ maxHeight: windowWidth >= 1024 ? "90vh" : "auto" }}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-5 h-2 rounded-full ${
                currentSlide === index ? "bg-[#008000]" : "bg-[#869791]"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;