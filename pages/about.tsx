import { NextPage } from "next";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { animated, useSpring } from "react-spring";

const About: NextPage = () => {
  const props = useSpring({
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -75 },
  });

  return (
    <animated.div style={props} className="container mx-auto bg-slate-100">
      <div className="flex flex-col items-center gap-6 py-12">
        <p>game and web developer based in london, uk</p>
        <div className="flex items-center gap-2">
          <span>let&apos;s work together </span>
          <HiArrowNarrowRight />

          <Link href="mailto:flaslam@gmail.com">
            <a>email me</a>
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default About;
