import type { NextPage } from "next";
import { sites } from "../types/projects";
import MainLayout from "../components/layouts/main";
import ProjectsLayout from "../components/projects-layout";
import Back from "../components/back";

const Projects: NextPage = () => {
  return (
    <MainLayout title="Sites">
      <div>
        <div className="container mx-auto mb-12 px-6 pb-8 sm:px-12">
          <div className="mb-4">
            <Back>Back to projects</Back>
          </div>
          <ProjectsLayout projects={sites} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
