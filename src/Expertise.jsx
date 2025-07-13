// src/Expertise.jsx
import React from 'react';
import webIcon from './assets/webdeveloper.jpeg';
import appIcon from './assets/appdeveloper.jpeg';
import detectionIcon from './assets/imagedetect.jpeg';
import automateIcon from './assets/automate.jpeg';
import dataIcon from './assets/dataanalytics.jpeg';

const expertiseItems = [
  { title: 'Web Development', icon: webIcon },
  { title: 'Application Development', icon: appIcon },
  { title: 'Object Detection', icon: detectionIcon },
  { title: 'Automation / Scripting', icon: automateIcon },
  { title: 'Data Analysis', icon: dataIcon }
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      style={{
        padding: '1rem',
        textAlign: 'center',
        color: '#fff',
        scrollMarginTop: '100px'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Expertise</h1>
      <p style={{ marginBottom: '3rem', fontSize: '1.05rem', color: '#aaa' }}>
        Web/App Developer & Machine Learning Engineer with 2+ years of experience
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          justifyItems: 'center'
        }}
      >
        {expertiseItems.map(({ title, icon }) => (
          <div
            key={title}
            style={{
              background: 'rgba(0,0,0,0.6)',
              padding: '2rem 1.5rem',
              borderRadius: '10px',
              maxWidth: '300px',
              width: '100%',
              transition: 'transform 0.3s ease'
            }}
          >
            <img
              src={icon}
              alt={title}
              style={{
                width: '60px',
                marginBottom: '1rem',
                filter: 'brightness(1.2)'
              }}
            />
            <h3 style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>
              {title.toUpperCase()}
            </h3>
            <div
              style={{
                height: '2px',
                width: '30px',
                backgroundColor: '#facc15',
                margin: '1rem auto 0'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
