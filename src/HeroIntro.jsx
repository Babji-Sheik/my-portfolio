// src/HeroIntro.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import devImage from './assets/pic.png';
import resumeUrl from './assets/Babji_Sheik.docx';

// theme colors
const GOLD = '#ffd36a';
const CYAN = '#4fd1ff';

const buttonStyle = {
  padding: '14px 28px',
  borderRadius: 6,
  border: '1px solid rgba(255,255,255,0.6)',
  color: '#f5f9ff',
  textDecoration: 'none',
  backgroundColor: 'rgba(0,0,0,0.35)',
  cursor: 'pointer',
  fontSize: '1.05rem',
};

function Stat({ label, value, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2800;
    const startTime = performance.now();
    const easeOutQuad = (t) => t * (2 - t);

    const step = (now) => {
      const raw = (now - startTime) / duration;
      const progress = Math.min(raw, 1);
      const eased = easeOutQuad(progress);
      const current = Math.floor(eased * value);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [value]);

  return (
    <div style={{ minWidth: 150, textAlign: 'center' }}>
      <div style={{ fontSize: '2.9rem', fontWeight: 700, color: '#f5f9ff' }}>
        {count}
        {suffix}
      </div>
      <div style={{ marginTop: 4, fontSize: '1.05rem', opacity: 0.8 }}>
        {label}
      </div>
    </div>
  );
}

export default function HeroIntro() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 1.5rem 3rem',
        color: '#f5f9ff',
        position: 'relative',
        zIndex: 2,
        scrollMarginTop: '100px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
        }}
      >
        {/* left */}
        <div
          style={{
            flex: '1 1 600px',
            minWidth: 480,
            maxWidth: 760,
          }}
        >
          

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              fontSize: '4rem',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Hello, I&apos;m
            <br />
            <span
              style={{
                color: GOLD,
                textShadow: '0 0 14px rgba(255, 211, 106, 0.55)',
              }}
            >
              Babji Sheik
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{
              marginTop: '1rem',
              fontSize: '1.45rem',
              fontWeight: 400,
              color: '#d0e4ff',
            }}
          >
            Senior Software &amp; Platform Engineer · DevOps &amp; Integration
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            style={{
              marginTop: '1.4rem',
              maxWidth: 680,
              fontSize: '1.15rem',
              lineHeight: 1.9,
              color: '#e3eef7ff',
            }}
          >
            I engineer automation-driven systems that unify AI/LLMs, cloud
            platforms, and enterprise CRM workflows. My experience spans
            Kubernetes, Docker, Zapier, n8n, and CI/CD pipelines, combined with
            deep integration across Salesforce, HubSpot, SAP, and AWS-backed data
            engines like PostgreSQL and Elasticsearch. I specialize in building
            reliable, intelligent, and highly connected platforms that automate
            customer journeys and power modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            style={{
              marginTop: '1.4rem',
              fontSize: '1rem',
              lineHeight: 1.9,
              opacity: 0.9,
            }}
          >
            <div>
              <strong>City:</strong> Kansas City, MO, USA
            </div>
            <div>
              <strong>Email:</strong> sheikbabjims@gmail.com
            </div>
            <div>
              <strong>Phone:</strong> +1 660-580-5863
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            style={{
              marginTop: '2rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Babji_Sheik_Resume.docx"
              style={{ ...buttonStyle, borderColor: CYAN }}
            >
              Download Resume
            </a>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginLeft: '0.5rem',
              }}
            >
              <a
                href="https://github.com/Babji-Sheik"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#f5f9ff' }}
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/babji-sheik"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: CYAN }}
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* right */}
        {/* right */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.0, delay: 0.4 }}
  style={{
    flex: '1 1 320px',     // was 280px
    minWidth: 300,         // was 260
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <div
    style={{
      width: 440,          // 🔼 was 260
      height: 440,         // 🔼 was 260
      borderRadius: '50%',
      border: `2px solid ${CYAN}`,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      boxShadow: '0 0 50px rgba(79, 209, 255, 0.45)', // optional stronger glow
      backgroundColor: 'rgba(0,0,0,0.45)',
    }}
  >
    <img
      src={devImage}
      alt="Babji Sheik"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'scale(1.05)',
      }}
    />
  </div>
</motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.4 }}
        style={{
          maxWidth: '900px',
          margin: '3.2rem auto 0',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2.5rem',
        }}
      >
        <Stat label="Years of experience" value={5} suffix="+" />
        <Stat label="Projects completed" value={20} suffix="+" />
        <Stat label="Technologies used" value={16} suffix="+" />
        <Stat label="Code commits" value={150} />
      </motion.div>

      <SectionWrapper />
    </section>
  );
}
