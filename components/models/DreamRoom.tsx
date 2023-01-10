import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import MeshTracked from "./hover-model";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Curtains: THREE.Mesh;
    Box: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Clock: THREE.Mesh;
    Vase: THREE.Mesh;
    PlantBranch: THREE.Mesh;
    PlantBranch001: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.Emit"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Main.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/DreamRoom.gltf") as GLTFResult;

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <group position={[0, 0.72, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.Emit"]}
        />
      </group>
      <MeshTracked
        geometry={nodes.Curtains.geometry}
        material={materials["Material.003"]}
        position={[-1.98, 2, 3]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        // scale={clicked ? 1.4 : 1.2}
      />
      <mesh
        geometry={nodes.Box.geometry}
        material={materials["Main.003"]}
        position={[1.67, 0, -0.5]}
        rotation={[Math.PI / 2, 0, 0.52]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[-1.99, 2, 2.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.7, 0.01]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.004"]}
        position={[-0.62, 0.72, -0.5]}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <MeshTracked
        geometry={nodes.Clock.geometry}
        material={materials.Material}
        position={[0, 1.81, -1]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Vase.geometry}
        material={materials.Material}
        position={[0.71, 0.72, -0.65]}
        scale={0.61}
      >
        <mesh
          geometry={nodes.PlantBranch.geometry}
          material={materials.Material}
          position={[0, 0.2, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.02}
        />
        <mesh
          geometry={nodes.PlantBranch001.geometry}
          material={materials.Material}
          position={[-0.02, 0.19, -0.01]}
          rotation={[1.5, 0.43, -1.4]}
          scale={0.02}
        />
      </mesh>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0.7, -0.5]}
        scale={[1, 0.02, 1]}
      />
    </group>
  );
}

useGLTF.preload("/models/DreamRoom.gltf");
