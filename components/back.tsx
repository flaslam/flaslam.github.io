import Router from "next/router";
import { HiArrowNarrowLeft } from "react-icons/hi";

interface BackProps {
  children?: string;
  link?: string;
}

const Back: React.FC<BackProps> = ({ children, link }) => {
  const handlePath = () => {
    link ? Router.push(link) : Router.back();
  };

  return (
    <div className="flex">
      <div className="inline-block">
        <button
          className="flex shrink items-center gap-2 rounded-md bg-black py-2 px-3 text-white hover:bg-opacity-80 dark:bg-white dark:text-black dark:hover:bg-opacity-50"
          onClick={handlePath}
        >
          <HiArrowNarrowLeft />
          <span className="text-sm font-bold">{children}</span>
        </button>
      </div>
    </div>
  );
};

export default Back;
