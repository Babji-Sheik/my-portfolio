// src/Experiences.jsx
import React from 'react';

const timeline = [
  {
    icon: '🎓',
    period: '2023–2025',
    title: 'Master of Science',
    subtitle: 'Computer Science, University of Central Missouri',
    details: [
      'Designed scalable systems with advanced algorithms and compiler optimizations.',
      'Built cloud-native apps on AWS, Azure, and GCP using Docker and serverless patterns.',
      'Developed Python backends (Flask, FastAPI) integrating RESTful APIs and async processing.',
      'Applied AI/ML (TensorFlow, scikit-learn) in face recognition and trading-bot projects.',
      'Engineered secure software with OS internals knowledge and multi-threading patterns.',
      'Optimized databases (SQL indexing, NoSQL) and built React+Tailwind healthcare app.',
      'Implemented CI/CD pipelines, automated tests, and QA workflows in Agile teams.'
    ]
  },
  {
    icon: '💼',
    period: '2021–2023',
    title: 'Software Consultant',
    subtitle: 'Wipro Technologies',
    details: [
      'Integrated SAP UI5 apps with OData and backend modules for real-time data flow.',
      'Extended Fiori apps via component architecture without altering core code.',
      'Applied MVC patterns, OAuth2/JWT for secure, concurrent enterprise systems.',
      'Built AI/ML prototypes in TensorFlow for audio analysis and algorithmic trading.',
      'Optimized MySQL/MongoDB schemas with indexing and query tuning.',
      'Automated tests and CI/CD, improved deployment reliability with rollback strategies.',
      'Led Agile sprints, resolved critical bugs, and improved system performance.'
    ]
  },
  {
    icon: '🏫',
    period: '2017–2021',
    title: 'Bachelor of Technology',
    subtitle: 'Computer Science, SRKR, India',
    details: [
      'Mastered C, C++, Java, and Python fundamentals in OS, DBMS, and networking.',
      'Built academic projects on OS concepts and competitive coding platforms.',
      'Completed capstone ML project for predictive analytics.',
      'Learned full-stack web dev with HTML/CSS/JS and PHP/Flask backends.',
      'Studied compiler design, theory of computation, and data structures.',
      'Designed normalized databases in MySQL and Oracle.',
      'Participated in IoT, blockchain, and AI hackathons; graduated with distinction.'
    ]
  }
];

export default function Experiences() {
  return (
    <section
      id="experience"
      style={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        gap: '2rem',
        scrollMarginTop: '100px',
        minHeight: '100vh'
      }}
    >
      <h1 style={{ fontSize: '2.5rem' }}>My Journey</h1>
      <p style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
        Here’s a quick snapshot of my academic and professional milestones.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center'
        }}
      >
        {timeline.map(({ icon, period, title, subtitle, details }) => (
          <div
            key={period}
            style={{
              background: 'rgba(0,0,0,0.7)',
              padding: '1.5rem',
              borderRadius: '10px',
              width: '300px',
              textAlign: 'left'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
            <h2 style={{ color: '#facc15' }}>{period}</h2>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <ul>
              {details.map(item => (
                <li key={item} style={{ marginBottom: '0.5rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
