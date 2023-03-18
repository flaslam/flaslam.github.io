import Link from "next/link";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="container mx-auto my-12 flex justify-center">
      <a
        href="mailto:flaslam@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-link"
      >
        <HiMail className="text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
