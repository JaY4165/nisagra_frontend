import React from "react";

const LoginCard = () => {
  return (
    <div>
      <div className="w-[100%] h-[100%] bg-neutral-800 shadow-xl ">
        <div className="card-body ">
         <h3 className="text-m font-mono  text-gray-300 text-xl text-emerald-200 ">
            welcome to JIL foods!
          </h3>
        </div>
        <div className="card-body ">
          <h1 className="text-2xl font-semibold text-gray-200 self-center">
            Create an Account
          </h1>
          <section>
            <div className="mb-3">
              <input
                type="email"
                placeholder="email Address"
                className="input w-full max-w-xs rounded-full border-stone-900 bg-stone-700 mt-5 h-8 font-light"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                className="input w-full max-w-xs rounded-full border-stone-900 bg-stone-700   mt-3 h-8  font-light"
              />
            </div>
            <div className="text-center">
              <button className="w-[150px] h-9 mt-6 mb-0 btn btn-success self-center">
                sign In
              </button>
            </div>
            <div>
              <p className="text-gray-200 text-xs text-center mt-2">
                 Dont have an account?
                <a className="link link-primary text-emerald-400  ">  sign up</a>
              </p>
            </div>
          </section>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default LoginCard;
