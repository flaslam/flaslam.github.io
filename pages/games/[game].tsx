import React from "react";
import Layout from "../../layouts/layout";
import { Game } from "../../types/games";
import { games } from "../../data/games";
import { paths } from "../../data/paths";
import Image from "next/legacy/image";
import Back from "../../components/back";
import GameVideo from "../../components/game-video";
import { NextPage } from "next";
import Carousel from "../../components/carousel";

interface GameProps {
  game: Game;
}

const Game: NextPage<GameProps> = ({ game }) => {
  return (
    <Layout title={game.name} noSpace>
      {/* Background image */}
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${paths.IMG_DIR}/${game.directory}/bg.jpg)`,
        }}
      >
        {/* Background overlay */}
        <div className="bg-white bg-opacity-60 py-12 dark:bg-dark dark:bg-opacity-80">
          {/* Main content */}
          <div className="container mx-auto">
            <div className="mx-auto max-w-screen-lg px-8">
              <div className="pb-4 lg:mb-0">
                <Back>Back to games</Back>
              </div>

              <div className="flex flex-col gap-6 md:flex-row md:gap-12">
                {/* Left side content */}
                <div className="flex items-center md:basis-2/3">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{game.name}</h1>
                    <p>{game.description}</p>
                    <div>
                      <div className="font-bold">Built with</div>
                      {/* <span className="font-bold">Tools — </span>{" "} */}
                      {game.tools.join(", ")}
                    </div>
                    {!game.abouts ? null : (
                      <div>
                        <h3 className="mb-1 font-bold">About</h3>
                        <ul>
                          {game.abouts.map((item, index) => (
                            <li key={index} className="ml-4 mb-1 list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center md:basis-1/3">
                  <div className="w-full">
                    <Image
                      src={`${paths.IMG_DIR}/${game.directory}/title.jpg`}
                      alt={game.name}
                      width="200"
                      height="200"
                      objectFit="cover"
                      layout="responsive"
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel>-</Carousel>

      {/* Media videos and images */}
      <div className="container mx-auto mt-8">
        <div className="mx-auto max-w-screen-lg px-8">
          <Carousel>
            {game.videos &&
              game.videos > 0 &&
              Array.from({ length: game.videos }, (_, index) => (
                <GameVideo
                  url={`${paths.IMG_DIR}/${game.directory}/${index}.mp4`}
                  key={index}
                />
              ))}

            {game.screenshots &&
              game.screenshots > 0 &&
              Array.from({ length: game.screenshots }).map((item, index) => (
                <div className="shrink-0 grow-0 basis-full" key={index}>
                  <Image
                    src={`${paths.IMG_DIR}/${game.directory}/${index}.jpg`}
                    alt={index.toString()}
                    width="16"
                    height="9"
                    objectFit="cover"
                    layout="responsive"
                    // className="-translate-x-1/2 rounded"
                    key={index}
                  />
                </div>
              ))}
          </Carousel>

          <div className="mt-4">
            <Back>Back to games</Back>
          </div>
        </div>
      </div>
    </Layout>
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
  const game = games.find((game) => game.directory === context.params.game);
  return {
    props: { game },
  };
};

export default Game;
