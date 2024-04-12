import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { OrbitControls, OrthographicCamera, Stars } from "@react-three/drei";
import { useTheme } from "next-themes";
import Model from "./models/EvaEdit";

const Visual: React.FC<{ fullHeight?: boolean }> = ({ fullHeight }) => {
  const { theme } = useTheme();

  return (
    <div
      // className={`${
      //   fullHeight ? "h-full" : "h-60 md:h-96"
      // } w-full dark:bg-dark`}
      className="h-full"
    >
      <Canvas>
        <OrbitControls
          target={[0, 2.5, 0]}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI}
          rotation={[0, Math.PI, 0]}
          enableZoom={false}
        />

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

        {/* Effects */}
        {theme === "dark" && (
          <EffectComposer disableNormalPass>
            <Bloom
              luminanceThreshold={0}
              mipmapBlur
              luminanceSmoothing={0.0}
              intensity={1}
            />
            <Stars speed={5} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
};

export default Visual;
