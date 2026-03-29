import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function DesktopComputer({ screenImage, ...props }) {
  const groupRef = useRef();
  const { scene } = useGLTF('./models/programmer_desktop_3d_pc.glb');
  
  const defaultImage = screenImage || '/images/Mydesktop.png';

  useEffect(() => {
    console.log('🖥️ Creating realistic screen...');
    
    // Load the main screen image
    const screenTexture = new THREE.TextureLoader().load(
      defaultImage,
      () => console.log('✅ Screen image loaded'),
      undefined,
      (err) => console.error('❌ Failed to load screen image:', err)
    );
    
    // Make texture sharp
    screenTexture.wrapS = THREE.ClampToEdgeWrapping;
    screenTexture.wrapT = THREE.ClampToEdgeWrapping;
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;
    
    // Target the monitor screen mesh
    const screenMeshName = "MY_SCREEN_MY_SCREEN_0";
    let screenFound = false;
    
    scene.traverse((child) => {
      if (child.isMesh && child.name === screenMeshName) {
        // Create a CLEAR, NATURAL screen material (like real monitor)
        child.material = new THREE.MeshStandardMaterial({
          map: screenTexture,
          color: '#ffffff',           // Pure white - no color tint
          roughness: 0.08,            // Very smooth glass surface
          metalness: 0.02,            // Low metalness (screen is not metal)
          emissive: '#000000',        // No emissive color (no tint)
          emissiveIntensity: 0,       // No glow - just natural
          clearcoat: 0.8,             // Glass-like coating
          clearcoatRoughness: 0.05,   // Very smooth
          reflectivity: 0.15          // Subtle reflection
        });
        console.log(`📺 Applied clear screen to: ${child.name}`);
        screenFound = true;
      }
    });
    
    if (!screenFound) {
      console.warn(`⚠️ Screen mesh "${screenMeshName}" not found!`);
    }
  }, [scene, defaultImage]);

  return <primitive ref={groupRef} object={scene} {...props} />;
}

useGLTF.preload('/models/programmer_desktop_3d_pc.glb');