import { Project, projects } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold">{project.name}</h1>
      <p>{project.description}</p>
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
    </div>
  );
};

export default ProjectCard;
