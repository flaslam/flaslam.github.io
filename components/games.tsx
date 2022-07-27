import type { NextPage } from "next";
import GamePanel from "./game-panel";
import { games } from "../types/games";
import { motion } from "framer-motion";

const Games: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: -75 }}
      animate={{ opacity: 1, marginTop: -0 }}
      // className="container mx-auto bg-slate-100"
    >
      <div className="container mx-auto px-12">
        {games.map((game, index) => (
          <GamePanel key={index} game={game} />
        ))}
      </div>
    </motion.div>
  );
};

export default Games;
