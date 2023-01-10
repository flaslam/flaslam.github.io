import { NextPage } from "next";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Layout from "../components/layouts/model";
import { motion } from "framer-motion";

const About: NextPage = () => {
  const technologies = [
    "C# (Unity)",
    "JavaScript ES6",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "SQL",
    "MongoDB",
    "HTML & CSS",
  ];

  return (
    <Layout title="About">
      <motion.div
        initial={{ opacity: 0, translateY: -75 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="container mx-auto"
      >
        <div className="mx-6">
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg bg-indigo-100 px-6 py-12">
            <p>Full-stack web and indie game developer based in London, UK</p>
            <div className="flex flex-col gap-2">
              <div>Technologies I have been working with:</div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
                {technologies.map((item, index) => (
                  <li
                    key={index}
                    className="ml-5 list-disc marker:text-blue-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <span>Let&apos;s work together </span>
              <HiArrowNarrowRight />
              <Link href="mailto:flaslam@gmail.com">
                <a target="_blank" className="hover:text-blue-800">
                  Email me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default About;
