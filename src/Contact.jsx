// src/Contact.jsx
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) return;

    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.open(
      `mailto:sheikbabjims@gmail.com?subject=${encodeURIComponent(
        'Message from portfolio site'
      )}&body=${body}`,
      '_blank'
    );
  };

  const inputStyle = {
    padding: '0.9rem 1rem',
    borderRadius: '10px',
    border: '1px solid rgba(148,163,184,0.5)',
    background: 'rgba(15,23,42,0.95)',
    color: '#e5e7eb',
    fontSize: '0.95rem',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
  };

  const contacts = [
    {
      icon: <FiPhone size={22} />,
      label: 'Phone',
      value: '+1 (660) 580-5863',
      link: 'tel:+16605805863',
    },
    {
      icon: <FiMail size={22} />,
      label: 'Email',
      value: 'sheikbabjims@gmail.com',
      link: 'mailto:sheikbabjims@gmail.com',
    },
    {
      icon: <FiMessageCircle size={22} />,
      label: 'WhatsApp',
      value: '+1 (660) 580-5863',
      link: 'https://wa.me/16605805863',
    },
  ];

  return (
    <section
      id="contact"
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
        {/* heading */}
        <div style={{ textAlign: 'left', marginBottom: '2.8rem' }}>
          <p
            style={{
              margin: 0,
              fontSize: '2.95rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              opacity: 0.7,
            }}
          >
            Contact
          </p>
          <h2
            style={{
              margin: '0.4rem 0 0.6rem',
              fontSize: '2.6rem',
            }}
          >
            Let&apos;s work together
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: '1rem',
              opacity: 0.8,
              maxWidth: '520px',
            }}
          >
            Tell me a bit about your project, integration idea, or platform, and
            I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        {/* main layout */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
            alignItems: 'stretch',
            justifyContent: 'space-between',
          }}
        >
          {/* form card */}
          <div
            style={{
              flex: '1 1 350px',
              maxWidth: '650px',
              background: 'rgba(15,23,42,0.96)',
              borderRadius: '24px',
              padding: '2.2rem 2.1rem',
              border: '1px solid rgba(148,163,184,0.6)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.85)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ ...inputStyle, flex: '1 1 180px' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ ...inputStyle, flex: '1 1 180px' }}
                />
              </div>

              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: 'vertical' }}
              />

              <button
                type="submit"
                style={{
                  marginTop: '0.4rem',
                  padding: '0.95rem 1.4rem',
                  borderRadius: '999px',
                  background: 'white',
                  color: '#020617',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 18px rgba(255, 255, 255, 0.6)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow =
                    '0 0 26px rgba(225, 255, 0, 0.9)';
                    
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow =
                    '0 0 18px rgba(234, 255, 0, 0.6)';
                }}
              >
                <span>Send message</span>
              </button>
            </form>
          </div>

          {/* contact info column */}
          <div
            style={{
              flex: '0 1 260px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
              minWidth: '240px',
            }}
          >
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#e5e7eb',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.1rem 1.3rem',
                    borderRadius: '18px',
                    background: 'rgba(15,23,42,0.96)',
                    border: '1px solid rgba(148,163,184,0.6)',
                    transition: 'border-color 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#dbbe80ff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      'rgba(148,163,184,0.6)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '14px',
                      background: 'rgba(34,197,94,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffffff',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        opacity: 0.7,
                        marginBottom: '0.1rem',
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.98rem',
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
