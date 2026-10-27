import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  motionEnabled?: boolean;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ motionEnabled = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);

  useEffect(() => {
    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Detect mobile for particle scaling
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03070e, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Group for all dimensional objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Glass Prism
    const prismGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const prismMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x001524,
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.52,
      reflectivity: 0.75,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.95
    });
    const prismMesh = new THREE.Mesh(prismGeo, prismMat);
    mainGroup.add(prismMesh);

    // Subtle Wireframe Shell
    const wireGeo = new THREE.IcosahedronGeometry(1.48, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // 2. Turquoise Energy Rings
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.02, 32, 120);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00c2ff,
      emissiveIntensity: 2.2,
      roughness: 0.2,
      metalness: 0.8
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.75, 0.015, 32, 120);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x00e676,
      emissive: 0x00e676,
      emissiveIntensity: 1.8,
      roughness: 0.3,
      metalness: 0.7
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 3. Atmospheric Particles Field
    const particleCount = isMobile ? 120 : 320;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 12;
      scales[i / 3] = Math.random() * 0.04 + 0.015;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom Particle Canvas Texture
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 64;
    particleCanvas.height = 64;
    const ctx = particleCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(0, 229, 255, 1)');
      grad.addColorStop(0.3, 'rgba(0, 230, 118, 0.7)');
      grad.addColorStop(1, 'rgba(0, 229, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0x061124, 2.0);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 3.5, 20);
    cyanLight.position.set(4, 3, 5);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x00e676, 3.0, 20);
    emeraldLight.position.set(-4, -3, 3);
    scene.add(emeraldLight);

    const amberLight = new THREE.PointLight(0xffb300, 1.5, 15);
    amberLight.position.set(0, 4, -2);
    scene.add(amberLight);

    // Interactive Tracking
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Visibility change (pause loop when tab inactive)
    let isPageVisible = true;
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isPageVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();
      const speedMult = motionEnabled ? 1 : 0.05;

      // Smooth pointer interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group rotation and gentle floating
      prismMesh.rotation.x += 0.25 * delta * speedMult;
      prismMesh.rotation.y += 0.35 * delta * speedMult;
      wireMesh.rotation.x = prismMesh.rotation.x;
      wireMesh.rotation.y = prismMesh.rotation.y;

      ring1.rotation.z += 0.4 * delta * speedMult;
      ring1.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.6) * 0.15;

      ring2.rotation.z -= 0.3 * delta * speedMult;
      ring2.rotation.y = Math.PI / 4 + Math.cos(elapsedTime * 0.5) * 0.15;

      // Vertical drift with scroll
      const scrollOffset = scrollY * 0.0018;
      mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.15 - scrollOffset * 0.7;
      mainGroup.position.x = mouseX * 0.5;
      mainGroup.rotation.y = mouseX * 0.4 + scrollOffset * 0.3;
      mainGroup.rotation.x = -mouseY * 0.3;

      // Particle subtle upward motion
      const posArray = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < posArray.length; i += 3) {
        posArray[i] += 0.4 * delta * speedMult;
        if (posArray[i] > 8) {
          posArray[i] = -8;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Subtle light oscillation
      cyanLight.position.x = 4 + Math.sin(elapsedTime * 0.7) * 1.5;
      emeraldLight.position.y = -3 + Math.cos(elapsedTime * 0.8) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      prismGeo.dispose();
      prismMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, [motionEnabled]);

  return (
    <div
      ref={containerRef}
      id="three-background-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {/* Graceful Fallback if WebGL is unavailable */}
      {!hasWebGL && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 40%, rgba(0, 229, 255, 0.12) 0%, rgba(0, 230, 118, 0.08) 45%, transparent 70%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              boxShadow: '0 0 60px rgba(0, 229, 255, 0.15)',
              animation: 'subtlePulse 6s ease-in-out infinite'
            }}
          />
        </div>
      )}
    </div>
  );
};
