import type { NextPage } from "next";
import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

interface Props {
  children: any;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Fahd Aslam</title>
        <meta name="description" content="Fahd Aslam Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
