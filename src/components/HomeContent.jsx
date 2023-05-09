import React from "react";

export default function HomeContent() {
  return (
    <div className="hero min-h-screen bg-neutral pt-16 lg:pt-0 flex justify-center items-center">
      <div className="hero-content bg-base-100 px-8 lg:px-16 py-16 rounded-lg flex flex-col lg:flex-row items-center justify-center lg:items-start mx-auto">
        <img
          src="assets/PFP.webp"
          className="max-w-xs rounded-lg shadow-2xl w-2/3 lg:w-auto"
        />
        <div className="ml-0 lg:ml-5 mt-4 lg:mt-0 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold">
            Hi, I'm Charles Rooney!
          </h1>
          <h3 className="font-bold mt-1">Software Engineer</h3>
          <p className="py-6 ">
            As a recent graduate from Full Stack Academy and Virginia
            Commonwealth University, I'm excited to embark on my journey as a
            software engineer! I've gained experience in a diverse suite of
            technologies, and I'm eager to use these skills to create fantastic
            applications. My love for photography and technology fuels my drive
            to innovate, and I enjoy blending creativity with function to
            deliver engaging user experiences. With a solid foundation in
            full-stack development, I'm looking forward to collaborating,
            learning, and growing as I begin my career in this industry!
          </p>
        </div>
      </div>
    </div>
  );
}
