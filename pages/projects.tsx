import type { NextPage } from "next";
import { projects } from "../data/projects";
import Layout from "../layouts/main";
import ProjectsLayout from "../components/projects-layout";
import { NextPageWithLayout } from "./_app";

const Projects: NextPageWithLayout = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="container mx-auto px-8">
        <ProjectsLayout projects={projects} />
      </div>
    </div>
  );
};

Projects.getLayout = (page: React.ReactElement) => (
  <Layout title="Projects">{page}</Layout>
);

export default Projects;
