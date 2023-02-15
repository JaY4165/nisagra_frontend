import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="h-screen w-[100%] sm:overflow-y-scroll overflow-x-auto bg-neutral-800 pb-5 xl:pt-2">
      <h2 className="text-4xl text-center sm:text-left px-20 pt-5 pb-10  text-white font-sans selection:text-success">
        Register
      </h2>
      <form action="/register" method="post" className="h-auto">
        <div className="grid grid-cols-1 grid-rows-2 px-20 gap-10 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-1">
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 py-10 px-20">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-2 px-20  gap-10 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols- ">
          <input
            type="password"
            placeholder="Create Password"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 pt-10 px-20">
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 pt-10 px-20">
          <input
            type="text"
            placeholder="Enter Your Address"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 pt-10 px-20">
          <button className="btn text-stone-800 font-semibold  bg-emerald-400  border-green-500  hover:bg-white hover:text-emerald-700 duration-300">
            SignUp
          </button>
        </div>
        <div>
          <p className="text-gray-200 text-xs sm:text-lg text-center pt-5">
            Already have an account ?{" "}
            <Link
              to={`/login`}
              className="link link-accent no-underline text-emerald-400"
            >
              SignIn
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
