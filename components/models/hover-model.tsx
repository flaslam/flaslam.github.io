import { useState } from "react";

interface MeshTrackedProps {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  position: THREE.Vector3Tuple;
  rotation?: THREE.Vector3Tuple;
  scale?: THREE.Vector3Tuple | number;
}

const MeshTracked: React.FC<MeshTrackedProps> = ({
  geometry,
  material,
  position,
  rotation,
  scale,
}) => {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return null;

  // return (
  //   <mesh
  //     geometry={geometry}
  //     material={material}
  //     // material={material}
  //     position={position}
  //     rotation={rotation}
  //     scale={scale}
  //     // scale={hovered ? (scale ? [2, 0.2, 4] : 2) : scale ? scale : 1}
  //     onPointerOver={(event) => hover(true)}
  //     onPointerOut={(event) => hover(false)}
  //     onClick={(event) => click(!clicked)}
  //   >
  //     {/* <meshToonMaterial color={hovered ? "hotpink" : "indianred"} /> */}
  //   </mesh>
  // );
};

export default MeshTracked;
