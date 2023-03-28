import Link from "next/link";
import { useRef, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutside from "../hooks/use-click-outside";
import ThemeChanger from "./theme-changer";

import {
  HiMenu,
  HiX,
  HiMoon as MoonIcon,
  HiSun as SunIcon,
} from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/router";

interface Link {
  title?: string | React.ReactNode;
  url: string;
  icon?: React.ReactNode;
  newWindow?: boolean;
}

const links: Link[] = [
  { title: "Home", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "Games", url: "/games" },
  { title: "About", url: "/about" },
  {
    url: "https://github.com/flaslam",
    icon: <AiFillGithub className="my-0.5 text-xl" />,
    newWindow: true,
  },
];

const Nav = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navRef = useRef(null);
  useClickOutside(navRef, () => setMobileMenuOpen(false));

  const renderLinks = links.map((item, index) => {
    const inactive =
      item.url !== router.pathname &&
      !item.icon &&
      "text-zinc-500 dark:text-zinc-400 dark:hover:text-link";
    return (
      <div key={index}>
        <Link
          href={item.url}
          onClick={() => setMobileMenuOpen(false)}
          target={item.newWindow ? "_blank" : ""}
        >
          <div className={`p-1 px-1 transition hover:text-link ${inactive}`}>
            <span className="font-bold">{item.title}</span>
            {item.icon ? item.icon : null}
          </div>
        </Link>
      </div>
    );
  });

  const themeButton = (
    <ThemeChanger>
      <div
        className={`p-1 ${
          theme === "dark"
            ? "text-orange-300 hover:text-orange-400"
            : "text-violet-400 hover:text-violet-500"
        }`}
      >
        {theme === "dark" ? (
          <SunIcon className="my-0.5 text-xl" />
        ) : (
          <MoonIcon className="my-0.5 text-xl" />
        )}
      </div>
    </ThemeChanger>
  );

  return (
    <nav className="sticky top-0 z-50" ref={navRef}>
      <div className="bg-zinc-200 bg-opacity-70 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80">
        <div className="container mx-auto px-container py-4">
          <div className="flex items-center gap-2">
            <div className="flex flex-col font-bold md:flex-row md:gap-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div>Fahd Aslam</div>
              </Link>

              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <div className="text-zinc-500 dark:text-zinc-500">
                  Software Developer
                </div>
              </Link>
            </div>

            <div className="grow" />

            {/* Links */}
            <div className="hidden items-center gap-2 text-sm sm:flex sm:flex-row">
              {renderLinks}
              {themeButton}
            </div>

            {/* Mobile menu button */}
            <button
              className="transition hover:cursor-pointer hover:opacity-50 sm:hidden"
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            >
              {!mobileMenuOpen ? (
                <HiMenu className="text-xl" />
              ) : (
                <HiX className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full overflow-hidden sm:hidden"
          >
            <div className="bg-zinc-200 bg-opacity-70 backdrop-blur-md dark:bg-dark-panel dark:bg-opacity-80">
              <div className="flex flex-col gap-2 py-2 px-container">
                {renderLinks}
                {themeButton}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
