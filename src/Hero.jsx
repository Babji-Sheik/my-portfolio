// src/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import resumeUrl from './assets/Babji_Sheik.docx';
const linkStyle = {
  padding: '12px 24px',
  border: '1px solid #fff',
  borderRadius: 6,
  color: '#fff',
  textDecoration: 'none',
  backgroundColor: 'rgba(255,255,255,0.1)'
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '0 1rem',
        position: 'relative',
        zIndex: 2,
        scrollMarginTop: '100px'
      }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}
      >
        Babji Sheik
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: '1.75rem', fontWeight: 300, marginBottom: '1.5rem' }}
      >
        Software Developer · Innovator · Tech Explorer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ maxWidth: '700px', fontSize: '1.1rem', lineHeight: 1.8 }}
      >
        I craft dynamic applications blending cutting-edge front-end magic with solid back-end logic.
        Passionate about full-stack engineering, real-time systems, and bringing ideas to life through code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ marginTop: '2rem' }}
      >
        <a href="#about" style={{ ...linkStyle, marginRight: 15 }}>
          About Me
        </a>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download="Babji_Sheik_Resume.docx"
          style={linkStyle}
        >
          Download Resume
        </a>
      </motion.div>

      <SectionWrapper />
    </section>
  );
}
