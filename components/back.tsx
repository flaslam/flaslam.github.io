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
          className="flex shrink items-center gap-2 rounded-md bg-zinc-200 bg-opacity-50 py-2 px-3 hover:bg-zinc-300 hover:bg-opacity-50 dark:bg-dark-panel dark:bg-opacity-50 dark:hover:bg-zinc-600 dark:hover:bg-opacity-50"
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
