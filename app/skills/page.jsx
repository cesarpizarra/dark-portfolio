"use client";
import { skills } from "@/constant";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
const Skills = () => {
  return (
    <Wrapper>
      <motion.section
        variants={staggerContainer(0.8, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.4 }}
        id="skills"
        className="min-h-screen w-full py-8"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.4 }}
          className="text-3xl font-bold uppercase text-textDark"
        >
          Skills{" "}
          <span className="mb-1 inline-flex h-px w-24 bg-secondary"></span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.4 }}
          className="text-sm font-light"
        >
          These are the technologies and tools I use.
        </motion.p>

        <div className="grid gap-5 pt-5 sm:grid-cols-2 md:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", "tween", 0.2, 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: "false", amount: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 rounded-md bg-boxDark p-4"
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                width="35"
                height="35"
                style={{ width: "auto", height: "auto" }}
              />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Wrapper>
  );
};

export default Skills;
