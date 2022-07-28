import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface Link {
  title: string;
  url: string;
}

const links: Link[] = [
  { title: "Home", url: "/" },
  { title: "Games", url: "/games" },
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const createLinks = () => {
    return links.map((item, index) => (
      <div key={index}>
        <Link href={item.url}>
          <a>
            <div className="rounded-md p-1 px-2 transition hover:text-blue-700">
              <span className="font-bold">{item.title}</span>
            </div>
          </a>
        </Link>
      </div>
    ));
  };

  return (
    <nav>
      <div className="container mx-auto my-10 flex items-center gap-2 px-12 sm:px-12 md:px-24">
        <div className="grow text-lg font-bold">
          <div>
            <Link href="/">
              <a>Fahd Aslam</a>
            </Link>
          </div>

          <div>
            <Link href="/">
              <a>
                <span className="text-gray-500">Game &amp; Web Developer</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="ml-3 hidden flex-col items-end sm:flex sm:flex-row">
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
        <motion.div initial={{ marginTop: -50 }} animate={{ marginTop: -0 }}>
          <div className="ml-10 pb-8 sm:hidden">{createLinks()}</div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
