import {
  MeshReflectorMaterial,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
// import Vector3 from "three";
import EvaModel from "./models/EvaEdit";
import Model from "./models/DreamRoom";

import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";

// function Rig() {
//   useFrame((state) => {
//     // let newVec: Vector3 = [0, -state.pointer.y / 4, state.pointer.x / 2];
//     // let newVec = new THREE.Vector3(0, 4, 2);
//     // state.camera.position.lerp(new THREE.Vector3(newVec), 0.1);
//     // state.camera.position.lerp(
//     //   { x: 0, y: -state.pointer.y / 4, z: state.pointer.x / 2 },
//     //   0.1
//     // );
//     // state.camera.position.lerp(
//     //   { x: 0, y: -state.pointer.y / 4, z: state.pointer.x / 2 },
//     //   0.1
//     // );
//     // state.camera.lookAt(-1, 0, 0);
//     state.camera.lookAt(state.pointer.x, state.pointer.y, 0);
//   });
//   return <></>;
// }

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
        <EvaModel position={[0, -1.5, 0]} />
        <ambientLight intensity={1} color={"#b0a1ff"} />
        <pointLight position={[0, 20, 10]} intensity={1} />
      </Canvas>
    </div>
  );
};

// const Visual = () => {
//   return (
//     <div className="h-96 w-full bg-[#b0a1ff]">
//       <Canvas>
//         <OrbitControls />
//         {/* <OrthographicCamera
//           makeDefault
//           position={[1.5, 1.5, 1.5]}
//           zoom={100}
//           rotation={[30, 15, 0]}
//         /> */}
//         {/* <PerspectiveCamera
//           makeDefault
//           position={[2, 2, 3]}
//           // rotation={[0, 0, 0]}
//         /> */}

//         <Model position={[0, 0, 0]} />

//         <ambientLight intensity={1} color={"#b0a1ff"} />

//         <pointLight position={[0, 20, 10]} intensity={0.1} />
//         {/* <Rig /> */}
//       </Canvas>
//     </div>
//   );
// };

export default Visual;
