export interface Project {
  name: string;
  description: string;
  languages?: string[];
  technologies?: string[];
  link?: string;
  source?: string;
  features?: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Chirp",
    description:
      "Full-stack social media app inspired by Twitter, with a React/Next.js front-end and a Node.js/Express back-end.",
    technologies: [
      "Next.js (React)",
      "Node.js (Express)",
      "MongoDB",
      "TypeScript (JavaScript)",
      "Tailwind CSS",
    ],
    link: "https://chirp-flaslam.vercel.app/",
    source: "https://github.com/flaslam/chirp",
    image: "/images/projects/chirp.png",
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
    name: "Blog Client/CMS/API",
    description:
      "Full-stack blog with a backend Node.js REST API, frontend CMS built in React and frontend client built in Next.js",
    link: "https://blog-client-flaslam.vercel.app/",
    source: "https://github.com/flaslam/blog-api",
    technologies: ["Next.js", "React", "JavaScript", "MongoDB"],
    image: "/images/projects/blog.png",
  },
  {
    name: "Pomodoro Timer",
    description:
      "Customisable timer app which stores user data and stats between sessions.",
    link: "https://pomodoro-timer-flaslam.vercel.app/",
    source: "https://github.com/flaslam/pomodoro-timer",
    image: "/images/projects/pomodoro.png",
    technologies: ["Next.js (React)", "TypeScript (JavaScript)"],
  },
  {
    name: "Portfolio site",
    description:
      "Portfolio frontend built in Next.js and TypeScript to display my work and projects.",
    technologies: [
      "Next.js (React)",
      "TypeScript (JavaScript)",
      "Tailwind CSS",
    ],
    link: "https://flaslam.github.io/",
    source: "https://github.com/flaslam/flaslam.github.io",
    image: "/images/projects/portfolio.jpg",
  },
  {
    name: "Frontend sites",
    description:
      "Multiple front-end sites built for businesses and non-profits with different tools and frameworks",
    link: "https://fahdlaslam.github.io/",
    image: "/images/projects/hamwattan.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "CSS/SASS/Tailwind CSS/Bootstrap",
    ],
  },
];
