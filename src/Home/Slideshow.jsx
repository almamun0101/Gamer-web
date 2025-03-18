import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    "./Images/slides1.jpg",
    "./Images/slides2.jpg",
    "./Images/slides3.jpg",
    "./Images/slides4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">

    <div className="relative w-full max-w-large mx-auto py-5 px-20">
      {/* Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-64 md:h-110 object-cover rounded-lg shadow-lg transition-opacity duration-500"
      />

      {/* Previous & Next Buttons */}
      {/* <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-20 hover:bg-opacity-50 text-white p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-20 hover:bg-opacity-50 text-white p-2 rounded-full"
        >
          ▶
        </button>
      </div> */}

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Slideshow;
