import { FaFacebook } from "react-icons/fa";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

// Navlinks
export const nav_links = [
  {
    path: "#",
    title: "home",
  },
  {
    path: "#about",
    title: "about",
  },
  {
    path: "#skills",
    title: "skills",
  },
  {
    path: "#projects",
    title: "projects",
  },
  {
    path: "#contact",
    title: "contact",
  },
];

export const hero_data = {
  name: "Hello, I'm cesar",
  subheading: "I'm a",
  description:
    "and I'm passionate about creating engaging and user-friendly web experiences.",
};

export const socials = [
  {
    name: "github",
    icon: <FiGithub size={25} />,
    url: "",
  },
  {
    name: "facebook",
    icon: <FaFacebook size={25} />,
    url: "",
  },
  {
    name: "linkedin",
    icon: <CiLinkedin size={25} />,
    url: "",
  },
  {
    name: "twitter",
    icon: <FiTwitter size={25} />,
    url: "",
  },
];

export const about = {
  intro: [
    {
      title:
        "Hi there! I'm Cesar, and I'm on a journey to pursue a career in web development. I've always been fascinated by the power of websites and their ability to solve problems and automate processes.",
    },
    {
      subtitle1:
        "Since then, my passion for web development has only grown stronger. I began my dedicated journey in 2022, diving into the world of coding and web technologies. With each project, I aim to push boundaries, deliver exceptional user experiences, and make a positive impact through technology.",
    },
    {
      subtitle2:
        "As I embark on this exciting path, I'm driven by curiosity, a thirst for learning, and a willingness to embrace challenges. I believe that web development holds immense potential, and I'm committed to honing my skills to create innovative web solutions that leave a lasting impression.",
    },
  ],
  education: {
    title: "Bachelor of Science in Computer Science",
    school: "Don Mariano Marcos Memorial State University",
  },
};
