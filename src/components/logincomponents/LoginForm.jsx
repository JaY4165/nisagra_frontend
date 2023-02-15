import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="h-screen w-[100%] sm:overflow-y-hidden overflow-x-auto bg-neutral-800 pb-5 xl:pt-10">
      <h2 className="text-4xl pt-20 text-white font-sans selection:text-success text-center">
        SignIn
      </h2>
      <form action="/register" method="post" className="h-auto" id="loginform">
        <div className="grid grid-cols-1 grid-rows-1 gap-10 py-10 px-20">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 px-20  gap-10 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-1 ">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-10 pt-10 px-20">
          <button className="btn text-stone-800 font-semibold  bg-emerald-400  border-green-500  hover:bg-white hover:text-emerald-700 duration-300">
            SignIn
          </button>
        </div>
        <div>
          <p className="text-gray-200 text-xs sm:text-lg text-center pt-5">
            Don't have an account ?{" "}
            <Link
              to={`/register`}
              className="link link-accent no-underline text-emerald-400  "
            >
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
