import GamePanel from "./game-panel";
import { Game } from "../types/games";
import { motion } from "framer-motion";

interface GamesProps {
  games: Game[];
}

const GamesLayout: React.FC<GamesProps> = ({ games }) => {
  return (
    <div className="flex flex-col gap-12">
      {games.map((game, index) => (
        <motion.div
          initial={{ opacity: 0, translateY: -75 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: index * 0.125 }}
          key={index}
        >
          <GamePanel game={game} />
        </motion.div>
      ))}
    </div>
  );
};

export default GamesLayout;
