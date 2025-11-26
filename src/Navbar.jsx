// src/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import themeUrl from './assets/universe-theme.mp3';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
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
    transition: 'top 0.3s ease-in-out',
  },
  logo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  linksContainer: (isMobile) => ({
    display: isMobile ? 'block' : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: '1.5rem',
    width: isMobile ? '100%' : 'auto',
    marginTop: isMobile ? '1rem' : 0,
    flexWrap: 'wrap',
  }),
  ul: (isMobile) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
    whiteSpace: 'nowrap',
  }),
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  musicButton: {
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid #fff',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
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
    border: '1px solid rgba(255,255,255,0.2)',
  },
  hireButton: {
    padding: '10px 22px',
    background: '#ffbb00ff',
    color: '#000',
    borderRadius: '999px',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '1rem',
    letterSpacing: '0.5px',
    transition: 'all 0.25s ease',
    boxShadow: '0 0 12px rgba(255, 221, 0, 0.45)',
    whiteSpace: 'nowrap',
  },
};

export default function Navbar() {
  console.log('Navbar audio URL →', themeUrl);

  const audioRef = useRef(new Audio(themeUrl));
  const [playing, setPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const lastScrollY = useRef(0);

  // Hide prompt after 10s
  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 50);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mobile / desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!playing) {
      audio.loop = true;
      audio.volume = 0.4;
      audio
        .play()
        .catch((err) => console.warn('Autoplay blocked:', err));
    } else {
      audio.pause();
    }
    setPlaying((prev) => !prev);
    setShowPrompt(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToHero = () => {
    const heroEl =
      document.getElementById('hero-intro') ||
      document.getElementById('hero') ||
      document.getElementById('home');

    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav style={{ ...styles.nav, top: visible ? 0 : '-100px' }}>
        {/* Logo → scroll to hero */}
        <div
          style={styles.logo}
          onClick={scrollToHero}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') scrollToHero();
          }}
        >
          BABJI
        </div>

        {isMobile && (
          <button onClick={toggleMenu} style={styles.menuButton}>
            ☰
          </button>
        )}

        {(!isMobile || menuOpen) && (
          <div style={styles.linksContainer(isMobile)}>
            <ul style={styles.ul(isMobile)}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}

              {/* Hire Me pill button */}
              <li>
                <a
                  href="#contact"
                  style={{
                    ...styles.hireButton,
                    ...(isMobile ? {} : { cursor: 'pointer' }),
                  }}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, {
                      background: '#2bff00ff',
                      boxShadow: '0 0 18px rgba(238, 255, 0, 0.75)',
                      transform: 'translateY(-2px)',
                    });
                  }}
                  onMouseLeave={(e) => {
                    Object.assign(e.target.style, {
                      background: '#ffc400ff',
                      boxShadow: '0 0 12px rgba(255, 157, 0, 0.45)',
                      transform: 'none',
                    });
                  }}
                >
                  Hire me
                </a>
              </li>
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
