// src/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Age, Gender, and Ethnicity Prediction Using Face Recognition',
    description:
      'Developed a face recognition system using deep learning techniques to predict age, gender, and ethnicity from facial images. Supports real-time predictions for demographic studies.',
    technologies: 'Python, OpenCV, TensorFlow, Keras, Machine Learning'
  },
  {
    title: 'Real-time Dashboard',
    description:
      'Created a comprehensive data visualization dashboard integrating multiple sources for real-time insights, featuring interactive charts and graphs.',
    technologies: 'Flask, JavaScript, D3.js'
  },
  {
    title: 'Small-Scale Business Website',
    description:
      'Built a user-friendly website tailored for small businesses to establish an online presence and engage customers.',
    technologies: 'MERN stack (MongoDB, Express, React, Node), Repl.it'
  },
  {
    title: 'Sound Processing Research',
    description:
      'Analyzed vocal biomarkers in MND patients using DSP: spectral analysis, onset detection, and pitch tracking for early detection models.',
    technologies: 'Python, Aubio, NumPy, SciPy, Matplotlib, Pandas, Librosa'
  },
  {
    title: 'Algorithmic Trading Bots',
    description:
      'Deployed automated trading bots with real-time scraping, signal generation, and order execution on DEXs, integrating liquidity checks and volatility filters.',
    technologies: 'Python, Selenium, AsyncIO, WebSockets, Pandas, DexScreener API, Docker, Cron'
  },
  {
    title: 'Web Scraping Platform',
    description:
      'Modular scraper extracting structured data from dynamic sites, supporting filters and exports. Uses headless browsers and async requests to boost speed.',
    technologies: 'Flask, Selenium, BeautifulSoup, Requests, Pandas, Jinja2, Bootstrap, Docker'
  },
  {
    title: 'YouTube-based Music Player',
    description:
      'Web-based music player leveraging YouTube API for streaming, playlists, client-side caching, and theme toggles.',
    technologies: 'React, Tailwind CSS, YouTube Data API v3, Redux, Firebase'
  }
];

const sectionStyle = {
  padding: '4rem 1rem',
  color: '#fff',
  textAlign: 'center',
  scrollMarginTop: '100px'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '1.5rem',
  justifyItems: 'center'
};

const cardStyle = {
  background: 'rgba(0,0,0,0.7)',
  padding: '1.5rem',
  borderRadius: '10px',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'left'
};

const titleStyle = { color: '#facc15', fontSize: '1.25rem', marginBottom: '0.5rem' };
const descStyle  = { margin: '1rem 0', fontSize: '0.95rem' };
const techStyle  = { fontStyle: 'italic', fontSize: '0.85rem', color: '#ccc' };

export default function Projects() {
  return (
    <section id="projects" style={sectionStyle}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Projects</h1>
      <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
        A selection of key projects showcasing my development, research, and automation experience.
      </p>
      <div style={gridStyle}>
        {projects.map(({ title, description, technologies }) => (
          <div key={title} style={cardStyle}>
            <h3 style={titleStyle}>{title}</h3>
            <p style={descStyle}>{description}</p>
            <p style={techStyle}>Technologies: {technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
