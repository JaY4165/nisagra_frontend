import React from 'react'

const New = () => {
  return (
    <div>
        <div className="h-screen w-[100%] sm:overflow-y-hidden overflow-x-auto bg-neutral-800 pb-5 ">
      <h2 className="text-4xl ml-36 mt-80 pt-5 pb-10  text-white font-sans selection:text-success">
        Create an Account
      </h2>
      <form action="/register" method="post" className="h-auto">
        <div className="grid grid-cols-1 grid-rows-2 ml-32 w-full sm:grid-cols-2 sm:grid-rows-1 md:grid-cols- ">
          <input
            type="text"
            placeholder="Enter email"
            className="w-full py-2 px-4 rounded-lg outline-none bg-stone-700 placeholder:text-stone-400 "
          />
         
        </div>
        
        <div className="grid grid-cols-1 grid-rows-2 mt-8 ml-32 w-full sm:grid-cols-2 sm:grid-rows-1 md:grid-cols- ">
          <input
            type="password"
            placeholder="Password"
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
      </form>
    </div>

    </div>
  )
}

export default New