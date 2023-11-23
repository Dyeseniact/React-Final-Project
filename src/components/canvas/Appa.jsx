import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Appa = () => {
  const appa = useGLTF("./cute_appa/scene.gltf");

  return (
    <mesh>
      <hemisphereLight />
      
      <primitive object={appa.scene} scale={0.7} position-y={1} rotation-y={0} />
    </mesh>
    
  );
};

const AppaCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Appa />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AppaCanvas;
