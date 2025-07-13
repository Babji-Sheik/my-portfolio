// src/Contact.jsx
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formData;
    const body = encodeURIComponent(`Email: ${email}\n\n${message}`);
    window.open(
      `mailto:sheikbabjims@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${body}`,
      '_blank'
    );
  };

  const inputStyle = {
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(255,255,255,0.05)',
    color: '#fff',
    fontSize: '1rem',
    width: '100%'
  };

  const contacts = [
    { icon: '📧', title: 'Email', info: 'sheikbabjims@gmail.com', link: 'mailto:sheikbabjims@gmail.com', label: 'Write me →' },
    { icon: '💬', title: 'WhatsApp', info: '+1 (660) 580-5863', link: 'https://wa.me/16605805863', label: 'Message me →' },
    { icon: '📞', title: 'Call', info: '+1 (660) 580-5863', link: 'tel:+16605805863', label: 'Call me →' }
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '4rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        gap: '2.5rem',
        width: '100%',
        boxSizing: 'border-box',
        scrollMarginTop: '100px',
        minHeight: '100vh'
      }}
    >
      <h1 style={{ fontSize: '2.5rem' }}>Get in touch</h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>Contact Me</p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1100px'
        }}
      >
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {contacts.map(({ icon, title, info, link, label }) => (
            <div
              key={title}
              style={{
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ fontSize: '2rem' }}>{icon}</div>
              <h4>{title}</h4>
              <p>{info}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#facc15', textDecoration: 'none' }}>
                {label}
              </a>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            minWidth: '250px'
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              padding: '1rem',
              borderRadius: '10px',
              background: '#1f1f1f',
              color: '#fff',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              width: '100%'
            }}
          >
            Send ✈️
          </button>
        </form>
      </div>
    </section>
  );
}
