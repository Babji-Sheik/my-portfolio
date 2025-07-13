// src/Stars.jsx
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Stars() {
  const particlesInit = async main => {
    await loadFull(main);
  };

  const options = {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
      number: { value: 100 },
      size: { value: 1 },
      move: { enable: true, speed: 0.2 },
      opacity: { value: 0.5 }
    },
    background: { color: 'transparent' }
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
}
