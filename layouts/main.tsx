import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { pageDefault } from "../data/animations";

interface Props {
  children: React.ReactNode;
  title?: string;
  noSpace?: boolean;
}

const MainLayout: NextPage<Props> = ({ children, title, noSpace }) => {
  const pageTitle = title ? `${title} — Fahd Aslam` : "Fahd Aslam";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Fahd Aslam Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <motion.main
          variants={pageDefault}
          initial="hidden"
          animate="show"
          exit="hidden"
          className={`${noSpace ? "" : "mt-12"} flex-1`}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
