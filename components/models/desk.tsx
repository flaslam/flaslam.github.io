import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Desk: THREE.Mesh;
    Torus: THREE.Mesh;
    Torus_1: THREE.Mesh;
    Speaker: THREE.Mesh;
    Speaker001: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Monstera_Leaf: THREE.Mesh;
    Plant_Pot: THREE.Mesh;
    Plant_Stem: THREE.Mesh;
    Floor_Lamp001: THREE.Mesh;
    Floor_Lamp_Sphere: THREE.Mesh;
    Backpack: THREE.Mesh;
    Book: THREE.Mesh;
    Book001: THREE.Mesh;
    Book009: THREE.Mesh;
    Book002: THREE.Mesh;
    Book010: THREE.Mesh;
    Book003: THREE.Mesh;
    Book011: THREE.Mesh;
    Book004: THREE.Mesh;
    Book005: THREE.Mesh;
    Book006: THREE.Mesh;
    Book007: THREE.Mesh;
    Book008: THREE.Mesh;
    Bookshelf_Legs: THREE.Mesh;
    Bookshelf_Shelves: THREE.Mesh;
    Box: THREE.Mesh;
    Box001: THREE.Mesh;
    Box002: THREE.Mesh;
    Chair: THREE.Mesh;
    Clock: THREE.Mesh;
    Converse: THREE.Mesh;
    Converse001: THREE.Mesh;
    Frame_Rectangle: THREE.Mesh;
    Frame_Rectangle001: THREE.Mesh;
    Frame_Square: THREE.Mesh;
    Frame_Square001: THREE.Mesh;
    Frame_Square002: THREE.Mesh;
    Keyboard_Base: THREE.Mesh;
    Black_Keys_1: THREE.Mesh;
    Black_Keys_2: THREE.Mesh;
    Black_Keys_3: THREE.Mesh;
    Black_Keys_4: THREE.Mesh;
    Keys: THREE.Mesh;
    Knobs: THREE.Mesh;
    Pads: THREE.Mesh;
    Cube035: THREE.Mesh;
    Cube035_1: THREE.Mesh;
    Milk_Carton: THREE.Mesh;
    Text: THREE.Mesh;
    Mug: THREE.Mesh;
    Peace_LIly: THREE.Mesh;
    Peace_LIly_Particle: THREE.Mesh;
    Cube048: THREE.Mesh;
    Cube048_1: THREE.Mesh;
    Pothos: THREE.Mesh;
    Pothos_Leaves: THREE.Mesh;
    Record_Player: THREE.Mesh;
    Side_Table: THREE.Mesh;
    Side_Table_Legs: THREE.Mesh;
    Table_Lamp: THREE.Mesh;
    Cube036: THREE.Mesh;
    Cube036_1: THREE.Mesh;
    Peace_Lily_Pot: THREE.Mesh;
    Speaker002: THREE.Mesh;
    Rug: THREE.Mesh;
  };
  materials: {
    Main: THREE.MeshStandardMaterial;
    MainEmit: THREE.MeshStandardMaterial;
    ["Room Walls"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
    ["Room Floor"]: THREE.MeshStandardMaterial;
    Text: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/desk.glb") as GLTFResult;

  return (
    <group ref={group!} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desk.geometry}
        material={materials.Main}
        position={[0, 0.7, -1.26]}
      />
      <group position={[0, 0.7, -1.26]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus_1.geometry}
          material={materials.MainEmit}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker.geometry}
        material={materials.Main}
        position={[-0.95, 0.95, -1.42]}
        rotation={[0, 0.05, 0]}
        scale={[0.15, 0.22, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker001.geometry}
        material={materials.Main}
        position={[0.97, 0.95, -1.39]}
        rotation={[0, -0.11, 0]}
        scale={[0.15, 0.22, 0.21]}
      />
      <group position={[-2, 2, 0]} scale={2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Room Walls"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials["Room Floor"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monstera_Leaf.geometry}
        material={materials.Main}
        position={[9.25, 4.99, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_Pot.geometry}
        material={materials.Main}
        position={[0.97, 1.3, -1.44]}
        scale={0.12}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plant_Stem.geometry}
          material={materials.Main}
          position={[0, 0.63, 0]}
          rotation={[0, 0.78, 0]}
          scale={8.44}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor_Lamp001.geometry}
        material={materials.MainEmit}
        position={[1.34, 0, 1.67]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor_Lamp_Sphere.geometry}
          material={materials.Main}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Backpack.geometry}
        material={materials.Main}
        position={[1.25, 0.02, 0.59]}
        rotation={[2.63, 1.08, -2.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book.geometry}
        material={materials.Main}
        position={[-0.36, 1.51, 1.53]}
        rotation={[0, 0, -0.1]}
        scale={[0.22, 0.27, 0.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book001.geometry}
        material={materials.Main}
        position={[-0.14, 1.51, 1.43]}
        rotation={[0, -0.1, -Math.PI / 2]}
        scale={[0.24, 0.29, 0.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book009.geometry}
        material={materials.Main}
        position={[-1.75, 0.67, -1.49]}
        rotation={[0, -0.41, -Math.PI / 2]}
        scale={[0.18, 0.21, 0.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book002.geometry}
        material={materials.Main}
        position={[-0.2, 1.63, 1.43]}
        rotation={[0, -0.04, -Math.PI / 2]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book010.geometry}
        material={materials.Main}
        position={[-1.79, 0.76, -1.5]}
        rotation={[0, -0.34, -Math.PI / 2]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book003.geometry}
        material={materials.Main}
        position={[-0.17, 1.56, 1.44]}
        rotation={[0, -0.08, -Math.PI / 2]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book011.geometry}
        material={materials.Main}
        position={[-1.77, 0.7, -1.49]}
        rotation={[0, -0.62, -Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book004.geometry}
        material={materials.Main}
        position={[-0.48, 1.5, 1.5]}
        rotation={[0, 0, -0.01]}
        scale={0.22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book005.geometry}
        material={materials.Main}
        position={[-0.41, 1.5, 1.5]}
        rotation={[0, 0, -0.1]}
        scale={0.22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book006.geometry}
        material={materials.Main}
        position={[-0.53, 1.5, 1.5]}
        rotation={[0, 0, -0.01]}
        scale={0.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book007.geometry}
        material={materials.Main}
        position={[-0.59, 1.5, 1.5]}
        rotation={[0, 0, -0.01]}
        scale={0.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book008.geometry}
        material={materials.Main}
        position={[-0.64, 1.5, 1.53]}
        rotation={[0, 0, -0.01]}
        scale={0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bookshelf_Legs.geometry}
        material={materials.Main}
        position={[-0.35, 0, 1.51]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bookshelf_Shelves.geometry}
          material={materials.Main}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box.geometry}
        material={materials.Main}
        position={[1.65, 0, 0.86]}
        rotation={[Math.PI / 2, 0, -1.23]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box001.geometry}
        material={materials.Main}
        position={[1.65, 0.4, 0.86]}
        rotation={[1.57, 0, -2.81]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box002.geometry}
        material={materials.Main}
        position={[1.65, 0, 0.29]}
        rotation={[Math.PI / 2, 0, -0.09]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair.geometry}
        material={materials.Main}
        position={[0, 0, -0.48]}
        rotation={[0, -0.35, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clock.geometry}
        material={materials.Main}
        position={[-0.01, 2.31, -2]}
        scale={0.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Converse.geometry}
        material={materials.Main}
        position={[0, 2, 1.51]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Converse001.geometry}
        material={materials.Main}
        position={[-0.15, 2, 1.51]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Rectangle.geometry}
        material={materials.Main}
        position={[-1.27, 1.68, 2]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Rectangle001.geometry}
        material={materials.Main}
        position={[2.23, 0.8, 0.8]}
        rotation={[-Math.PI / 2, -1.31, -Math.PI / 2]}
        scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Square.geometry}
        material={materials.Main}
        position={[0, 1.65, -2]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Square001.geometry}
        material={materials.Main}
        position={[0.75, 1.65, -2]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Frame_Square002.geometry}
        material={materials.Main}
        position={[-0.74, 1.65, -2]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keyboard_Base.geometry}
        material={materials.Main}
        position={[0.51, 0.73, -1.05]}
        rotation={[0, -0.64, 0]}
        scale={1.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Black_Keys_1.geometry}
          material={materials.Main}
          position={[-0.13, 0.03, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Black_Keys_2.geometry}
          material={materials.Main}
          position={[-0.07, 0.03, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Black_Keys_3.geometry}
          material={materials.Main}
          position={[0.01, 0.03, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Black_Keys_4.geometry}
          material={materials.Main}
          position={[0.07, 0.03, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keys.geometry}
          material={materials.Main}
          position={[-0.14, 0.03, 0.08]}
          scale={[2, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Knobs.geometry}
          material={materials.Main}
          position={[0.05, 0.05, -0.07]}
          scale={0.08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pads.geometry}
          material={materials.Main}
          position={[-0.09, 0.04, -0.07]}
          scale={[2.53, 0.25, 2.53]}
        />
      </mesh>
      <group
        position={[-0.51, 0.5, 1.46]}
        rotation={[-Math.PI, -0.22, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035_1.geometry}
          material={materials.MainEmit}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Milk_Carton.geometry}
        material={materials.Main}
        position={[-0.67, 1, 1.62]}
        rotation={[-0.03, 0.45, 0.01]}
        scale={0}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials.Text}
          position={[0.22, 9.54, -17.16]}
          rotation={[1.6, 0, Math.PI]}
          scale={17.36}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mug.geometry}
        material={materials.Main}
        position={[-0.66, 0.72, -1.13]}
        rotation={[0, -1, 0]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Peace_LIly.geometry}
        material={materials.Main}
        position={[2.25, 0.8, -0.82]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Peace_LIly_Particle.geometry}
          material={materials.Main}
          position={[-0.23, 3.59, 0.08]}
        />
      </mesh>
      <group
        position={[-0.47, 0.73, -0.95]}
        rotation={[Math.PI, 1.07, -Math.PI / 2]}
        scale={0.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_1.geometry}
          material={materials.MainEmit}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pothos.geometry}
        material={materials.Main}
        position={[-1.4, 1.98, 1.67]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pothos_Leaves.geometry}
          material={materials.Main}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Record_Player.geometry}
        material={materials.Main}
        position={[-0.34, 1, 1.49]}
        scale={[0.18, 0.03, 0.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Side_Table.geometry}
        material={materials.Main}
        position={[-1.75, 0.05, -1.48]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Side_Table_Legs.geometry}
          material={materials.Main}
          position={[0.01, -0.01, -1.12]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.33}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Lamp.geometry}
        material={materials.Main}
        position={[-0.61, 0.74, -1.53]}
        rotation={[-Math.PI, 1.15, -Math.PI]}
        scale={0.01}
      />
      <group
        position={[-1.73, 0.64, -1.48]}
        rotation={[0, -0.44, 0]}
        scale={[0.16, 0.12, 0.16]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_1.geometry}
          material={materials.MainEmit}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Peace_Lily_Pot.geometry}
        material={materials.Main}
        position={[2.25, 0.8, -0.82]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Speaker002.geometry}
        material={materials.Main}
        position={[2.28, 0.8, 1.16]}
        scale={0.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rug.geometry}
        material={materials.Main}
        position={[-1.98, 0, 0.33]}
      />
    </group>
  );
}

useGLTF.preload("/models/desk.glb");
