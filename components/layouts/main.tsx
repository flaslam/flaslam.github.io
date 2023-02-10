import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../nav";
import Footer from "../footer";
import { motion } from "framer-motion";
import { pageDefault } from "../../data/animations";

interface Props {
  children: any;
  title?: string | null;
}

const MainLayout: NextPage<Props> = ({ children, title }) => {
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
        variants={pageDefault}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default MainLayout;
