import Project from "../types/projects";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
// import { MdOpenInBrowser as LinkIcon } from "react-icons/md";
import { HiOutlineExternalLink as LinkIcon } from "react-icons/hi";
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
    <div className="overflow-hidden rounded bg-brand-light p-5 dark:bg-dark-panel">
      <div className="flex flex-col">
        {/* Image */}
        <Link
          href={href}
          target={target}
          title={`Go to project page for ${project.name}`}
        >
          <div className="overflow-hidden rounded">
            <div className="group relative">
              <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-0 opacity-0 transition group-hover:bg-opacity-60 group-hover:opacity-100">
                <div className="flex translate-y-8 flex-col items-center gap-2 text-white transition group-hover:translate-y-0">
                  <LinkIcon />
                  <span className="font-bold">Go to project</span>
                </div>
              </div>
              <Image
                src={project.image}
                alt={project.name}
                width="16"
                height="9"
                layout="responsive"
                objectFit="cover"
                className="transition group-hover:scale-105"
                objectPosition="top"
                priority
              />
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-2 pt-3">
          {/* Top row */}
          <div className="flex items-baseline gap-1">
            {/* Title */}
            <h1 className="grow truncate text-lg font-bold">
              <Link href={href} target={target}>
                <span className="hover:text-link">{project.name}</span>
              </Link>
            </h1>

            {/* Icons */}
            <div className="flex items-center gap-2">
              {/* Source icon */}
              {!project.source ? null : (
                <Link
                  href={project.source}
                  target="_blank"
                  title={`Go to source code for ${project.name}`}
                >
                  <div className="flex items-center gap-1 rounded bg-zinc-100 px-1.5 py-1 transition hover:bg-zinc-200 dark:bg-dark-highlight dark:hover:bg-dark-medium">
                    <GithubIcon />
                    <span className="text-xs font-bold">Source</span>
                  </div>
                </Link>
              )}

              {/* Project icon */}
              <Link
                href={project.link}
                target={target}
                title={`Go to deployed project for ${project.name}`}
              >
                <div className="flex items-center gap-1 rounded bg-zinc-100 px-1.5 py-1 transition hover:bg-zinc-200 dark:bg-dark-highlight dark:hover:bg-dark-medium">
                  <LinkIcon />
                  <span className="text-xs font-bold">View</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {/* Description */}
            {project.description && <p>{project.description}</p>}

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((item, index) => (
                <div
                  key={index}
                  className="rounded-full bg-brand-lighter py-0.5 px-2.5 dark:bg-dark-highlight"
                >
                  <span className="text-xs font-bold text-brand-dark dark:text-dark-secondary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
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
    </div>
  );
};

export default ProjectCard;
