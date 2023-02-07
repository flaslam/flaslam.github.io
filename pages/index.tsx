import { NextPage } from "next";
import Layout from "../components/layouts/model";
import { motion } from "framer-motion";
import Link from "next/link";
import Visual from "../components/visual";
import { projects } from "../types/projects";
import { games } from "../types/games";
import ProjectsLayout from "../components/projects-layout";
import GamesLayout from "../components/games-layout";

const Home: NextPage = () => {
  const recentProjectLimit = 2;
  const favProjects = projects.slice(0, recentProjectLimit);
  const favGames = games.slice(0, recentProjectLimit);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, translateY: -75 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="mx-auto max-w-screen-lg"
      >
        {/* Web projects */}
        <div className="container mx-auto mb-6 px-6 pb-4 sm:px-12">
          {/* Section title */}
          <div className="my-4 text-xl font-bold">
            <Link href="/projects">
              <a className="transition hover:text-blue-600">
                Recent web projects (view more)
              </a>
            </Link>
          </div>

          {/* Cards */}
          <ProjectsLayout projects={favProjects} />

          {/* See more text */}
          <Link href="/projects">
            <a className="transition hover:text-blue-600">
              <div className="my-4 flex justify-end font-medium">See more</div>
            </a>
          </Link>
        </div>

        {/* Game projects */}
        <div className="container mx-auto mb-6 px-6 pb-4 sm:px-12">
          {/* Section title */}
          <div className="my-4 text-xl font-bold">
            <Link href="/games">
              <a className="transition hover:text-blue-600">
                Recent game projects (view more)
              </a>
            </Link>
          </div>

          {/* Panels */}
          <GamesLayout games={favGames} />

          {/* See more text */}
          <Link href="/games">
            <a className="hover:text-blue-600">
              <div className="my-4 flex justify-end font-medium">See more</div>
            </a>
          </Link>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
