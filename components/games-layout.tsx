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
          initial={{ opacity: 0, marginTop: -75 }}
          animate={{ opacity: 1, marginTop: -0 }}
          key={index}
          transition={{ delay: index * 0.125 }}
        >
          <GamePanel key={index} game={game} />
        </motion.div>
      ))}
    </div>
  );
};

export default GamesLayout;
