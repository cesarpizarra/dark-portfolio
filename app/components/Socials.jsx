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
          className={`l cursor-pointer rounded-full bg-[#222] p-2 duration-300 hover:translate-y-[-5px] hover:bg-secondary lg:bg-shadowDark`}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Socials;
