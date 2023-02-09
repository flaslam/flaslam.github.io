import { NextPage } from "next";
import { HiArrowNarrowRight } from "react-icons/hi";
import Layout from "../components/layouts/main";

const About: NextPage = () => {
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

  return (
    <Layout title="About">
      <div className="container mx-auto">
        <div className="mx-6">
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg bg-indigo-100 px-8 py-8">
            <p>Full stack web and indie game developer based in London, UK</p>
            <div className="flex flex-col gap-2">
              <div>Technologies I have been working with:</div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
                {technologies.map((item, index) => (
                  <li
                    key={index}
                    className="ml-5 list-disc marker:text-blue-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="mailto:flaslam@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="flex shrink items-center gap-2 hover:text-blue-800"
            >
              <HiArrowNarrowRight />
              Email me
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
