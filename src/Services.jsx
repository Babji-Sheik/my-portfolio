import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const CYAN = '#4fd1ff';

const services = [
  {
    id: '01',
    title: 'AI, LLMs & Practical Automation',
    desc: `I build useful AI features that make everyday work easier — things like smart chatbots, text summarizers, search tools, and automations. I focus on simple, reliable implementations that fit naturally into existing systems.`,
    tags: ['Chatbots', 'RAG', 'Embeddings', 'OpenAI'],
  },
  {
    id: '02',
    title: 'API, SDK & System Integrations',
    desc: `I help systems talk to each other. Whether it’s Salesforce, HubSpot, SAP, or custom software, I create clean APIs and lightweight SDKs so data moves smoothly without manual effort.`,
    tags: ['Salesforce', 'SAP', 'HubSpot', 'API Work'],
  },
  {
    id: '03',
    title: 'Cloud, DevOps & Kubernetes Setup',
    desc: `I set up and maintain the behind-the-scenes infrastructure — servers, containers, deployments, and monitoring. My goal is to keep things running fast, stable, and easy to update.`,
    tags: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'],
  },
  {
    id: '04',
    title: 'Web & Mobile App Development',
    desc: `I build simple and clean web and mobile interfaces using React and React Native. I focus on smooth performance, easy navigation, and a consistent experience across devices.`,
    tags: ['React', 'React Native', 'Expo', 'UI Work'],
  },
];


const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12 },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '6rem 1.5rem 4.5rem',
        color: '#f5f9ff',
        position: 'relative',
        zIndex: 2,
        scrollMarginTop: '100px',
      }}
    >
      <div style={{ maxWidth: 1150, margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="services-heading"
          style={{ marginBottom: '3.2rem' }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.95rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              opacity: 0.7,
            }}
          >
            What I do
          </p>
          <h2
            style={{
              fontSize: '2.5rem',
              margin: '0.35rem 0 0.75rem',
            }}
          >
            Services &amp; Focus Areas
          </h2>
          <div
            style={{
              width: 80,
              height: 3,
              background:
                'linear-gradient(90deg, #ffd36a 0%, #4fd1ff 50%, transparent 100%)',
            }}
          />

          {/* asteroid / shooting star */}
        </motion.div>


        {/* Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: '0 22px 60px rgba(0,0,0,0.75)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
              }}
              style={{
                padding: '2.4rem 2.1rem 2.2rem',
                background:
                  'linear-gradient(135deg, rgba(0,0,0,0.85), rgba(12,20,40,0.95))',
                borderRadius: 22,
                border: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* soft radial glow in corner */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-40%',
                  background:
                    'radial-gradient(circle at 120% -10%, rgba(79,209,255,0.18), transparent 60%)',
                  opacity: 0.9,
                  pointerEvents: 'none',
                }}
              />

              {/* content wrapper so glow stays behind */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* top row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.8rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,249,255,0.7)',
                    }}
                  >
                    {service.id}
                  </div>

                  {/* custom arrow link */}
                  <a
                    href={service.link || '#'}
                    className="service-arrow"
                    onClick={(e) => {
                      if (!service.link) e.preventDefault();
                    }}
                  >
                    <span className="service-arrow-icon" />
                  </a>
                </div>

                {/* title */}
                <h3
                  style={{
                    fontSize: '1.9rem',
                    margin: 0,
                    marginBottom: '1rem',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                {/* description */}
                <p
                  style={{
                    margin: 0,
                    fontSize: '1rem',
                    lineHeight: 1.85,
                    color: 'rgba(227, 238, 247, 0.9)',
                    marginBottom: '1.4rem',
                  }}
                >
                  {service.desc}
                </p>

                {/* tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.55rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.82rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 999,
                        border: '1px solid rgba(255,255,255,0.18)',
                        background: 'rgba(3, 10, 25, 0.9)',
                        opacity: 0.9,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* subtle divider */}
                <div
                  style={{
                    height: 1,
                    width: '100%',
                    marginTop: '1.4rem',
                    background:
                      'linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.03))',
                  }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <SectionWrapper />
    </section>
  );
}
