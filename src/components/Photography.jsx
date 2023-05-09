import React from "react";
import "lazysizes";

const Photography = ({ lqipPhotos }) => {
  return (
    <div className="mx-auto max-w-screen-xl mb-48">
      <div className="flex flex-wrap justify-center">
        {lqipPhotos.map((photo, index) => (
          <div key={index} className="w-1/4 p-1">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-100 object-cover lazyload"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
