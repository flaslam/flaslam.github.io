import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Visual from "../components/visual";
import { motion } from "framer-motion";
import MainLayout from "./main";
import { NextPageWithLayout } from "../pages/_app";

interface Props {
  children: any;
  title?: string;
  noSpace?: boolean;
}

const ModelLayout: NextPageWithLayout<Props> = ({
  children,
  title,
  noSpace,
}) => {
  return (
    <MainLayout title={title} noSpace={true}>
      <Visual />
      <div className={`${noSpace ? "" : "mt-8"}`}>{children}</div>
    </MainLayout>
  );
};

ModelLayout.getLayout = (page: React.ReactElement) => <>{page}</>;

export default ModelLayout;
