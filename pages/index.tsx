import { NextPage } from "next";
import Layout from "../components/layouts/layout";
import { motion } from "framer-motion";
import Link from "next/link";
import Visual from "../components/visual";
import { projects } from "../types/projects";
import { games } from "../types/games";
import ProjectsLayout from "../components/projects-layout";
import GamesLayout from "../components/games-layout";

const Home: NextPage = () => {
  const favProjects = projects.filter((element) => {
    const favProjectsQuery = ["Chirp", "Twitter Mood Board"];
    if (favProjectsQuery.includes(element.name)) return true;
  });

  const favGames = games.filter((element) => {
    const favGamesQuery = ["Distance", "Respite"];
    if (favGamesQuery.includes(element.name)) return true;
  });

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, translateY: -75 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <div className="container mx-auto mb-12 flex justify-center">
          <Visual />
        </div>

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
