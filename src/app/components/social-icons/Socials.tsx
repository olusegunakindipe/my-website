import SocialIcon from "../../../../public/assets/icons/SocialIcon";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-4 items-center">
      <SocialIcon
        href="https://www.linkedin.com/in/olusegun-francis-akindipe/"
        label="LinkedIn"
        icon={<FaLinkedinIn className="w-5 h-5" />}
      />
      <SocialIcon
        href="https://github.com/olusegunakindipe"
        label="Github"
        icon={<FaGithub className="w-5 h-5" />}
      />
      <SocialIcon
        href="https://www.facebook.com/akindipe.fergie"
        label="Facebook"
        icon={<FaFacebookF className="w-5 h-5" />}
      />
      <SocialIcon
        href="https://x.com/AkinFergie"
        label="Twitter"
        icon={<FaTwitter className="w-5 h-5" />}
      />
      <SocialIcon
        href="https://www.instagram.com/akinfergie/"
        label="Instagram"
        icon={<FaInstagram className="w-5 h-5" />}
      />
    </div>
  );
};

export default Socials;
