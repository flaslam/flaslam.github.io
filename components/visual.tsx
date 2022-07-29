import { OrbitControls, OrthographicCamera, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Model from "./EvaEdit";
// import Model from "./EvaShinji";

const Visual = () => {
  return (
    <div className="h-96 w-full">
      <Canvas>
        <OrthographicCamera
          makeDefault
          position={[0, 5, 11]}
          zoom={27}
          rotation={[31, 0, 0]}
        />
        {/* <OrthographicCamera makeDefault position={[10, 5, 3]} zoom={27} /> */}

        {/* <OrbitControls
          autoRotate={true}
          autoRotateSpeed={3}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          // maxZoom={70}
          // minZoom={27}
          enabled={false}
        /> */}
        <Model position={[0, -1.5, 0]} />

        <ambientLight intensity={1} color={"#b0a1ff"} />
        <pointLight position={[0, 20, 10]} intensity={1} />
        {/* <Sparkles scale={10} size={2} color={"#6dbcb9"} /> */}
      </Canvas>
    </div>
  );
};

export default Visual;
