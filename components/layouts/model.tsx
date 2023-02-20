import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../nav";
import Footer from "../footer";
import Visual from "../visual";
import { motion } from "framer-motion";
import MainLayout from "./main";

interface Props {
  children: any;
  title?: string | null;
}

const ModelLayout: NextPage<Props> = ({ children, title }) => {
  return (
    <MainLayout title={title}>
      {/* <Visual /> */}
      {children}
    </MainLayout>
  );
};

export default ModelLayout;
