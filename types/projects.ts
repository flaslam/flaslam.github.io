export interface Project {
  name: string;
  description?: string;
  languages?: string[];
  technologies?: string[];
  link?: string;
  source?: string;
  features?: string[];
  image?: string;
  internal?: boolean;
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
    link: "https://twitter-board-flaslam.herokuapp.com/",
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
    name: "Blog Client/CMS/API",
    description:
      "Full-stack blog with a backend Node.js REST API, frontend CMS built in React and frontend client built in Next.js",
    link: "https://blog-client-flaslam.vercel.app/",
    source: "https://github.com/flaslam/blog-api",
    technologies: ["Next.js", "React", "JavaScript", "MongoDB"],
    image: "/images/projects/blog.png",
  },
  {
    name: "Front-end Sites",
    description:
      "Multiple front-end sites built for businesses and non-profits using various tools and frameworks (recent works to be added)",
    link: "/sites",
    internal: true,
    image: "/images/projects/frontend.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "CSS/SASS/Tailwind CSS/Bootstrap",
    ],
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
];

export const sites: Project[] = [
  {
    name: "Portfolio Site",
    technologies: [
      "Next.js (React)",
      "TypeScript (JavaScript)",
      "Tailwind CSS",
    ],
    link: "https://flaslam.github.io/",
    source: "https://github.com/flaslam/flaslam.github.io",
    image: "/images/sites/portfolio.jpg",
  },
  {
    name: "Hamwattan Centre",
    technologies: [
      "Next.js (React)",
      "TypeScript (JavaScript)",
      "Tailwind CSS",
    ],
    image: "/images/sites/hamwattan.jpg",
    link: "https://www.hamwattancentre.org.uk/",
  },
  {
    name: "Grass Konbini",
    technologies: [
      "Next.js (React)",
      "TypeScript (JavaScript)",
      "Tailwind CSS",
    ],
    image: "/images/sites/grass-konbini.png",
    link: "https://grasskonbini.vercel.app/",
  },
  {
    name: "Puppets Bunker",
    image: "/images/sites/puppets-bunker.jpg",
    technologies: ["Jekyll", "Bootstrap", "HTML/CSS"],
    link: "https://fahdlaslam.github.io/puppetsbunker/",
  },
  {
    name: "Mylo Reid VO",
    image: "/images/sites/mylo-reid.jpg",
    technologies: ["Jekyll", "Bootstrap", "HTML/CSS"],
    link: "https://myloreid.com/",
  },
  {
    name: "Al Fahd Spa & Fitness Club",
    link: "https://alfahd.com.pk/",
    image: "/images/sites/al-fahd.jpg",
    technologies: ["JavaScript", "HTML/CSS"],
  },
  {
    name: "Brash Pursuits",
    technologies: ["Jekyll", "Bootstrap", "HTML/CSS"],
    image: "/images/sites/brash-pursuits.jpg",
    link: "https://brashpursuits.github.io/",
  },
  {
    name: "Indoor Football League",
    technologies: ["Jekyll", "Bootstrap", "HTML/CSS"],
    image: "/images/sites/ifl.jpg",
    link: "https://ifluk.github.io/",
  },
  {
    name: "Satorika Gaming",
    technologies: ["JavaScript", "HTML/CSS"],
    link: "https://satorikagaming.tumblr.com/",
    image: "/images/sites/satorika.jpg",
  },
];
