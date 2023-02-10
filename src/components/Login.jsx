import React from 'react'

const Login = () => {
  return (
    <div className=' grid grid-cols-1 grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-1 lg:grid-rows-2 xl:grid-cols-1 xl:grid-rows-2font-medium bg-neutral-800 w-[100%] h-[100%] '>
      <div>
        <p className='text-2xl font-semibold text-gray-200 self-center px-56 font-sans md:mt-40 md:text-xl md:px-24  lg:px-36 lg:text-2xl lg:mt-72 xl:text-3xl'> Create an Account</p></div>
      <div className="mb-3 sm:px-5 md:px-5  xl:px-48 2xl:px-96 lg:px-24">
              <input
                type="email"
                placeholder="email Address"
                className="input w-full max-w-xs rounded-lg
                  bg-stone-700 mt-5 h-8 font-light sm:w-[300px]"
              />
            </div>
            <div className="px-32 sm:w-full sm:px-5  md:px-5 xl:px-48 2xl:px-96 lg:px-24">
              <input
                type="password"
                placeholder="password"
                className="input w-full max-w-x  rounded-lg  bg-stone-700   mt-3 h-8  font-light sm:w-[300px] 2xl:w"
                
              />
            </div>
            <div className="text-center">
              <button className="w-[150px] h-9 mt-6 mb-0 btn btn-success self-center">
                sign In
              </button>
            </div>
            <div>
              <p className="text-gray-200 text-xs text-center mt-2">
                 Don't have an account?
                <a className="link link-primary text-emerald-400  ">  sign up</a>
              </p>
            </div>
    </div>
  )
}

export default Login