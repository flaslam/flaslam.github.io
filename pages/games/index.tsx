import type { NextPage } from "next";
import GamePanel from "../../components/game-panel";
import { games } from "../../types/games";
import { useSpring, animated } from "react-spring";
import Layout from "../../components/layouts/layout";
import { motion } from "framer-motion";

const Games: NextPage = () => {
  return (
    <Layout title="Games">
      <motion.div
        initial={{ opacity: 0, marginTop: -75 }}
        animate={{ opacity: 1, marginTop: -0 }}
      >
        <div className="container mx-auto px-12">
          {games.map((game, index) => (
            <GamePanel key={index} game={game} />
          ))}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Games;
