import Stars from './Stars';
import React, { useState } from "react";

import './App.css'; // Ensure this imports the CSS with the .background class
import UniverseCanvas from "./UniverseCanvas";
import Hero from './Hero';
import Navbar from "./Navbar";
import About from './About';
import Studies from './Studies';
import Expertise from './Expertise';
import Technologies from './Technologies';
import Projects from './Projects';
import Experience from './Experiences';
import Contact from './Contact';
function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <div className="background"></div>
      <Stars />
      <UniverseCanvas />
      <Hero/>
      <Navbar/>
      <About />
      <Studies />
      <Expertise />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
      {/* Add more sections as needed */}
      <div className="content">
        {/* Your main content here */}
      </div>
    </div>
  );
}

export default App;
