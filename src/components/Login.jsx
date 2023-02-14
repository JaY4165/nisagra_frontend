import React from 'react'

const Login = () => {
  return (
    <div className=' grid grid-cols-1 grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-1 lg:grid-rows-2 xl:grid-cols-1 xl:grid-rows-2font-medium bg-neutral-800 w-[100%] h-[100%] '>
      <div>
        <p className='text-2xl font-semibold text-gray-200 self-center px-56 font-sans md:mt-40 md:text-xl md:px-24  lg:px-36 lg:text-2xl lg:mt-72 xl:text-3xl'> Create an Account</p></div>
      
            <div className="grid grid-cols-1 grid-rows-2 px-20  gap-10 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols- ">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
          />
          </div>
           
            <div className="grid grid-cols-1 grid-rows-2 px-20  gap-10 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols- ">
          <input
            type="password"
            placeholder="Create Password"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400"
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