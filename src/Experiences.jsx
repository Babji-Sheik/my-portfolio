// src/Experiences.jsx
import React from 'react';
import {
  FiBriefcase,
  FiBookOpen,
  FiCode,
  FiUser,
} from 'react-icons/fi';

const entries = [
  {
    period: '2025 – Present',
    title: 'Independent Software & Integration Engineer',
    place: 'Freelance · Open Source · Personal Platforms',
    icon: <FiUser size={22} color='white'/>,
    type: 'Freelance / Indie',
    points: [
      'Building small production-ready tools around AI, automation, and integrations.',
      'Owning end-to-end design of APIs, workflows, and deployments for self-directed work.',
      'Prototyping CRM and platform features using Salesforce, HubSpot, and event-driven patterns.',
    ],
    tags: ['AI', 'Integrations', 'APIs'],
  },
  {
    period: '2023 – 2025',
    title: 'M.S. Computer Science',
    place: 'University of Central Missouri',
    icon: <FiBookOpen size={22} color='white'/>,
    type: 'Graduate Studies',
    points: [
      'Focused on backend systems, API development, and cloud-native design.',
      'Built hands-on projects using Python/Node.js, PostgreSQL, Docker, and AWS.',
      'Applied AI and ML techniques in coursework and projects, including model integration into real apps.',
    ],
    tags: ['Backend', 'Cloud', 'PostgreSQL', 'AI'],
  },
  {
    period: '2021 – 2023',
    title: 'Software Consultant',
    place: 'Wipro Technologies',
    icon: <FiBriefcase size={22}  color='white'/>,
    type: 'Full-time',
    points: [
      'Developed and maintained REST/GraphQL APIs and internal SDKs for enterprise clients.',
      'Integrated Salesforce, SAP, HubSpot, and other platforms into existing business workflows.',
      'Collaborated on AI-assisted prototypes and used automation to streamline internal processes.',
    ],
    tags: ['APIs', 'SAP', 'HubSpot', 'Kubernetes', 'AI'],
  },
  {
    period: '2020 – 2021',
    title: 'Software Engineer Intern',
    place: 'Cognizant Technology Solutions (CTS)',
    icon: <FiCode size={22} color='white'/>,
    type: 'Internship',
    points: [
      'Supported backend development for internal integration workflows.',
      'Strengthened fundamentals in Python, JavaScript, and database modeling.',
      'Learned debugging, documentation, and real-world engineering practices.',
    ],
    tags: ['Backend', 'Internship', 'Foundations'],
  },
];

export default function Experiences() {
  return (
    <section
      id="experience"
      style={{
        padding: '5rem 1.5rem 4rem',
        minHeight: '100vh',
        scrollMarginTop: '100px',
        color: '#f9fafb',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: 'left',
            marginBottom: '2.6rem',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.95rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              opacity: 0.7,
            }}
          >
            Professional Journey
          </p>

          <h2
            style={{
              margin: '0.4rem 0 0.6rem',
              fontSize: '2.6rem',
            }}
          >
            How I&apos;ve Been Growing
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: '1rem',
              opacity: 0.8,
              maxWidth: '560px',
            }}
          >
            From internship to consulting, grad school, and independent engineering —
            here’s the path that shaped my work in AI, cloud, and integrations.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'space-between',
          }}
        >
          {entries.map((entry) => (
            <div
              key={entry.period}
              style={{
                flex: '1 1 340px',
                maxWidth: '540px',
                background: 'rgba(3,7,18,0.92)',
                borderRadius: '24px',
                padding: '2.1rem 2rem',
                border: '1px solid rgba(148,163,184,0.5)',
                boxShadow: '0 22px 55px rgba(0,0,0,0.85)',
                backdropFilter: 'blur(10px)',
                transition:
                  'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.9)';
                e.currentTarget.style.borderColor = 'rgba(253, 253, 253, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 22px 55px rgba(0,0,0,0.85)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
              }}
            >
              {/* Top Section */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.1rem',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: '999px',
                      background: 'rgba(34,197,94,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00ff95',
                    }}
                  >
                    {entry.icon}
                  </div>

                  <div
                    style={{
                      fontSize: '1rem',
                      opacity: 0.85,
                    }}
                  >
                    {entry.period}
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '999px',
                    border: '1px solid rgba(148,163,184,0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    opacity: 0.8,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {entry.type}
                </div>
              </div>

              {/* Title + place */}
              <h3
                style={{
                  margin: 0,
                  fontSize: '1.35rem',
                  marginBottom: '0.3rem',
                }}
              >
                {entry.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: '1rem',
                  opacity: 0.75,
                  marginBottom: '0.85rem',
                }}
              >
                {entry.place}
              </p>

              {/* Bullet points */}
              <ul
                style={{
                  listStyle: 'disc',
                  paddingLeft: '1.2rem',
                  margin: 0,
                  marginBottom: '1rem',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  opacity: 0.9,
                }}
              >
                {entry.points.map((point) => (
                  <li key={point} style={{ marginBottom: '0.35rem' }}>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.45rem',
                  marginTop: '0.4rem',
                }}
              >
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.78rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '999px',
                      border: '1px solid rgba(148,163,184,0.7)',
                      background: 'rgba(15,23,42,0.9)',
                      opacity: 0.9,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
