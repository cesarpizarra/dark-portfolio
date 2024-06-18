"use client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Wrapper from "../components/Wrapper";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <Wrapper>
      <motion.section
        variants={staggerContainer(0.8, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.4 }}
        id="resume"
        className="min-h-screen w-full py-8"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.4 }}
          className="text-3xl font-bold uppercase text-textDark"
        >
          Resume{" "}
          <span className="mb-1 inline-flex h-px w-24 bg-secondary"></span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.4 }}
          className="text-sm font-light"
        >
          Check my resume.
        </motion.p>
      </motion.section>
    </Wrapper>
  );
};

export default Resume;
