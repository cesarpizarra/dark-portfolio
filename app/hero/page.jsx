"use client";
import { hero_data } from "@/constant";
import Layout from "../components/Layout";
import NavLinks from "../components/NavLinks";
import Socials from "../components/Socials";
import { motion } from "framer-motion";
import { fade, staggerContainer } from "@/utils/motion";
const Hero = () => {
  return (
    <Layout>
      <motion.section
        variants={staggerContainer(0.4, 1.3)}
        initial="hidden"
        animate="show"
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-2 lg:items-start">
          <motion.h1
            variants={fade(0.8, 0.3)}
            className="text-4xl font-bold lg:text-6xl"
          >
            {hero_data.name}
          </motion.h1>

          <motion.p
            variants={fade(0.8, 0.4)}
            className="text-xl font-medium text-secondary md:text-2xl"
          >
            {hero_data.subheading}
          </motion.p>
          <motion.p
            variants={fade(0.8, 0.5)}
            className="text-center text-sm font-light"
          >
            {hero_data.description}
          </motion.p>
          <NavLinks />
          <div className="mt-4">
            <Socials />
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Hero;
