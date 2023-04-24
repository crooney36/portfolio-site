import React from "react";

const Photography = ({ photos }) => {
  return (
    <div className="flex flex-wrap">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="w-1/4 p-1" // Adjust the padding here as needed
        >
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full h-100 object-cover" // Adjust the height here as needed
          />
        </div>
      ))}
    </div>
  );
};

export default Photography;
