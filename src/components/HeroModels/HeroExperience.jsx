import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { DesktopComputer } from './DesktopComputer.jsx'
import HeroLights from './HeroLights.jsx'
import Particles from './Particles.jsx'
import * as THREE from 'three'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (  
      <Canvas 
        camera={{ position: [-5, 1.8, 10], fov: 45 }}
        gl={{ 
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
      >
         <OrbitControls 
           enablePan={false}
           enableZoom={true}
           autoRotate={false}
           maxDistance={20}
           minDistance={6}
         />

         <HeroLights />
         <Particles count={150} />
         
         {/* Screen glow lights */}
         <pointLight position={[0.5, 1.2, 1.2]} intensity={0.8} color="#88aaff" />
         <pointLight position={[-0.3, 1, 1.5]} intensity={0.5} color="#ffaa88" />
         <spotLight position={[0, 1.5, 2]} angle={0.3} penumbra={0.5} intensity={0.6} color="#ffffff" />
         
         <group 
           scale={isMobile ? 0.3 : 0.6} 
           position={[0, -1.5, 0]}
           rotation={[0, -Math.PI / 4, 0]}
         >
           <DesktopComputer 
             screenImage="./images/Mydesktop.png"
           />
         </group>
      </Canvas>   
  )
}

export default HeroExperience