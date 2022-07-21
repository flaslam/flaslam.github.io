import Router from "next/router";
import { HiArrowNarrowLeft } from "react-icons/hi";

interface BackProps {
  children?: string;
}

const Back: React.FC<BackProps> = ({ children }) => {
  return (
    <div>
      <button
        onClick={() => Router.back()}
        className="flex shrink items-center gap-2 rounded-lg py-2 px-4 hover:bg-black hover:bg-opacity-10"
      >
        <HiArrowNarrowLeft />{" "}
        <span className="text-sm uppercase">{children}</span>
      </button>
    </div>
  );
};

export default Back;
