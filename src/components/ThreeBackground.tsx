import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AccentColor } from '../types';

interface ThreeBackgroundProps {
  accentColor: AccentColor;
  density?: 'normal' | 'high';
}

const COLOR_SCHEMES: Record<AccentColor, { primary: number; secondary: number; bg: string }> = {
  cyan: {
    primary: 0x06b6d4, // cyan-500
    secondary: 0x3b82f6, // blue-500
    bg: '#030712'
  },
  violet: {
    primary: 0x8b5cf6, // purple-500
    secondary: 0xec4899, // pink-500
    bg: '#05030e'
  },
  emerald: {
    primary: 0x10b981, // emerald-500
    secondary: 0x06b6d4, // cyan-500
    bg: '#020b08'
  },
  amber: {
    primary: 0xf59e0b, // amber-500
    secondary: 0xef4444, // red-500
    bg: '#0c0802'
  }
};

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ accentColor }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle cosmos setup
    const particleCount = window.innerWidth < 768 ? 400 : 900;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      scales[i] = Math.random() * 0.8 + 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const currentColors = COLOR_SCHEMES[accentColor];

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(currentColors.primary),
      size: 0.35,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Floating 3D Geometric Objects
    const group = new THREE.Group();

    // Wireframe Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(currentColors.primary),
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-14, 6, -5);
    group.add(icoMesh);

    // Wireframe Torus Knot
    const torusGeo = new THREE.TorusKnotGeometry(3, 0.7, 80, 16);
    const torusMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(currentColors.secondary),
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(16, -6, -8);
    group.add(torusMesh);

    // Wireframe Octahedron
    const octaGeo = new THREE.OctahedronGeometry(2.8, 0);
    const octaMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(currentColors.primary),
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(10, 10, -12);
    group.add(octaMesh);

    scene.add(group);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0012;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0012;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate group & camera slightly
      group.rotation.x = elapsedTime * 0.1 + targetY * 1.2;
      group.rotation.y = elapsedTime * 0.15 + targetX * 1.2;

      // Individual shapes wobble/floating
      icoMesh.rotation.x = elapsedTime * 0.2;
      icoMesh.rotation.y = elapsedTime * 0.3;
      icoMesh.position.y = 6 + Math.sin(elapsedTime * 0.8) * 0.8;

      torusMesh.rotation.x = elapsedTime * 0.15;
      torusMesh.rotation.z = elapsedTime * 0.2;
      torusMesh.position.y = -6 + Math.cos(elapsedTime * 0.7) * 0.8;

      octaMesh.rotation.y = elapsedTime * 0.4;

      // Wave effect on particles
      const posAttr = geometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        posAttr.setZ(i, Math.sin(elapsedTime + x * 0.1 + y * 0.1) * 1.5);
      }
      posAttr.needsUpdate = true;

      camera.position.x += (targetX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-targetY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      renderer.dispose();
    };
  }, [accentColor]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-1000"
    />
  );
};
