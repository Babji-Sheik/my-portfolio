// src/Studies.jsx
import React from 'react';

const timeline = [
  { period: '2023–2025', title: 'Master of Science', subtitle: 'Computer Science, University of Central Missouri' },
  { period: '2021–2023', title: 'Software Consultant', subtitle: 'Wipro Technologies' },
  { period: '2017–2021', title: 'Bachelor of Technology', subtitle: 'Computer Science, SRKR, India' }
];

const sectionStyle = {
  minHeight: '100vh',
  padding: '4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#fff',
  scrollMarginTop: '100px'
};

const cardStyle = {
  background: 'rgba(0,0,0,0.7)',
  padding: '2rem',
  borderRadius: '10px',
  width: '300px'
};

export default function Studies() {
  return (
    <section id="studies" style={sectionStyle}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Education & Experience</h1>
      <p style={{ maxWidth: '600px', marginBottom: '3rem', fontSize: '1.1rem' }}>
        A blend of learning and working that shaped my journey.
      </p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {timeline.map(({ period, title, subtitle }) => (
          <div key={period} style={cardStyle}>
            <h2 style={{ color: '#facc15', marginBottom: '0.5rem' }}>{period}</h2>
            <h3 style={{ marginBottom: '0.25rem' }}>{title}</h3>
            <p style={{ margin: 0 }}>{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
