import { Project } from "../types/projects";
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInBrowser } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="rounded-md bg-violet-200 p-6 transition hover:-translate-y-2 hover:bg-violet-100">
      <div className="flex flex-col gap-2">
        {/* Top row */}
        <div className="flex gap-1">
          {/* Title */}
          <h1 className="grow text-lg font-bold">{project.name}</h1>
          {!project.source ? null : (
            <Link href={project.source}>
              <a target="_blank" title={`View source code for ${project.name}`}>
                <AiFillGithub className="text-xl transition hover:text-gray-500" />
              </a>
            </Link>
          )}
          {!project.link ? null : (
            <Link href={project.link}>
              <a
                target="_blank"
                title={`View deployed project for ${project.name}`}
              >
                <MdOpenInBrowser className="text-xl transition hover:text-gray-500" />
              </a>
            </Link>
          )}
        </div>

        {/* Image */}
        {!project.image ? null : (
          <Link href={project.link ? project.link : "/"}>
            <a target="_blank">
              <Image
                src={project.image}
                alt={project.name}
                width="16"
                height="9"
                layout="responsive"
                objectFit="cover"
                className="rounded-lg transition hover:scale-105 hover:opacity-80"
                objectPosition="top"
              />
            </a>
          </Link>
        )}

        {/* Description */}
        <p>{project.description}</p>

        {/* Technologies */}
        {!project.technologies ? null : (
          <div className="text-sm text-gray-600">
            {project.technologies.length <= 1
              ? project.technologies[0]
              : project.technologies.map((item, index) => (
                  <>
                    {item}
                    {project.technologies &&
                    index === project.technologies.length - 1 ? null : (
                      <>, </>
                    )}
                  </>
                ))}
          </div>
        )}

        {/* Features */}
        {!project.features ? null : (
          <div>
            <h2 className="font-bold">Notable features:</h2>
            <ul>
              {project.features.map((item, index) => (
                <li className="ml-5 list-disc" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;