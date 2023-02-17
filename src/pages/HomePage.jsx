import React from 'react'

const HomePage = () =>{
    return(
       <div className='h-screen w-screen p-4'>
          <div className='relative'> 
                <div className='absolute w-full h-full text-white-400  bg-black/30 flex flex-col justify center items-center  md:py-32'>
                      <h1 className='px-4 text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font-bold  '>Nisagra     Foods</h1>
                      <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold  '><span className='text-orange-400 text-4xl'>Taste the </span>Best</h1>
                      <h1 className='px-4 text-grey-400 text-4xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold md:py-4 border-green-500 border-2 border-teal-600 hover:bg-green-200 transition duration-700 ease-in-out'>Cha<span className='text-orange-700 '>lo! </span></h1>
                </div>
                 <img className='w-full max-h-[550px] object-cover' src="https://c4.wallpaperflare.com/wallpaper/495/760/53/cuisine-food-india-indian-wallpaper-preview.jpg" alt="/" />
            </div>
        </div>
    )

}
export default HomePage
