import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
