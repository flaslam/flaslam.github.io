import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layouts/model";
import ProjectsLayout from "../components/projects-layout";
import GamesLayout from "../components/games-layout";
import { projects } from "../data/projects";
import { games } from "../data/games";

const RECENT_PROJECT_LIMIT = 2;
const favProjects = projects.slice(0, RECENT_PROJECT_LIMIT);
const favGames = games.slice(0, RECENT_PROJECT_LIMIT);

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-lg">
        {/* Web projects */}
        <div className="container mx-auto mb-6 px-6 pb-4 sm:px-12">
          {/* Section title */}
          <div className="my-4 text-xl font-bold">
            <Link href="/projects">
              <div className="transition hover:text-blue-600">
                Recent web projects (view more)
              </div>
            </Link>
          </div>

          {/* Cards */}
          <ProjectsLayout projects={favProjects} />

          {/* See more text */}
          <Link href="/projects">
            <div className="transition hover:text-blue-600">
              <div className="my-4 flex justify-end font-medium">See more</div>
            </div>
          </Link>
        </div>

        {/* Game projects */}
        <div className="container mx-auto mb-6 px-6 pb-4 sm:px-12">
          {/* Section title */}
          <div className="my-4 text-xl font-bold">
            <Link href="/games">
              <div className="transition hover:text-blue-600">
                Recent game projects (view more)
              </div>
            </Link>
          </div>

          {/* Panels */}
          <GamesLayout games={favGames} />

          {/* See more text */}
          <Link href="/games">
            <div className="hover:text-blue-600">
              <div className="my-4 flex justify-end font-medium">See more</div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
