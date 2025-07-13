// src/Showcase.jsx
import React from 'react';

const linkStyle = {
  padding: '10px 20px',
  border: '1px solid #fff',
  borderRadius: '5px',
  color: '#fff',
  textDecoration: 'none',
  backgroundColor: 'rgba(255,255,255,0.1)',
  marginRight: '15px'
};

export default function Showcase() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '25vh',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: '#fff',
        zIndex: 2
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
        Babji Sheik
      </h1>
      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: 300,
          marginBottom: '1rem'
        }}
      >
        Software Developer & Creative Technologist
      </h2>
      <p
        style={{
          maxWidth: '600px',
          margin: '0 auto 1.5rem',
          fontSize: '1rem',
          lineHeight: 1.6
        }}
      >
        Welcome to my universe — where code meets creativity. I build
        interactive experiences, powerful backend systems, and elegant
        frontend designs.
      </p>
      <div>
        <a href="#projects" style={linkStyle}>
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...linkStyle, marginRight: 0 }}
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
