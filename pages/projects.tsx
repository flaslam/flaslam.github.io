import type { NextPage } from "next";
import { projects } from "../types/projects";
import MainLayout from "../components/layouts/main";
import { motion } from "framer-motion";
import ProjectsLayout from "../components/projects-layout";

const Projects: NextPage = () => {
  return (
    <MainLayout title="Projects">
      <motion.div
        initial={{ opacity: 0, translateY: -75 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="mx-auto max-w-screen-lg"
      >
        <div className="container mx-auto mb-12 px-6 pb-8 sm:px-12">
          <ProjectsLayout projects={projects} />
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default Projects;
