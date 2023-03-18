import type { NextPage } from "next";
import { sites } from "../data/sites";
import MainLayout from "../layouts/main";
import ProjectsLayout from "../components/projects-layout";
import Back from "../components/back";

const Projects: NextPage = () => {
  return (
    <MainLayout title="Sites">
      <div className="mx-auto max-w-screen-lg">
        <div className="container mx-auto px-8">
          <div className="mb-6">
            <Back>Back to projects</Back>
          </div>
          <ProjectsLayout projects={sites} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;
