import { useEffect, useState } from "react";
import { Game, games } from "../../types/games";
import { config } from "../../config";
import Image from "next/image";
import Back from "../../components/back";
import { NextPage } from "next";
import MainLayout from "../../components/layouts/main";
import { motion } from "framer-motion";
import { PuffLoader } from "react-spinners";

interface GameProps {
  game: string;
}

const Game: NextPage<GameProps> = (props) => {
  const [project, setProject] = useState<Game | null>(null);

  // On component mount
  useEffect(() => {
    // Find which project we are on
    const findProject = () => {
      for (const item of games) {
        if (item.directory === props.game) {
          setProject(item);
          return;
        }
      }
    };

    findProject();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout title={project ? project.name : null}>
      <div>
        {/* Loading until page displays */}
        {!project ? (
          <div className="container mx-auto flex flex-col items-center">
            <PuffLoader />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, translateY: -75 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            {/* Background image */}
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: `url(${config.IMG_DIR}${project.directory}/bg.jpg)`,
              }}
            >
              {/* White background overlay */}
              <div className="bg-white bg-opacity-80 py-12 px-6 md:px-12">
                {/* Main content */}
                <div className="container mx-auto max-w-screen-lg">
                  <div className="mb-4 lg:mb-0">
                    <Back>Back to games</Back>
                  </div>
                  <div className="flex flex-col gap-6 md:flex-row md:gap-4">
                    <div className="flex items-center md:basis-1/2">
                      {/* Left side content */}
                      <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-medium">{project.name}</h1>
                        <p>{project.description}</p>
                        <div>
                          <span className="font-medium">Tools — </span>{" "}
                          {project.tools}
                        </div>
                        {!project.abouts ? null : (
                          <div>
                            <h3 className="text-xl font-medium">About</h3>
                            <ul>
                              {project.abouts.map((item, index) => (
                                <li key={index} className="ml-4 list-disc">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-center px-2 md:basis-1/2">
                      <div className="w-full md:p-6">
                        <Image
                          src={`${config.IMG_DIR}${project.directory}/title.jpg`}
                          alt={project.name}
                          width="200"
                          height="200"
                          objectFit="cover"
                          layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto my-12 flex max-w-screen-lg flex-col gap-12 px-4">
              {!project.videos
                ? null
                : [...Array(project.videos)].map((item, index) => {
                    return (
                      <div key={index}>
                        <video
                          autoPlay
                          muted
                          loop
                          style={{ clipPath: "inset(1px 1px)" }}
                          playsInline
                        >
                          <source
                            src={`${config.IMG_DIR}${project.directory}/${index}.mp4`}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    );
                  })}

              {!project.screenshots
                ? null
                : [...Array(project.screenshots)].map((item, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={`${config.IMG_DIR}${project.directory}/${index}.jpg`}
                          alt={index.toString()}
                          width="16"
                          height="9"
                          objectFit="cover"
                          layout="responsive"
                        />
                      </div>
                    );
                  })}

              <Back>Back to games</Back>
            </div>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
};

export const getStaticPaths = async () => {
  const paths = games.map((game: Game) => ({
    params: { game: game.directory },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  return {
    props: context.params,
  };
};

export default Game;
