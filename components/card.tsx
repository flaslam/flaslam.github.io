import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/projects";
import { config } from "../config";

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <Link href={`${config.LINK_DIR}${project.directory}`}>
      <a className="cursor-default">
        <div
          className="relative bg-cover"
          style={{
            backgroundImage: `url(${config.IMG_DIR}${project.directory}/bg.png)`,
          }}
        >
          <div className="mb-12 flex gap-8 bg-black bg-opacity-30 py-24 px-20 transition duration-300 hover:bg-opacity-60 md:py-16 md:px-20">
            <div className="flex flex-col justify-center gap-4 text-white md:basis-3/5">
              <h1 className="text-2xl font-medium">
                <span className="cursor-pointer ">{project.name}</span>
              </h1>
              <p className="text-lg">{project.description}</p>
              <div className="text-lg">
                <span className="font-medium">Tools — </span> {project.tools}
              </div>
            </div>
            <div className="items-right hidden grow basis-1/3 justify-end md:flex">
              <div className="w-full">
                <Image
                  src={`${config.IMG_DIR}${project.directory}/title.png`}
                  alt={project.name}
                  width="200"
                  height="200"
                  objectFit="cover"
                  layout="responsive"
                  className="cursor-pointer transition duration-300 hover:opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
