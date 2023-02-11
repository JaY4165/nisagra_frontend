import React from "react";
import "../../css/RegistrationImg.css";

const RegistrationImg = () => {
  return (
    <div className="bgImageSet h-screen w-[100%] flex items-center justify-center flex-col">
      <h3 className="text-4xl text-amber-50 z-50 font-sans font-semibold">
        Welcome to JIL
      </h3>
      <p className="text-white z-50 pt-2 font-medium text-sm sm:text-lg">
        You are one step away from your desired food
      </p>
      <div className="overLay"></div>
    </div>
  );
};

export default RegistrationImg;
