import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div className="container mx-auto bg-slate-100">
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
    </div>
  );
};

export default About;
