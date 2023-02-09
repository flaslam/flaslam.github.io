import {
  BakeShadows,
  MeshReflectorMaterial,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
// import Vector3 from "three";
import EvaModel from "./models/EvaEdit";
import Desk from "./models/Desk";
import Model from "./models/DreamRoom";

import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import * as THREE from "three";

function Rig() {
  const strength = 0.05;

  useFrame((state) => {
    state.camera.position.lerp(
      {
        x: 0,
        y: -state.pointer.y / 4,
        z: state.pointer.x / 2,
      } as THREE.Vector3,
      strength
    );
    state.camera.lookAt(-1, 0, 0);
  });

  return <></>;
}

const Visual = () => {
  return (
    <div className="h-96 w-full">
      <Canvas shadows>
        <directionalLight intensity={0.5} position={[30, 4, 30]} />
        <PerspectiveCamera
          makeDefault
          position={[-0, 0, 0]}
          zoom={1}
          fov={30}
        />

        <ambientLight intensity={10} color="white" />
        <pointLight
          distance={10}
          position={[0, 0, 0]}
          intensity={0.5}
          castShadow
          // color="blue"
        />
        <pointLight
          distance={10}
          position={[0, 0, 0]}
          intensity={1}
          castShadow
          color="blue"
        />
        <Desk
          position={[-3.5, -1.5, 0]}
          rotation={[0, Math.PI, 0]}
          receiveShadow
          castShadow
        />
        <EffectComposer disableNormalPass>
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={8}
          />
        </EffectComposer>
        <BakeShadows />
        <Rig />
      </Canvas>
    </div>
  );
};

export default Visual;
