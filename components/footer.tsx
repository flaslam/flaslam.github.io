import Link from "next/link";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="container mx-auto my-12 flex justify-center">
      <Link href="mailto:flaslam@gmail.com">
        <a target="_blank" className="hover:text-blue-800">
          <HiMail className="text-3xl" />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
