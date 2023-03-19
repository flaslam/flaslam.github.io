import { NextPageWithLayout } from "../pages/_app";
import Visual from "../components/visual";

interface ModelLayoutProps {
  children: any;
  title?: string;
  noSpace?: boolean;
}

const ModelLayout: NextPageWithLayout<ModelLayoutProps> = ({
  children,
  noSpace,
}) => {
  return (
    <>
      <Visual />
      <div className={`${noSpace ? "" : "mt-8"}`}>{children}</div>
    </>
  );
};

export default ModelLayout;
