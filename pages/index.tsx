import { NextPageWithLayout } from "./_app";
import Layout from "../layouts/layout";
import ModelLayout from "../layouts/model";

import SectionPreview from "../components/section-preview";
import ProjectsLayout from "../components/projects-layout";
import GamesLayout from "../components/games-layout";

import { projects } from "../data/projects";
import { games } from "../data/games";

const limit = 2;
const recentProjects = projects.slice(0, limit);
const recentGames = games.slice(0, limit);

const Home: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto px-container">
      <SectionPreview url="/projects" title="web">
        <ProjectsLayout projects={recentProjects} />
      </SectionPreview>

      <SectionPreview url="/games" title="game">
        <GamesLayout games={recentGames} />
      </SectionPreview>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => (
  <Layout noSpace>
    <ModelLayout>{page}</ModelLayout>
  </Layout>
);

export default Home;
