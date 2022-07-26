import type { NextPage } from "next";
import GamePanel from "../components/game-panel";
import { games } from "../types/games";
import { useSpring, animated } from "react-spring";

const Home: NextPage = () => {
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -75 },
  });

  return (
    <animated.div style={props}>
      <div className="container mx-auto px-12">
        {games.map((game, index) => (
          <GamePanel key={index} game={game} />
        ))}
      </div>
    </animated.div>
  );
};

export default Home;
