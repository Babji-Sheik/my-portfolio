// src/App.jsx
import React from 'react';
import './App.css';
import Stars from './Stars';
import UniverseCanvas from './UniverseCanvas';
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Studies from './Studies';
import Expertise from './Expertise';
import Technologies from './Technologies';
import Projects from './Projects';
import Experiences from './Experiences';
import Contact from './Contact';
export default function App() {
  return (
    <>
      <div className="background" />
      <Stars />
      <UniverseCanvas />
      <Hero />
      <Navbar />
      <About />
      <Studies />
      <Expertise />
      <Technologies />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
}
