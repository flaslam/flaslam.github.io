import { Project } from "../types/projects";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";

interface ProjectsLayoutProps {
  projects: Project[];
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ projects }) => {
  return (
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2`}>
      {projects.map((project, index) => (
        <motion.div
          initial={{ opacity: 0, translateY: -75 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * 0.125 }}
          key={index}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsLayout;
