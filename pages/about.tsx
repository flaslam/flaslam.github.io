import { NextPage } from "next";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import Layout from "../components/layouts/layout";
import { motion } from "framer-motion";

const About: NextPage = () => {
  return (
    <Layout title="About">
      <motion.div
        initial={{ opacity: 0, marginTop: -75 }}
        animate={{ opacity: 1, marginTop: -0 }}
        className="container mx-auto bg-slate-100"
      >
        <div className="mx-8 flex flex-col items-center gap-6 py-12">
          <p>Game and full-stack web developer based in London, UK</p>
          <div className="flex flex-col items-center gap-2">
            <div>Recently working with:</div>
            <div>
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
      </motion.div>
    </Layout>
  );
};

export default About;
