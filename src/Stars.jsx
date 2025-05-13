import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Stars() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 100 },
          size: { value: 1 },
          move: { enable: true, speed: 0.2 },
          opacity: { value: 0.5 },
        },
        background: { color: 'transparent' },
      }}
    />
  );
}

export default Stars;
