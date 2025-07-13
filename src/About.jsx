// src/About.jsx
import React from 'react';
import devImage from './assets/dev-illustration.png';
import SectionWrapper from './SectionWrapper';

import resumeUrl from './assets/Babji_Sheik.docx';
export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        padding: '0 1rem',
        background: 'transparent',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        scrollMarginTop: '100px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        <img
          src={devImage}
          alt="Developer illustration"
          style={{
            width: '300px',
            maxWidth: '100%',
            borderRadius: '1rem',
            objectFit: 'contain'
          }}
        />

        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            Highly experienced in Web Development and Machine Learning.
            <br />
            Master’s in Computer Science, University of Central Missouri.
          </p>

          <div style={{ textAlign: 'left', margin: '0 auto', lineHeight: 2 }}>
            <p><strong>Name:</strong> Babji Sheik</p>
            <p><strong>City:</strong> Kansas City, MO, USA</p>
            <p><strong>Email:</strong> sheikbabjims@gmail.com</p>
            <p><strong>Phone:</strong> +1 660-580-5863</p>
          </div>

          <p style={{ marginTop: '1.5rem', fontWeight: 'bold', color: 'gold' }}>
            20+ Projects Completed
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Babji_Sheik_Resume.docx"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '12px 24px',
              backgroundColor: 'gold',
              color: '#000',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>

      <SectionWrapper />
    </section>
  );
}
