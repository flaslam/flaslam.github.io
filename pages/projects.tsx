import type { NextPage } from "next";
import { projects } from "../data/projects";
import Layout from "../layouts/layout";
import ProjectsLayout from "../components/projects-layout";

const Projects: NextPage = () => {
  return (
    <Layout title="Projects">
      <div className="container mx-auto px-container">
        <ProjectsLayout projects={projects} />
      </div>
    </Layout>
  );
};

export default Projects;
