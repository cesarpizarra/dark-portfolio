import React from "react";
import { socials } from "@/constant";
import { motion } from "framer-motion";
import { socialVariants, staggerContainer } from "@/utils/motion";
const Socials = () => {
  return (
    <motion.div
      variants={staggerContainer(0.4, 0.2)}
      initial="hidden"
      animate="show"
      className="flex items-center gap-4"
    >
      {socials.map((social, i) => (
        <motion.a
          variants={socialVariants}
          href={social.url}
          key={i}
          className={`cursor-pointer rounded-full bg-shadowDark p-2 duration-300 hover:translate-y-[-5px] hover:bg-secondary ${(social.name === "facebook" || social.name === "linkedin") && "text-dark hover:text-white sm:text-white sm:hover:text-white"}`}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Socials;
