import About from "./sections/About";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="w-full max-w-[1240px] mx-auto px-4">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
