import type { NextPage } from "next";
import GamePanel from "../components/gamePanel";
import { games } from "../data/projects";
import { useSpring, animated } from "react-spring";

const Home: NextPage = () => {
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -75 },
  });

  return (
    <animated.div style={props}>
      <div className="container mx-auto px-12">
        {games.map((project, index) => (
          <GamePanel key={index} project={project} />
        ))}
      </div>
    </animated.div>
  );
};

export default Home;
