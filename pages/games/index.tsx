import type { NextPage } from "next";
import MainLayout from "../../components/layouts/main";
import GamesLayout from "../../components/games-layout";
import { games } from "../../types/games";
import { motion } from "framer-motion";

const Games: NextPage = () => {
  return (
    <MainLayout title="Games">
      <motion.div
        initial={{ opacity: 0, translateY: -75 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="mx-auto max-w-screen-lg"
      >
        <div className="container mx-auto px-6 pb-4 sm:px-12">
          <GamesLayout games={games} />
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default Games;
