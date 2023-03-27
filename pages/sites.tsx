import type { NextPage } from "next";
import { sites } from "../data/sites";
import Layout from "../layouts/layout";
import ProjectsLayout from "../components/projects-layout";
import Back from "../components/back";

const Projects: NextPage = () => {
  return (
    <Layout title="Sites">
      <div className="container mx-auto px-container">
        <div className="mb-6">
          <Back>Back to projects</Back>
        </div>
        <ProjectsLayout projects={sites} />
      </div>
    </Layout>
  );
};

export default Projects;
