import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Project, projects } from "../../data/projects";
import { useSpring, animated } from "react-spring";
import { config } from "../../config";
import Image from "next/image";
import Back from "../../components/back";

const Game = () => {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);

  // When router is ready
  useEffect(() => {
    // Find which project we are on.
    const findProject = () => {
      if (!router.isReady) return;
      const { game } = router.query;

      for (const item of projects) {
        if (item.directory === game) {
          setProject(item);
          return;
        }
      }
    };

    findProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <div>
      {/* Loading page until 404 displays */}
      {!project ? null : (
        <animated.div style={props}>
          {/* Background image */}
          <div
            className="bg-cover"
            style={{
              backgroundImage: `url(${config.IMG_DIR}${project.directory}/bg.png)`,
            }}
          >
            {/* White background overlay */}
            <div className="bg-white bg-opacity-70 py-12 px-12">
              {/* Main content */}
              <div className="container mx-auto max-w-screen-lg">
                <Back>Back to projects</Back>
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
                    <div className="w-full p-6">
                      <Image
                        src={`${config.IMG_DIR}${project.directory}/title.png`}
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

          <div className="container mx-auto my-12 flex max-w-screen-lg flex-col gap-12 px-8">
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
                        src={`${config.IMG_DIR}${project.directory}/${index}.png`}
                        alt={index.toString()}
                        width="16"
                        height="9"
                        objectFit="cover"
                        layout="responsive"
                      />
                    </div>
                  );
                })}
          </div>
        </animated.div>
      )}
    </div>
  );
};

export default Game;