import React from 'react'
const HomePage2 = () =>{
    return(
        <div className="carousel w-full max-h-[600px] auto m-auto py-6">
        <div id="slide1" className="carousel-item relative  w-full">
          <img  src="https://www.pixelstalk.net/wp-content/uploads/images5/4K-Food-HD-Wallpaper-Free-download.jpg" className="w-[1640px] object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://p4.wallpaperbetter.com/wallpaper/207/802/548/dessert-food-life-still-wallpaper-preview.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://img4.goodfon.com/wallpaper/nbig/f/e1/burgery-bulochki-ovoshchi-miaso.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://c0.wallpaperflare.com/preview/395/354/488/cupcake-dessert-cake-food.jpg" className="w-full object-cover" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    )

}
export default HomePage2