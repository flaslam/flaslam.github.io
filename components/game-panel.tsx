import Image from "next/legacy/image";
import Link from "next/link";
import { Game } from "../types/games";
import { paths } from "../data/paths";

interface CardProps {
  game: Game;
}

const GamePanel: React.FC<CardProps> = ({ game }) => {
  return (
    <Link href={`${paths.LINK_DIR}/${game.directory}`} target="_self">
      <div className="h-full w-full overflow-hidden rounded-md">
        <div
          className="relative bg-cover bg-center transition"
          style={{
            backgroundImage: `url(${paths.IMG_DIR}/${game.directory}/bg.jpg)`,
          }}
        >
          <div className="flex gap-8 bg-black bg-opacity-50 p-10 transition hover:bg-opacity-60 sm:py-16 sm:px-20 md:py-8 md:px-12">
            {/* Left panel */}
            <div className="md:basis-3/4">
              <div className="flex h-full max-w-md flex-col justify-center gap-4 text-white">
                <h1 className="text-2xl font-bold">
                  <span className="hover:text-link">{game.name}</span>
                </h1>
                <p className="">{game.description}</p>
                <div className="">
                  <div className="font-bold">Built with</div>
                  {game.tools.join(", ")}
                </div>
              </div>
            </div>

            {/* Image container */}
            <div className="hidden basis-1/3 items-center justify-end md:flex md:basis-1/3">
              <div className="w-full overflow-hidden rounded-md">
                <Image
                  src={`${paths.IMG_DIR}/${game.directory}/title.jpg`}
                  alt={game.name}
                  width="100"
                  height="100"
                  objectFit="cover"
                  layout="responsive"
                  className="transition hover:scale-105 hover:opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GamePanel;
