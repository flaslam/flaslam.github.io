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
      <group position={[0, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={4}>
        <primitive object={nodes.spine} />
        <skinnedMesh
          geometry={nodes.Shinji_Hair.geometry}
          material={newMat}
          skeleton={nodes.Shinji_Hair.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/EvaEdit.gltf");
