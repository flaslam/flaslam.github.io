import Image from "next/image";
import Link from "next/link";
import { Game } from "../types/games";
import { config } from "../config";

interface CardProps {
  game: Game;
}

const GamePanel: React.FC<CardProps> = ({ game: project }) => {
  return (
    <Link href={`${config.LINK_DIR}${project.directory}`} passHref>
      <a className="h-full w-full cursor-default">
        <div
          className="relative rounded-r-xl rounded-b-xl bg-cover bg-center transition sm:hover:-translate-y-1"
          style={{
            backgroundImage: `url(${config.IMG_DIR}${project.directory}/bg.jpg)`,
          }}
        >
          <div className="overflow-hidden">
            <div className="flex gap-8 rounded-r-xl rounded-b-xl bg-black bg-opacity-40 p-10 transition sm:py-16 sm:px-20 sm:hover:bg-opacity-60 md:py-16 md:px-20">
              <div className="flex flex-col justify-center gap-4 text-white md:basis-3/5">
                <h1 className="text-2xl font-medium">
                  <Link
                    href={`${config.LINK_DIR}${project.directory}`}
                    passHref
                  >
                    <span className="cursor-pointer hover:text-blue-400">
                      {project.name}
                    </span>
                  </Link>
                </h1>
                <p className="text-lg">{project.description}</p>
                <div className="text-lg">
                  <span className="font-medium">Tools — </span> {project.tools}
                </div>
              </div>
              <div className="items-right hidden grow basis-1/3 items-center justify-end md:flex">
                <div className="w-full overflow-hidden rounded-lg">
                  <Link
                    href={`${config.LINK_DIR}${project.directory}`}
                    passHref
                  >
                    <Image
                      src={`${config.IMG_DIR}${project.directory}/title.jpg`}
                      alt={project.name}
                      width="200"
                      height="200"
                      objectFit="cover"
                      layout="responsive"
                      className="cursor-pointer transition hover:scale-105 hover:opacity-80"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default GamePanel;
