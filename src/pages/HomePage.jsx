import React from 'react'
import "../assets/Style1.css"
const HomePage = () =>{
    return(
       <div className='h-screen w-screen p-4'>
          <div className='sm:h-screen relative'> 
                <div className='absolute w-full h-full text-white-400  bg-black/30 flex flex-col justify center items-center md:py-32'>
                      <h1 className='px-4 text-6xl sm:text-5xl  md:text-6xl lg:text-9xl font-metropolis ' id="Hero">NISARGA</h1>
                    {/* <h1 className='px-4 text-4xl sm:text-4xl  md:text-6xl lg:text-6xl font-bold  pb-20'><span className='text-orange-400 text-4xl'>Taste the </span>Best</h1>   */}
                      <h1 className='px-4 text-grey-400 text-4xl sm:text-3xl  md:text-4xl lg:text-5xl font-bold md:py-4 border-black-500 border-2 border-teal-600 hover:bg-blue-400 transition duration-700 ease-in-out'>Cha<span className='text-orange-700 '>lo! </span></h1>
                </div>
                 <img className='w-full h-screen md:max-h-[550px] object-cover' src="https://c4.wallpaperflare.com/wallpaper/495/760/53/cuisine-food-india-indian-wallpaper-preview.jpg" alt="/" />
            </div>
        </div>
    )

}
export default HomePage
