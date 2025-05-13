import React, { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const audioRef = useRef(new Audio("/universe-theme.mp3"));
  const [playing, setPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!playing) {
      audio.loop = true;
      audio.volume = 0.4;
      audio.play().catch((err) => console.warn("Autoplay blocked:", err));
    } else {
      audio.pause();
    }
    setPlaying(!playing);
    setShowPrompt(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPrompt(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current || currentScrollY < 50);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = window.innerWidth < 768;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Studies", href: "#studies" },
    { label: "Expertise", href: "#expertise" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: visible ? 0 : "-100px",
          left: 0,
          width: "100vw",
          maxWidth: "100%",
          zIndex: 999,
          background: "transparent",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          boxSizing: "border-box",
          flexWrap: "wrap",
          transition: "top 0.3s ease-in-out"
        }}
      >
        <div style={{ color: "white", fontWeight: "bold", fontSize: "1.5rem", whiteSpace: "nowrap" }}>
          BABJI
        </div>

        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}

        {(isMobile ? isMobileMenuOpen : true) && (
          <div
            style={{
              display: isMobile ? "block" : "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "1.5rem",
              width: isMobile ? "100%" : "auto",
              marginTop: isMobile ? "1rem" : 0,
              flexWrap: "wrap"
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                listStyle: "none",
                gap: "1.5rem",
                margin: 0,
                padding: 0,
                whiteSpace: "nowrap"
              }}
            >
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: isMobile ? "1rem" : 0 }}>
              <button
                onClick={toggleMusic}
                style={{
                  padding: "8px 16px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid white",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  whiteSpace: "nowrap"
                }}
              >
                {playing ? "Pause Music" : "🎵 Play Music"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {showPrompt && (
        <div
          style={{
            position: "fixed",
            top: "4.5rem",
            right: "1.5rem",
            background: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "0.75rem 1.25rem",
            borderRadius: "6px",
            fontSize: "0.95rem",
            zIndex: 998,
            border: "1px solid rgba(255,255,255,0.2)"
          }}
        >
          🎧 For a beautiful experience, click "Play Music"
        </div>
      )}
    </>
  );
}
