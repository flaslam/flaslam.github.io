import { NextPage } from "next";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Layout from "../components/layouts/layout";
import { motion } from "framer-motion";
import Visual from "../components/visual";

const About: NextPage = () => {
  return (
    <Layout title="About">
      <motion.div
        initial={{ opacity: 0, translateY: -75 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="container mx-auto"
      >
        <Visual />
        <div className="mx-12">
          <div className="flex flex-col items-center gap-6 rounded-lg bg-indigo-100 px-6 py-12">
            <p>Game and full-stack web developer based in London, UK</p>
            <div className="flex flex-col items-center gap-2">
              <div>Recently working with:</div>
              <div className="text-center">
                C# (Unity), TypeScript &amp; ES6 JavaScript (React, Next.js,
                Node.js, Express)
              </div>
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
