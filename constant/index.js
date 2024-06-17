import {
  FaFacebook,
  FaCode,
  FaBrain,
  FaBook,
  FaGamepad,
  FaCamera,
} from "react-icons/fa";
import { PiCookingPotDuotone } from "react-icons/pi";

import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import HTML from "../public/htmlicon.png";
import CSS from "../public/css.png";
import Javascript from "../public/js.png";
import Tailwind from "../public/tailwind.png";
import Vite from "../public/vite.png";
import Postman from "../public/postman.png";
import ReactJS from "../public/react.png";
import Nodejs from "../public/node js.png";
import Mongodb from "../public/mongo db.png";
import Git from "../public/git.png";
import VsCode from "../public/vs code.png";
import Figma from "../public/figma.png";
import Express from "../public/express.png";
import Next from "../public/nextjs.png";
import TypeScript from "../public/typescript.png";
import Bootstrap from "../public/bootstrap.png";
import BookmarkLandingPage from "../public/bookmark-landing-page.png";
import { calculateAge, formatDate } from "@/utils";
import { MdCardTravel, MdMovie } from "react-icons/md";

// Navlinks
export const nav_links = [
  {
    path: "/",
    title: "hero",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/skills",
    title: "skills",
  },
  {
    path: "/projects",
    title: "projects",
  },
  {
    path: "/resume",
    title: "resume",
  },
  {
    path: "/contact",
    title: "contact",
  },
];

export const hero_data = {
  name: "Cesar G. Pizarra",
  subheading: "Let's build something great together!",
  description:
    "I'm an aspiring frontend web developer passionate about bringing innovative and accessible web designs to life.",
};

export const socials = [
  {
    name: "github",
    icon: <FiGithub size={20} />,
    url: "https://github.com/cesarpizarra",
  },
  {
    name: "facebook",
    icon: <FaFacebook size={20} />,
    url: "https://web.facebook.com/cesar.pizarra.1/",
  },
  {
    name: "linkedin",
    icon: <CiLinkedin size={20} />,
    url: "https://www.linkedin.com/in/cesar-pizarra-610336258/",
  },
  {
    name: "instagram",
    icon: <FaInstagram size={20} />,
    url: "https://www.instagram.com/_cezaru_/",
  },
];

export const about = {
  intro: {
    title:
      "Hi there! I'm Cesar, and I'm on a journey to pursue a career in web development. I've always been fascinated by the power of websites and their ability to solve problems and automate processes.",
    subtitle1:
      "Since then, my passion for web development has only grown stronger. I began my dedicated journey in 2022, diving into the world of coding and web technologies. With each project, I aim to push boundaries, deliver exceptional user experiences, and make a positive impact through technology.",
    subtitle2:
      "As I embark on this exciting path, I'm driven by curiosity, a thirst for learning, and a willingness to embrace challenges. I believe that web development holds immense potential, and I'm committed to honing my skills to create innovative web solutions that leave a lasting impression.",
  },
  education: {
    title: "Bachelor of Science in Computer Science",
    school: "Don Mariano Marcos Memorial State University",
  },

  personal_info: {
    birthDay: formatDate("2001-03-22"),
    phoneNumber: "09071656632",
    city: "San Fernando, La Union",
    portfolio: "https://cpizarra.vercel.app",
    age: calculateAge("2001-03-22"),
    degree: "Bachelor of Science in Computer Science",
    email: "cpizarra002@gmail.com",
  },
};

export const interests = [
  {
    icon: <FaCode size={20} />,
    title: "Coding",
    color: "text-green-500",
  },
  {
    icon: <FaBrain size={20} />,
    title: "Learning",
    color: "text-pink-500",
  },
  {
    icon: <MdMovie size={20} />,
    title: "Watching Movies",
    color: "text-orange-500",
  },
  {
    icon: <FaGamepad size={20} />,
    title: "Online Games",
    color: "text-red-500",
  },
  {
    icon: <FaBook size={20} />,
    title: "Reading",
    color: "text-yellow-500",
  },
  {
    icon: <FaCamera size={20} />,
    title: "Photography",
    color: "text-blue-500",
  },
  {
    icon: <MdCardTravel size={20} />,
    title: "Traveling",
    color: "text-purple-500",
  },
  {
    icon: <PiCookingPotDuotone size={20} />,
    title: "Cooking",
    color: "text-amber-500",
  },
];

export const skills = [
  {
    name: "HTML",
    logo: HTML,
  },
  {
    name: "CSS",
    logo: CSS,
  },
  {
    name: "Javascript",
    logo: Javascript,
  },
  {
    name: "TypeScript",
    logo: TypeScript,
  },
  {
    name: "React",
    logo: ReactJS,
  },
  {
    name: "Next Js",
    logo: Next,
  },
  {
    name: "Tailwind",
    logo: Tailwind,
  },
  {
    name: "Bootstrap",
    logo: Bootstrap,
  },
  {
    name: "Node Js",
    logo: Nodejs,
  },
  {
    name: "Express ",
    logo: Express,
  },
  {
    name: "Mongo DB",
    logo: Mongodb,
  },
  {
    name: "Git",
    logo: Git,
  },
  {
    name: "Postman",
    logo: Postman,
  },
  {
    name: "Vite",
    logo: Vite,
  },
  {
    name: "Vs Code",
    logo: VsCode,
  },
  {
    name: "Figma",
    logo: Figma,
  },
];
export const projects = [
  {
    title: "Bookmark Landing Page",
    description:
      "A Bookmark Landing Page challenge from the Frontend Mentor website.",
    tools: ["React.js", "Tailwind Css", "Vite"],
    thumbnail: BookmarkLandingPage,
    icon: <FiGithub size={20} />,
    code: "https://github.com/cesarpizarra/bookmark-landing-page",
    urL: "https://github.com/cesarpizarra/bookmark-landing-page",
  },
  {
    title: "Bookmark Landing Page",
    description:
      "A Bookmark Landing Page challenge from the Frontend Mentor website.",
    tools: ["React.js", "Tailwind Css", "Vite"],
    thumbnail: BookmarkLandingPage,
    icon: <FiGithub size={20} />,
    code: "https://github.com/cesarpizarra/bookmark-landing-page",
    urL: "https://github.com/cesarpizarra/bookmark-landing-page",
  },
  {
    title: "Bookmark Landing Page",
    description:
      "A Bookmark Landing Page challenge from the Frontend Mentor website.",
    tools: ["React.js", "Tailwind Css", "Vite"],
    thumbnail: BookmarkLandingPage,
    icon: <FiGithub size={20} />,
    code: "https://github.com/cesarpizarra/bookmark-landing-page",
    urL: "https://github.com/cesarpizarra/bookmark-landing-page",
  },
];
