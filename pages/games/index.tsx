import type { NextPage } from "next";
import Layout from "../../components/layouts/layout";
import GamesLayout from "../../components/games-layout";
import { games } from "../../types/games";
import { motion } from "framer-motion";

const Games: NextPage = () => {
  return (
    <Layout title="Games">
      <motion.div
        initial={{ opacity: 0, marginTop: -75 }}
        animate={{ opacity: 1, marginTop: -0 }}
      >
        <div className="container mx-auto px-12">
          <GamesLayout games={games} />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Games;
