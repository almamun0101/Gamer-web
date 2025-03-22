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
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container pt-10">

    <div className="relative w-full max-w-large mx-auto py-5">
      {/* Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-64 md:h-110 object-cover rounded-lg shadow-lg transition-opacity duration-500"
      />

     

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
