import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../nav";
import Footer from "../footer";
import Visual from "../visual";

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
      <main>
        <div className="container mx-auto mb-12 flex justify-center">
          <Visual />
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ModelLayout;
