import type { NextPage } from "next";
import { projects } from "../types/projects";
import Layout from "../components/layouts/layout";
import { motion } from "framer-motion";
import ProjectsLayout from "../components/projects-layout";

const Projects: NextPage = () => {
  return (
    <Layout title="Projects">
      <motion.div
        initial={{ opacity: 0, translateY: -75 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <div className="container mx-auto mb-12 px-12 pb-4">
          <ProjectsLayout projects={projects} />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Projects;
