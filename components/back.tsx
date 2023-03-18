import Router from "next/router";
import { HiArrowNarrowLeft } from "react-icons/hi";

interface BackProps {
  children?: string;
}

const Back: React.FC<BackProps> = ({ children }) => {
  return (
    <div onClick={() => Router.back()}>
      <button className="flex shrink items-center gap-2 rounded-lg bg-zinc-200 bg-opacity-50 py-2 px-3 hover:bg-zinc-300 hover:bg-opacity-50 dark:bg-dark-panel dark:bg-opacity-50 dark:hover:bg-zinc-600 dark:hover:bg-opacity-50">
        <HiArrowNarrowLeft />
        <span className="text-sm font-bold">{children}</span>
      </button>
    </div>
  );
};

export default Back;
