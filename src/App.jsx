import React from "react";
import { Home, About, Projects, Contact } from "./pages";
import { Gradient } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
