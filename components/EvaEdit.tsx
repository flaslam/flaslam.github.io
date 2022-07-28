import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoader } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Shinji_Hair: THREE.SkinnedMesh;
    Evangelion: THREE.Mesh;
    ground002: THREE.Mesh;
    ground003: THREE.Mesh;
    spine: THREE.Bone;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const texture = useLoader(
    THREE.TextureLoader,
    "/models/leopolds-dreams-1x.png"
  );
  const newMat = new THREE.MeshToonMaterial({ map: texture });

  const group = useRef<THREE.Group>(null);
  const { nodes } = useGLTF("/models/EvaEdit.gltf") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 1.56]} rotation={[-Math.PI, 0, -Math.PI]}>
        <primitive object={nodes.spine} />
        <skinnedMesh
          geometry={nodes.Shinji_Hair.geometry}
          material={newMat}
          skeleton={nodes.Shinji_Hair.skeleton}
        />
      </group>
      <mesh
        geometry={nodes.Evangelion.geometry}
        material={newMat}
        position={[0, 0, -1.89]}
        rotation={[0, 0.84, 0]}
        scale={[1, 0.81, 1]}
      />
      <mesh
        geometry={nodes.ground002.geometry}
        material={newMat}
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[4, 0.8, 4]}
      />
      <mesh
        geometry={nodes.ground003.geometry}
        material={newMat}
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[4, 0.8, 4]}
      />
    </group>
  );
}

useGLTF.preload("/models/EvaEdit.gltf");
