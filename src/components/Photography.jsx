import React from "react";
import "lazysizes";

const Photography = ({ photos, lqipPhotos }) => {
  return (
    <div className="mx-auto max-w-screen-xl mb-48">
      {" "}
      {/* Add the wrapper div here */}
      <div className="flex flex-wrap justify-center">
        {photos.map((photo, index) => (
          <div key={index} className="w-1/4 p-1">
            <img
              src={lqipPhotos[index]}
              data-src={photo}
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
