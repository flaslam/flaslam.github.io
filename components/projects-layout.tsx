import { Project } from "../types/projects";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";

interface ProjectsLayoutProps {
  projects: Project[];
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          initial={{ opacity: 0, marginTop: -75 }}
          animate={{ opacity: 1, marginTop: -0 }}
          key={index}
          transition={{ delay: index * 0.125 }}
        >
          <ProjectCard project={project} key={index} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsLayout;
