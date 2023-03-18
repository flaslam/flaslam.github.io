import { Project } from "../types/projects";
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInBrowser } from "react-icons/md";
import Link from "next/link";
import Image from "next/legacy/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const href = project.source
    ? project.source
    : project.link
    ? project.link
    : "";
  const target = project.internal ? "_self" : "_blank";

  return (
    <div className="rounded-md bg-violet-200 p-6 transition hover:bg-violet-100 dark:bg-dark-panel dark:hover:bg-dark-highlight">
      <div className="flex flex-col gap-2">
        {/* Top row */}
        <div className="flex items-baseline gap-1">
          {/* Title */}
          <h1 className="grow truncate text-lg font-bold">
            <Link href={href} target={target}>
              <span className="hover:text-link">{project.name}</span>
            </Link>
          </h1>

          {!project.source ? null : (
            <Link
              href={project.source}
              target="_blank"
              title={`Go to source code for ${project.name}`}
            >
              <div>
                <AiFillGithub className="text-xl transition hover:text-gray-500" />
              </div>
            </Link>
          )}

          {/* Icons */}
          <Link
            href={project.link}
            target={target}
            title={`Go to deployed project for ${project.name}`}
          >
            <div>
              <MdOpenInBrowser className="text-xl transition hover:text-gray-500" />
            </div>
          </Link>
        </div>

        {/* Image */}
        <Link
          href={href}
          target={target}
          title={`Go to project page for ${project.name}`}
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.name}
              width="16"
              height="9"
              layout="responsive"
              objectFit="cover"
              className="transition hover:scale-105 hover:opacity-80"
              objectPosition="top"
              priority
            />
          </div>
        </Link>

        <div>
          {/* Description */}
          {project.description && <p>{project.description}</p>}

          {/* Technologies */}
          {project.technologies && (
            <p className="pt-1 text-sm text-brand-dark dark:text-dark-secondary">
              {project.technologies.join(", ")}
            </p>
          )}
        </div>

        {/* Features */}
        {project.features && (
          <div>
            <h2 className="font-bold">Features:</h2>
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
