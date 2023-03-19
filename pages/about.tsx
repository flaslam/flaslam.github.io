import { NextPage } from "next";
import { HiArrowNarrowRight } from "react-icons/hi";
import Layout from "../layouts/model";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  const technologies = [
    "C# (Unity)",
    "JavaScript ES6",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "SQL",
    "MongoDB",
    "HTML & CSS",
  ];

  const languages = ["C#", "JavaScript ES6", "TypeScript"];

  const frameworks = ["React", "Next.js", "Node.js", "Express"];

  return (
    <div className="mx-auto max-w-screen-md">
      <div className="container mx-auto">
        <div className="mx-6">
          <div className="mx-auto flex flex-col gap-6 rounded-md bg-indigo-200 px-8 py-8 dark:bg-dark-panel">
            <p>Full stack web and indie game developer based in London, UK</p>
            <div className="flex flex-col gap-2">
              <div>Technologies I have been working with:</div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
                {technologies.map((item, index) => (
                  <li key={index} className="ml-5 list-disc marker:text-link">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex">
              <a
                href="mailto:flaslam@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="flex shrink items-center gap-2 hover:text-link"
              >
                <HiArrowNarrowRight />
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.getLayout = (page: React.ReactElement) => (
  <Layout title="About">{page}</Layout>
);

export default About;
