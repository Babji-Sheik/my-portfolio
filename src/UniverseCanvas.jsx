import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

// ✨ Floating Stars
function SparkleGalaxy() {
  const ref = useRef();
  const count = 10000;
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const colors = useMemo(() => new Float32Array(count * 3), [count]);

  for (let i = 0; i < count * 3; i += 3) {
    const x = (Math.random() - 0.5) * 1000;
    const y = (Math.random() - 0.5) * 1000;
    const z = (Math.random() - 0.5) * 1000;
    positions[i] = x;
    positions[i + 1] = y;
    positions[i + 2] = z;

    const color = new THREE.Color();
    color.setHSL(Math.random(), 0.8, 0.9);
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

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

// 🌫️ Static Fog Shader
function InteractiveGlowFog() {
  const fogRef = useRef();
  useFrame(() => {
    if (fogRef.current) {
      fogRef.current.material.opacity = 0.04 + Math.sin(Date.now() * 0.003) * 0.015;
    }
  });

  return (
    <mesh ref={fogRef} position={[0, 0, -80]}>
      <sphereGeometry args={[650, 32, 32]} />
      <meshBasicMaterial color="#220044" transparent opacity={0.05} />
    </mesh>
  );
}

// 🎥 Camera Motion on Scroll (no zoom)
function CameraMotion() {
  const { camera } = useThree();
  const targetZ = useRef(camera.position.z);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || 0;
      targetZ.current = 100 - scrollY * 0.1;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame(() => {
    camera.position.z += (targetZ.current - camera.position.z) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// 🌌 Main Full-Page Background Scene
export default function UniverseCanvas() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: -1, // Important: Push it completely behind everything
        backgroundImage: "url('/galaxy-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 100], fov: 75 }}
        style={{
          height: "100%",
          width: "100%",
          background: "transparent",
          pointerEvents: "none" // Still allow elements above to interact
        }}
      >
        <ambientLight intensity={0.9} />
        <CameraMotion />
        <InteractiveGlowFog />
        <SparkleGalaxy />
        <Preload all />
      </Canvas>
    </div>
  );
}
