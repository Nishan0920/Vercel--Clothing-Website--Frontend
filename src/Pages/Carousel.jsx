import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "/carousel1.png",
      title: (
        <div className="flex flex-col items-center justify-center px-4 text-center space-y-2 md:space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Welcome to NoirThread,
          </h1>

          <p className="text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md opacity-90">
            where the fashion is everything...
          </p>
        </div>
      ),
    },
    {
      url: "/carousel2.png",
      title: (
        <div className="flex flex-col items-center justify-center px-4 text-center space-y-2 md:space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Welcome to NoirThread,
          </h1>

          <p className="text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md opacity-90">
            where the fashion is everything...
          </p>
        </div>
      ),
    },
    {
      url: "/carousel3.png",
      title: (
        <div className="flex flex-col items-center justify-center px-4 text-center space-y-2 md:space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Welcome to NoirThread,
          </h1>

          <p className="text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md opacity-90">
            where the fashion is everything...
          </p>
        </div>
      ),
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div>
      <div className="max-w-full h-[550px] mt-7 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full  bg-center bg-cover duration-500 shadow-xl flex items-center justify-center brightness-50 "
        >
          <div className="bg-black/30 w-full h-full flex items-center justify-center ">
            <h2 className="text-white text-4xl  font-bold uppercase ">
              {slides[currentIndex].title}
            </h2>
          </div>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all">
          <button onClick={prevSlide}>❮</button>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all">
          <button onClick={nextSlide}>❯</button>
        </div>

        <div className="absolute bottom-35 left-1/2 -translate-x-1/2 text-white ">
          <Link
            to="/product"
            className="inline-flex  justify-center px-6 py-2 md:px-10 md:py-3 text-sm md:text-xl font-semibold rounded-full bg-red-600 hover:bg-red-700  mt-4 "
          >
            Explore More
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
