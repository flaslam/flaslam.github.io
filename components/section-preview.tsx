import Link from "next/link";
import { ReactNode } from "react";

interface ProjectPreviewProps {
  url: string;
  title: string;
  children: ReactNode;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  children,
  url,
  title,
}) => {
  return (
    <div className="container mx-auto">
      {/* Section title */}
      <div className="my-4 text-lg font-bold">
        <div className="transition">
          <Link href={url}>
            <span className="hover:text-link">
              Recent {title} projects (view more)
            </span>
          </Link>
        </div>
      </div>

      {/* Layout panels */}
      {children}

      {/* See more text */}
      <div className="mt-4 flex justify-end font-bold">
        <Link href={url}>
          <span className="hover:text-link">See more...</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreview;
