// src/UniverseCanvas.jsx
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';

function SparkleGalaxy() {
  const ref = useRef();
  const count = 10000;
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const colors = useMemo(() => new Float32Array(count * 3), [count]);

  // initialize positions and colors once
  useMemo(() => {
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 1000;
      positions[i + 1] = (Math.random() - 0.5) * 1000;
      positions[i + 2] = (Math.random() - 0.5) * 1000;

      const c = new THREE.Color().setHSL(Math.random(), 0.8, 0.9);
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
    }
  }, [positions, colors]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
      ref.current.rotation.x += 0.0003;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial transparent size={0.9} sizeAttenuation depthWrite={false} vertexColors />
    </Points>
  );
}

function InteractiveGlowFog() {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.material.opacity = 0.04 + Math.sin(Date.now() * 0.003) * 0.015;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -80]}>
      <sphereGeometry args={[650, 32, 32]} />
      <meshBasicMaterial color="#220044" transparent opacity={0.05} />
    </mesh>
  );
}

function CameraMotion() {
  const { camera } = useThree();
  const targetZ = useRef(camera.position.z);

  useEffect(() => {
    const onScroll = () => {
      targetZ.current = 100 - window.scrollY * 0.1;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useFrame(() => {
    camera.position.z += (targetZ.current - camera.position.z) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

const wrapperStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  backgroundImage: "url('/galaxy-bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const canvasStyle = {
  width: '100%',
  height: '100%',
  background: 'transparent',
  pointerEvents: 'none'
};

export default function UniverseCanvas() {
  return (
    <div style={wrapperStyle}>
      <Canvas camera={{ position: [0, 0, 100], fov: 75 }} style={canvasStyle}>
        <ambientLight intensity={0.9} />
        <CameraMotion />
        <InteractiveGlowFog />
        <SparkleGalaxy />
        <Preload all />
      </Canvas>
    </div>
  );
}
