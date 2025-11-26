// src/App.jsx
import React from 'react';
import './App.css';
import 'devicon/devicon.min.css';

import UniverseCanvas from './UniverseCanvas';
import Navbar from './Navbar';
import Studies from './Studies';
import Technologies from './Technologies';
import Projects from './Projects';
import Experiences from './Experiences';
import Contact from './Contact';
import HeroIntro from './HeroIntro';
import Services from './Services';
import CursorGlow from './CursorGlow';
export default function App() {
  return (
    <div className="app-root">
      <CursorGlow/>
      <div className="background" />    {/* blue galaxy */}
      <UniverseCanvas />                {/* 3D stars */}

      <div className="app-content">     {/* foreground */}
        <Navbar />
        <HeroIntro/>
        <Services/>
        <Experiences />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

