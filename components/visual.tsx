import {
  BakeShadows,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useFBX,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { useTheme } from "next-themes";
import * as THREE from "three";

import Model from "./models/EvaEdit";

const Visual = () => {
  const { theme } = useTheme();

  const Scene = () => {
    let fbx = useFBX("/models/model.fbx");
    return (
      <mesh rotation={[0, Math.PI, 0]} receiveShadow>
        <primitive object={fbx} scale={0.01} />;
      </mesh>
    );
  };

  return (
    <div className="h-96 w-full dark:bg-dark">
      <Canvas shadows>
        {/* Cameras */}
        <OrbitControls
          target={[0, 2.5, 0]}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI}
          rotation={[0, Math.PI, 0]}
          enableZoom={false}
        />
        {/* <PerspectiveCamera
          makeDefault
          position={[20, 10, 20]}
          zoom={0.5}
          fov={15}
          matrixWorldAutoUpdate={undefined}
          getObjectsByProperty={undefined}
        /> */}

        {/* Lighting */}
        {/* <directionalLight intensity={0.5} position={[3, 5, 3]} castShadow />
        <ambientLight intensity={0.4} color="white" />
        <pointLight
          distance={0}
          position={[-5, 5, -5]}
          intensity={1}
          castShadow
          color="blue"
        /> */}

        {/* Effects */}
        {theme === "dark" && (
          <EffectComposer disableNormalPass>
            <Bloom
              luminanceThreshold={0}
              mipmapBlur
              luminanceSmoothing={0.0}
              intensity={1}
            />
          </EffectComposer>
        )}

        {/* Helpers */}
        <BakeShadows />

        {/* Models */}
        {/* <Scene /> */}
        {/* <Model /> */}

        {/* Eva setup */}
        <OrthographicCamera
          makeDefault
          position={[0, 5, 11]}
          zoom={27}
          rotation={[31, 0, 0]}
          matrixWorldAutoUpdate={undefined}
          getObjectsByProperty={undefined}
        />
        <Model position={[0, 0.6, 0]} />
        <ambientLight intensity={1} color={"#b0a1ff"} />
        <pointLight position={[0, 20, 10]} intensity={1} />
      </Canvas>
    </div>
  );
};

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

  return null;
}

export default Visual;
