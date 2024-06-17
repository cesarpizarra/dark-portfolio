"use client";
import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { fade, staggerContainer } from "@/utils/motion";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();

  return (
    <motion.section
      variants={staggerContainer(0.4, 1.3)}
      initial="hidden"
      animate="show"
    >
      <div className="fixed bottom-4 right-4 z-999999 text-white">
        <motion.p
          variants={pathName === "/" && fade(0.8, 0.3)}
          className="hidden items-center gap-2 text-sm font-light lg:flex"
        >
          Created With <SiNextdotjs /> by Cesar G. Pizarra
        </motion.p>
      </div>

      <div className="0 fixed bottom-0 left-0 right-0 text-white">
        <motion.p
          variants={pathName === "/" && fade(0.8, 0.3)}
          className="flex items-center gap-2 bg-black text-sm font-light lg:hidden"
        >
          Created With <SiNextdotjs /> by Cesar G. Pizarra
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Footer;
