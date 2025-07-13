// src/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import themeUrl from './assets/universe-theme.mp3';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Studies', href: '#studies' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 999,
    background: 'transparent',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
    transition: 'top 0.3s ease-in-out'
  },
  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    whiteSpace: 'nowrap'
  },
  menuButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  linksContainer: isMobile => ({
    display: isMobile ? 'block' : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: '1.5rem',
    width: isMobile ? '100%' : 'auto',
    marginTop: isMobile ? '1rem' : 0,
    flexWrap: 'wrap'
  }),
  ul: isMobile => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
    whiteSpace: 'nowrap'
  }),
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem'
  },
  musicButton: {
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid #fff',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  prompt: {
    position: 'fixed',
    top: '4.5rem',
    right: '1.5rem',
    background: 'rgba(0,0,0,0.8)',
    color: '#fff',
    padding: '0.75rem 1.25rem',
    borderRadius: '6px',
    fontSize: '0.95rem',
    zIndex: 998,
    border: '1px solid rgba(255,255,255,0.2)'
  }
};

export default function Navbar() {
  console.log('Navbar audio URL →', themeUrl);
  const audioRef = useRef(new Audio(themeUrl));
  const [playing, setPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!playing) {
      audio.loop = true;
      audio.volume = 0.4;
      audio.play().catch(err => console.warn('Autoplay blocked:', err));
    } else {
      audio.pause();
    }
    setPlaying(prev => !prev);
    setShowPrompt(false);
  };

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const isMobile = window.innerWidth < 768;

  return (
    <>
      <nav style={{ ...styles.nav, top: visible ? 0 : '-100px' }}>
        <div style={styles.logo}>BABJI</div>

        {isMobile && (
          <button onClick={toggleMenu} style={styles.menuButton}>
            ☰
          </button>
        )}

        {(!isMobile || menuOpen) && (
          <div style={styles.linksContainer(isMobile)}>
            <ul style={styles.ul(isMobile)}>
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} style={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button onClick={toggleMusic} style={styles.musicButton}>
              {playing ? 'Pause Music' : '🎵 Play Music'}
            </button>
          </div>
        )}
      </nav>

      {showPrompt && (
        <div style={styles.prompt}>
          🎧 For a beautiful experience, click “Play Music”
        </div>
      )}
    </>
  );
}
