import GamePanel from "./game-panel";
import { Game } from "../types/games";
import { motion } from "framer-motion";
import { staggerChild, staggerParent } from "../data/animations";

interface GamesProps {
  games: Game[];
}

const GamesLayout: React.FC<GamesProps> = ({ games }) => {
  return (
    <motion.div
      className="flex flex-col gap-10"
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {games.map((game, index) => (
        <motion.div
          key={index}
          variants={staggerChild}
          viewport={{ once: true }}
        >
          <GamePanel game={game} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GamesLayout;
