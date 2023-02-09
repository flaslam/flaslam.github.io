import GamePanel from "./game-panel";
import { Game } from "../types/games";
import { motion } from "framer-motion";
import { staggerChild, staggerParent } from "../data/animation";

interface GamesProps {
  games: Game[];
}

const GamesLayout: React.FC<GamesProps> = ({ games }) => {
  return (
    <motion.div
      className="flex flex-col gap-12"
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
    >
      {games.map((game, index) => (
        <motion.div variants={staggerChild} key={index}>
          <GamePanel game={game} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GamesLayout;
