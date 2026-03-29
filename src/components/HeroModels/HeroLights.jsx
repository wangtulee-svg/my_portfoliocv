import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
      {/* Ambient light - brightens everything evenly */}
      <ambientLight intensity={1.2} color="#ffffff" />
      
      {/* Main directional light - from front/side */}
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={1.5} 
        color="#fff5e6"
        castShadow
      />
      
      {/* Fill light from front right */}
      <directionalLight 
        position={[3, 4, 6]} 
        intensity={1.0} 
        color="#ffdd99"
      />
      
      {/* Fill light from left side */}
      <directionalLight 
        position={[-4, 5, 4]} 
        intensity={0.8} 
        color="#88aaff"
      />
      
      {/* Back rim light - highlights edges */}
      <pointLight 
        position={[0, 3, -5]} 
        intensity={0.8} 
        color="#ffaa88"
      />
      
      {/* Fill light from below */}
      <pointLight 
        position={[0, -2, 0]} 
        intensity={0.6} 
        color="#88aaff"
      />
      
      {/* Spotlight on the screen area */}
      <spotLight
        position={[0, 4, 3]}
        angle={0.5}
        penumbra={0.5}
        intensity={0.8}
        color="#ffffff"
      />
    </>
  );
};

export default HeroLights;