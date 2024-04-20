import React from "react";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

// Define the array of slides with numbers
const slides = [
  { text: "Invest in real state" },
  { text: "Invest in real state" },
  { text: "Invest in real state" },
];

const Slider = () => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div
      className={`relative w-full overflow-hidden bg-greenprimary ${bebas.className} py-3`}
    >
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex flex-col items-center justify-center h-full text-md md:text-5xl">
              {slide.text}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
