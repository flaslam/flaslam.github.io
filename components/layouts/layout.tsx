import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../nav";
import Footer from "../footer";

interface Props {
  children: any;
  title?: string;
}

const Layout: NextPage<Props> = ({ children, title }) => {
  const pageTitle = title ? `${title} | Fahd Aslam` : "Fahd Aslam";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
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
