import React from "react";
import "../../css/Hero.css";

const Hero = () => {
  return (
    <section>
      <div
        id="hero"
        className="flex flex-col items-center justify-center h-screen overflow-x-hidden"
      >
        <div id="hero" className="w-[100%] h-screen bg-cover bg-center">
          <div className="w-screen h-screen flex  justify-center items-center backdrop-brightness-50 bg-black/20 flex-col gap-2">
            <h1
              id="heroHead"
              className="text-white text-4xl sm:text-6xl md:text-9xl w-full text-center uppercase font-semibold tracking-wider"
            >
              Nisagra
            </h1>
            <h3 className="text-xs sm:text-2xl font-extralight text-slate-300 uppercase tracking-wider">
              The place of heavenly foods
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
