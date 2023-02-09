import { Project } from "../types/projects";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";
import { staggerChild, staggerParent } from "../data/animation";

interface ProjectsLayoutProps {
  projects: Project[];
}

const ProjectsLayout: React.FC<ProjectsLayoutProps> = ({ projects }) => {
  return (
    <motion.div
      className={`grid grid-cols-1 gap-8 sm:grid-cols-2`}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
    >
      {projects.map((project, index) => (
        <motion.div variants={staggerChild} key={index}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsLayout;
