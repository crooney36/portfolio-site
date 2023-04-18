import React from "react";

const Gradient = ({ thickness = "4px" }) => {
  const gradientStyle = {
    background: "linear-gradient(90deg, #40c9ff 0%, #e81cff 100%)",
    height: thickness,
    width: "100vw",
  };

  return <div style={gradientStyle} />;
};

export default Gradient;
