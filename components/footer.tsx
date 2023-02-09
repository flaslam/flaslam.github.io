import Link from "next/link";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="container mx-auto my-12 flex justify-center">
      <a
        href="mailto:flaslam@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-800"
      >
        <HiMail className="text-3xl" />
      </a>
    </footer>
  );
};

export default Footer;
