import Project from "../types/projects";

export const projects: Project[] = [
  {
    name: "Chirp",
    description:
      "Full-stack social media app inspired by Twitter with a fully responsive front-end design and back-end REST API with auth and cloud file storage",
    technologies: [
      "React (Next.js)",
      "Node.js (Express)",
      "MongoDB",
      "TypeScript (JavaScript)",
      "Tailwind CSS",
      "Amazon S3 (AWS)",
    ],
    link: "https://chirp-flaslam.vercel.app/",
    source: "https://github.com/flaslam/chirp",
    image: "/images/projects/chirp.jpg",
  },
  {
    name: "Twitter Mood Board",
    description:
      "Flask web app which generates a mood board by pulling user data using the Twitter API",
    technologies: ["Python", "Flask", "JavaScript", "HTML/CSS"],
    link: "https://twitter-board.onrender.com/",
    source: "https://github.com/flaslam/twitter-board",
    image: "/images/projects/twitter-board.jpg",
  },
  {
    name: "Spotify 3D Visualiser",
    description:
      "3D data visualisation app which authenticates users using the Spotify API and displays their listening habits in a 3D space",
    link: "https://flaslam.github.io/spotify-visualiser/",
    source: "https://github.com/flaslam/spotify-visualiser",
    technologies: ["Three.js", "React", "TypeScript (JavaScript)"],
    image: "/images/projects/spotify.jpg",
  },
  {
    name: "Front End Sites",
    description:
      "Examples of some front end sites built for businesses and non-profits using various frameworks",
    link: "/sites",
    internal: true,
    image: "/images/projects/frontend.jpg",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "CSS/SASS/Tailwind CSS/Bootstrap",
    ],
  },
  // {
  //   name: "Blog Client/CMS/API",
  //   description:
  //     "Full-stack blog with a backend Node.js REST API, front-end CMS and client built in React and Next.js",
  //   link: "https://blog-client-flaslam.vercel.app/",
  //   source: "https://github.com/flaslam/blog-api",
  //   technologies: ["React", "Next.js", "JavaScript", "MongoDB"],
  //   image: "/images/projects/blog.png",
  // },
  // {
  //   name: "Pomodoro Timer",
  //   description:
  //     "Customisable timer app which stores user data and stats between sessions.",
  //   link: "https://pomodoro-timer-flaslam.vercel.app/",
  //   source: "https://github.com/flaslam/pomodoro-timer",
  //   image: "/images/projects/pomodoro.png",
  //   technologies: ["React", "Next.js", "TypeScript (JavaScript)"],
  // },
];
