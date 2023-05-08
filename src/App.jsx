import React, { useState, useEffect } from "react";
import { Home, About, Projects, Contact } from "./pages";
import { Navbar } from "./components";
import { Link, Element } from "react-scroll";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact className="bg-neutral" />
      </Element>
    </div>
  );
}

export default App;
