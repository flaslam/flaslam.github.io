import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../nav";
import Footer from "../footer";
import Visual from "../visual";
import { motion } from "framer-motion";

interface Props {
  children: any;
  title?: string | null;
}

const ModelLayout: NextPage<Props> = ({ children, title }) => {
  const pageTitle = title ? `Fahd Aslam | ${title}` : "Fahd Aslam";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Fahd Aslam Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <motion.main
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        exit={{ y: 300, opacity: 0, transition: { duration: 12 } }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 14,
        }}
      >
        <div className="container mx-auto mb-12 flex justify-center">
          {/* <Visual /> */}
        </div>
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default ModelLayout;
