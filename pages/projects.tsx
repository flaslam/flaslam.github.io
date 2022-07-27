import type { NextPage } from "next";
import { projects } from "../types/projects";
import ProjectCard from "../components/project-card";
import Layout from "../components/layouts/layout";
import { motion } from "framer-motion";

const Projects: NextPage = () => {
  return (
    <Layout title="Projects">
      <motion.div
        initial={{ opacity: 0, marginTop: -75 }}
        animate={{ opacity: 1, marginTop: -0 }}
      >
        <div className="container mx-auto px-12 pb-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Projects;
