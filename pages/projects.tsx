import type { NextPage } from "next";
import { projects } from "../types/projects";
import { useSpring, animated } from "react-spring";
import ProjectCard from "../components/project-card";

const Projects: NextPage = () => {
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -75 },
  });

  return (
    <animated.div style={props}>
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default Projects;
