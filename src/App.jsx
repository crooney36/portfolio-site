import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Gradient, ProjectCard } from "./components";

function App() {
  return (
    <div className="App">
      <Gradient />
      <Navbar />
      <div className="flex flex-col items-center justify-center"></div>
    </div>
  );
}

export default App;
