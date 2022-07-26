import Link from "next/link";

interface Link {
  title: string;
  url: string;
}

const links: Link[] = [
  { title: "Games", url: "/" },
  { title: "Projects", url: "/projects" },
  { title: "About", url: "/about" },
];

const Nav = () => {
  return (
    <nav className="container mx-auto my-12 flex items-center gap-2 px-12 sm:px-24">
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
      <div className="flex flex-col items-end sm:flex-row">
        {links.map((item, index) => (
          <div key={index} className="ml-3">
            <Link href={item.url}>
              <a>
                <div className="rounded-md p-1 px-2 transition hover:text-blue-700">
                  <span className="font-bold">{item.title}</span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
