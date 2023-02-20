import React from "react";
import "../../css/RegistrationImg.css";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegistrationImg = () => {
  return (
    <>
      <div className="bgImageSet h-screen w-[100%] flex items-center justify-center flex-col relative">
        <h3 className="text-4xl text-amber-50 z-50 font-sans font-semibold selection:text-success">
          Welcome to Nisagra
        </h3>
        <p className="text-white z-50 pt-2 font-medium text-sm sm:text-lg selection:text-success">
          You are one step away from your desired food
        </p>
        <div className="overLay"></div>
      </div>
      <Link
        to={`/`}
        className="btn btn-circle btn-neutral hover:btn-success absolute justify-self-center top-[87%] sm:top-72 bg-opacity-75"
      >
        <AiOutlineHome className="text-xl" />
      </Link>
    </>
  );
};

export default RegistrationImg;
