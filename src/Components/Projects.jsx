import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Projects = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    };
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );
    };
    const handleDotClick = (index) => {
      setCurrentIndex(index);
    };
    return (
      <div className="project-container relative">
        <h1 className="text-2xl font-medium mt-16 mb-5 lg:mt-24" id="projects">Current Projects</h1>
        <div className="carousel lg:max-w-screen-lg lg:max-h-96 border relative">
        
            <img
              key={currentIndex}
              src={images[currentIndex]}
            /><div className="slide_direction">
            
            
          </div>
         
        </div>
        <div className="left" onClick={handlePrevious}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
              </svg>
            </div>
            <div className="right" onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
              </svg>
            </div>
        <div className="indicator lg:mb-24">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      );
}

export default Projects