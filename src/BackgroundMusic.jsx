// src/BackgroundMusic.jsx
import React, { useRef, useState } from 'react';

export default function BackgroundMusic() {// BackgroundMusic.jsx
// 

  const audioRef = useRef(new Audio('/universe-theme.mp3'));
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!playing) {
      audio.loop = true;
      audio.volume = 0.5;
      audio.play().catch(err => console.warn('Playback failed:', err));
    } else {
      audio.pause();
    }
    setPlaying(prev => !prev);
  };

  return (
    <button
      onClick={toggleMusic}
      style={{
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 100,
        padding: '10px 15px',
        background: 'rgba(0,0,0,0.5)',
        color: '#fff',
        border: '1px solid #fff',
        borderRadius: 5,
        cursor: 'pointer'
      }}
    >
      {playing ? 'Pause Music' : 'Play Music'}
    </button>
  );
}
