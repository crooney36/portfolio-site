// Carousel.js
import React from "react";

const Carousel = ({ images }) => {
  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={`slide${index + 1}`}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img src={image} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? images.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > images.length ? 1 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
