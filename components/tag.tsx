interface TagProps {
  children: React.ReactNode;
  forceLight?: boolean;
}

const Tag: React.FC<TagProps> = ({ children, forceLight }) => {
  return (
    <div
      className={`rounded-full bg-opacity-90 py-0.5 px-2.5 ${
        forceLight ? "bg-white" : "bg-brand-lighter dark:bg-dark-highlight"
      }`}
    >
      <span
        className={`text-xs font-bold ${
          forceLight ? "text-black" : "text-brand-dark dark:text-dark-secondary"
        }`}
      >
        {children}
      </span>
    </div>
  );
};

export default Tag;
