// src/Technologies.jsx
import React from 'react';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'JavaScript (ES6+)', 'C', 'C++', 'C#', 'Java']
  },
  {
    category: 'Frameworks / Libraries',
    skills: ['React.js', 'Node.js (Express)', 'Flask', 'Microsoft .NET']
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'XML', 'REST / JSON']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'SQL']
  },
  {
    category: 'Tools & Technologies',
    skills: ['Selenium', 'Git', 'Cloud Computing']
  },
  {
    category: 'Cloud Platforms',
    skills: ['AWS', 'GCP', 'Azure']
  },
  {
    category: 'Development Practices',
    skills: ['Agile (Scrum)', 'Data Structures', 'OO Design', 'Design Patterns', 'Unit Testing']
  },
  {
    category: 'AI / Machine Learning',
    skills: ['Machine Learning', 'AI Techniques', 'Object Detection']
  },
  {
    category: 'SAP Technologies',
    skills: ['SAP UI5', 'ABAP', 'OData Services']
  }
];

const styles = {
  section: {
    padding: '4rem 1rem',
    scrollMarginTop: '100px'
  },
  headerWrapper: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  headerTitle: {
    fontSize: '2.5rem',
    color: '#fff',
    margin: 0
  },
  headerSubtitle: {
    color: '#ccc',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #facc15',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default'
  },
  categoryTitle: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: '#fff'
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    lineHeight: 1.8,
    margin: 0
  },
  listItem: {
    color: '#fff',
    marginBottom: '0.5rem'
  }
};

export default function Technologies() {
  return (
    <section id="technologies" style={styles.section}>
      <div style={styles.headerWrapper}>
        <h1 style={styles.headerTitle}>My Skills</h1>
        <p style={styles.headerSubtitle}>Organized by Category</p>
      </div>
      <div style={styles.grid}>
        {skillCategories.map(({ category, skills }) => (
          <div
            key={category}
            style={styles.card}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(250,204,21,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
            }}
          >
            <h2 style={styles.categoryTitle}>{category}</h2>
            <ul style={styles.list}>
              {skills.map(skill => (
                <li key={skill} style={styles.listItem}>
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
