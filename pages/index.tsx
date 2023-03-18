import { NextPage } from "next";
import Layout from "../layouts/model";
import ProjectsLayout from "../components/projects-layout";
import GamesLayout from "../components/games-layout";
import ProjectPreview from "../components/project-preview";
import { projects } from "../data/projects";
import { games } from "../data/games";
import { NextPageWithLayout } from "./_app";

const limit = 2;
const recentProjects = projects.slice(0, limit);
const recentGames = games.slice(0, limit);

const Home: NextPageWithLayout = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="container mx-auto px-8">
        <ProjectPreview url="/projects" title="web">
          <ProjectsLayout projects={recentProjects} />
        </ProjectPreview>

        <ProjectPreview url="/game" title="game">
          <GamesLayout games={recentGames} />
        </ProjectPreview>
      </div>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Home;
