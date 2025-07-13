// src/SectionWrapper.jsx
import React from 'react';

export default function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      style={{
        padding: '4rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        color: '#fff'
      }}
    >
      {children}
    </section>
  );
}
