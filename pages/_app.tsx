import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence
      // mode="wait"
      exitBeforeEnter
      // initial={false}
      // onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.asPath} />
    </AnimatePresence>
  );
}

export default MyApp;
