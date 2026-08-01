import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AccentColor } from '../types';

interface Hero3DCanvasProps {
  accentColor: AccentColor;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ accentColor }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color choices
    const primaryHex = accentColor === 'violet' ? 0x8b5cf6 : accentColor === 'emerald' ? 0x10b981 : accentColor === 'amber' ? 0xf59e0b : 0x06b6d4;
    const secondaryHex = accentColor === 'violet' ? 0xec4899 : accentColor === 'emerald' ? 0x06b6d4 : accentColor === 'amber' ? 0xef4444 : 0x3b82f6;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(primaryHex, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(secondaryHex, 2, 20);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Group
    const coreGroup = new THREE.Group();

    // Central Core Shape - Dodecahedron
    const coreGeo = new THREE.DodecahedronGeometry(1.6, 0);
    const coreMat = new THREE.MeshPhongMaterial({
      color: primaryHex,
      emissive: primaryHex,
      emissiveIntensity: 0.25,
      shininess: 90,
      wireframe: false,
      flatShading: true,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Core Wireframe overlay
    const wireGeo = new THREE.DodecahedronGeometry(1.65, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Ring 1 - Inner Orbit
    const ringGeo1 = new THREE.TorusGeometry(2.4, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: secondaryHex,
      metalness: 0.8,
      roughness: 0.2,
      emissive: secondaryHex,
      emissiveIntensity: 0.3
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    coreGroup.add(ringMesh1);

    // Ring 2 - Outer Orbit
    const ringGeo2 = new THREE.TorusGeometry(3.1, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: primaryHex,
      metalness: 0.9,
      roughness: 0.1,
      emissive: primaryHex,
      emissiveIntensity: 0.2
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    coreGroup.add(ringMesh2);

    // Floating micro node spheres
    const nodeGroup = new THREE.Group();
    const nodeCount = 12;
    for (let i = 0; i < nodeCount; i++) {
      const nodeGeo = new THREE.SphereGeometry(0.08, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.8 + (i % 2) * 0.4;
      nodeMesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.sin(i) * 0.5)
      );
      nodeGroup.add(nodeMesh);
    }
    coreGroup.add(nodeGroup);

    scene.add(coreGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Rotation speeds
      coreMesh.rotation.y = time * 0.4;
      coreMesh.rotation.x = time * 0.2;
      wireMesh.rotation.y = -time * 0.3;

      ringMesh1.rotation.z = time * 0.6;
      ringMesh1.rotation.x = Math.PI / 3 + Math.sin(time * 0.8) * 0.2;

      ringMesh2.rotation.z = -time * 0.5;
      ringMesh2.rotation.y = Math.PI / 4 + Math.cos(time * 0.7) * 0.2;

      nodeGroup.rotation.z = time * 0.3;

      // Mouse interactive tilt
      coreGroup.rotation.x += (mouseY * 0.8 - coreGroup.rotation.x) * 0.08;
      coreGroup.rotation.y += (mouseX * 0.8 - coreGroup.rotation.y) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, [accentColor]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] sm:min-h-[380px] md:min-h-[440px] relative flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
    />
  );
};
