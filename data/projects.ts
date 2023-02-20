import { Project } from "../types/projects";

export const projects: Project[] = [
  {
    name: "Chirp",
    description:
      "Full-stack social media app inspired by Twitter, with a React/Next.js front-end and a Node.js/Express back-end.",
    technologies: [
      "React (Next.js)",
      "Node.js (Express)",
      "MongoDB",
      "TypeScript (JavaScript)",
      "Tailwind CSS",
      "AWS S3",
    ],
    link: "https://chirp-flaslam.vercel.app/",
    source: "https://github.com/flaslam/chirp",
    image: "/images/projects/chirp.jpg",
  },
  {
    name: "Twitter Mood Board",
    description:
      "Flask app that uses the Twitter API to pull data from a specified user's liked tweets and generates a mood board using the images.",
    technologies: ["Python", "Flask", "JavaScript", "HTML/CSS"],
    link: "https://twitter-board.onrender.com/",
    source: "https://github.com/flaslam/twitter-board",
    image: "/images/projects/twitter-board.jpg",
  },
  {
    name: "Spotify 3D Visualiser",
    description:
      "Visualisation app which authenticates users through Spotify and uses the Spotify API to fetch user data, allowing the user to visualise their recent listening history in a 3D space.",
    link: "https://flaslam.github.io/spotify-visualiser/",
    source: "https://github.com/flaslam/spotify-visualiser",
    technologies: ["Three.js", "React", "TypeScript (JavaScript)"],
    image: "/images/projects/spotify.jpg",
  },
  {
    name: "Front End Sites",
    description:
      "Multiple front end sites built for businesses and non-profits using various tools and frameworks (recent works to be added)",
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
  {
    name: "Blog Client/CMS/API",
    description:
      "Full-stack blog with a backend Node.js REST API, frontend CMS built in React and frontend client built in Next.js",
    link: "https://blog-client-flaslam.vercel.app/",
    source: "https://github.com/flaslam/blog-api",
    technologies: ["React", "Next.js", "JavaScript", "MongoDB"],
    image: "/images/projects/blog.png",
  },
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
