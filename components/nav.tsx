import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

type TitleOrIcon = {
  title: string | JSX.Element;
};

interface Link {
  title?: string | JSX.Element;
  url: string;
  icon?: JSX.Element;
  newWindow?: boolean;
}

const links: Link[] = [
  { title: "Home", url: "/" },
  { title: "Games", url: "/games" },
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
  {
    url: "https://github.com/flaslam",
    icon: <AiFillGithub />,
    newWindow: true,
  },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const createLinks = () => {
    return links.map((item, index) => (
      <div key={index}>
        <Link href={item.url}>
          <a
            onClick={() => setMenuOpen(false)}
            target={item.newWindow ? "_blank" : ""}
          >
            <div className="rounded-md p-1 px-2 transition hover:text-blue-700">
              <span className="font-bold">{item.title}</span>
              {item.icon ? item.icon : null}
            </div>
          </a>
        </Link>
      </div>
    ));
  };

  return (
    <nav className="sticky top-0 z-50 mb-2 rounded bg-white bg-opacity-80 py-0.5 backdrop-blur-md md:relative md:drop-shadow-none">
      <div
        className={`${
          menuOpen ? "mb-4" : "mb-5"
        } container z-50 mx-auto mt-5 flex items-center gap-2 px-12 sm:my-8 sm:px-12 md:px-24`}
      >
        <div className="grow text-lg font-bold">
          <div>
            <Link href="/">
              <a onClick={() => setMenuOpen(false)}>Fahd Aslam</a>
            </Link>
          </div>

          <div>
            <Link href="/">
              <a onClick={() => setMenuOpen(false)}>
                <span className="text-gray-500">Software Developer</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="ml-3 hidden flex-col items-center sm:flex sm:flex-row">
          {createLinks()}
        </div>

        {/* Mobile menu button */}
        <button
          className="transition hover:cursor-pointer hover:opacity-50 sm:hidden"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        >
          {!menuOpen ? (
            <HiMenu className="text-xl" />
          ) : (
            <HiX className="text-xl" />
          )}
        </button>
      </div>
      {!menuOpen ? null : (
        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <div className="mx-10 pb-8 sm:hidden">{createLinks()}</div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
