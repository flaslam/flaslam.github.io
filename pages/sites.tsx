import type { NextPage } from "next";
import { sites } from "../types/projects";
import Layout from "../components/layouts/layout";
import { motion } from "framer-motion";
import ProjectsLayout from "../components/projects-layout";
import Back from "../components/back";

const Projects: NextPage = () => {
  return (
    <Layout title="Sites">
      <motion.div
        initial={{ opacity: 0, translateY: -75 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <div className="container mx-auto mb-12 px-6 pb-8 sm:px-12">
          <div className="mb-4">
            <Back>Back to projects</Back>
          </div>
          <ProjectsLayout projects={sites} />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Projects;
