import type { NextPage } from "next";
import { projects } from "../data/projects";
import MainLayout from "../components/layouts/main";
import ProjectsLayout from "../components/projects-layout";

const Projects: NextPage = () => {
  return (
    <MainLayout title="Projects">
      <div className="mx-auto max-w-screen-lg">
        <div className="container mx-auto mb-12 px-6 pb-8 sm:px-12">
          <ProjectsLayout projects={projects} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
