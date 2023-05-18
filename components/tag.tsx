interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <div className="rounded-full bg-brand-lighter py-0.5 px-2.5 dark:bg-dark-highlight">
      <span className="text-xs font-bold text-brand-dark dark:text-dark-secondary">
        {children}
      </span>
    </div>
  );
};

export default Tag;
