import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Load the Earth model using useGLTF
const Earth = () => {
 const earth = useGLTF("./planet/scene.gltf");
// const earth = useGLTF('./planet/scene.gltf');



  // Return the 3D model with scale and position settings
  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

// The canvas where the Earth model and controls are rendered
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"  // Renders on demand, saving resources
      dpr={[1, 2]}  // Device pixel ratio for better resolution
      gl={{ preserveDrawingBuffer: true }}  // Preserves buffer for screenshots
      camera={{
        fov: 45,  // Field of view
        near: 0.1,  // Near clipping plane
        far: 200,  // Far clipping plane
        position: [-4, 3, 6],  // Camera's initial position
      }}
    >
      {/* Suspense will wait for the model to load */}
      <Suspense fallback={null}>
        OrbitControls adds camera interaction (rotation/zoom)
        <OrbitControls
          autoRotate  // Automatically rotates the model
          enableZoom={false}  // Disables zoom
          maxPolarAngle={Math.PI / 2}  // Restrict vertical rotation
          minPolarAngle={Math.PI / 2}  // Restrict vertical rotation
        />
        {/* Render the Earth model */}
        <Earth />
        Preload all models and textures for smooth rendering
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
