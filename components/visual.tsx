import {
  Box,
  OrbitControls,
  Plane,
  RoundedBox,
  Sphere,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Visual = () => {
  return (
    <div>
      <Canvas>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={25}
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshToonMaterial attach="material" />
        </mesh>
        {/* <Box>
          <meshToonMaterial attach="material" />
        </Box> */}
      </Canvas>
    </div>
  );
};

export default Visual;
