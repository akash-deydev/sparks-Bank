import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container text-center p-1">
      <div className="footer-links">
        <Link to="https://github.com/akash-deydev" target="_blank">
          <AiFillGithub size="2rem" color="#004880" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/akash-dey-344536222/"
          target="_blank"
        >
          <AiFillLinkedin size="2rem" color="#004880" />
        </Link>
        <Link to="https://www.instagram.com/__iamakash_/" target="_blank">
          <AiFillInstagram size="2rem" color="#004880" />
        </Link>
      </div>
      <div className="text-muted">©-2023 Akash Dey</div>
    </div>
  );
};

export default Footer;
