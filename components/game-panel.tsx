import Image from "next/image";
import Link from "next/link";
import { Game } from "../types/games";
import { config } from "../config";

interface CardProps {
  game: Game;
}

const GamePanel: React.FC<CardProps> = ({ game: project }) => {
  return (
    <Link href={`${config.LINK_DIR}${project.directory}`}>
      <a className="cursor-default">
        <div
          className="relative rounded-r-xl rounded-b-xl bg-cover transition hover:-translate-y-1"
          style={{
            backgroundImage: `url(${config.IMG_DIR}${project.directory}/bg.jpg)`,
          }}
        >
          <div className="flex gap-8 rounded-r-xl rounded-b-xl bg-black bg-opacity-40 py-16 px-20 transition hover:bg-opacity-60 md:py-16 md:px-20">
            <div className="flex flex-col justify-center gap-4 text-white md:basis-3/5">
              <h1 className="text-2xl font-medium">
                <span className="cursor-pointer hover:text-blue-400">
                  {project.name}
                </span>
              </h1>
              <p className="text-lg">{project.description}</p>
              <div className="text-lg">
                <span className="font-medium">Tools — </span> {project.tools}
              </div>
            </div>
            <div className="items-right hidden grow basis-1/3 items-center justify-end md:flex">
              <div className="w-full rounded-lg">
                <Image
                  src={`${config.IMG_DIR}${project.directory}/title.jpg`}
                  alt={project.name}
                  width="200"
                  height="200"
                  objectFit="cover"
                  layout="responsive"
                  className="cursor-pointer rounded-lg transition hover:scale-105 hover:opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default GamePanel;
