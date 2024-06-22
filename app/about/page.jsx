"use client";
import { about, interests } from "@/constant";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import { TbMathGreater } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
const About = () => {
  return (
    <Wrapper>
      <motion.section
        variants={staggerContainer(0.8, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.4 }}
        id="about"
        className="min-h-screen w-full py-8"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.4 }}
          className="text-3xl font-bold uppercase text-textDark"
        >
          About Me{" "}
          <span className="mb-1 inline-flex h-px w-24 bg-secondary"></span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.4 }}
          className="text-sm font-light"
        >
          What i love to do?
        </motion.p>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.1 }}
          className="grid py-8 lg:grid-cols-2"
        >
          <div className="mx-auto max-w-md">
            <Image
              src="/cesar.png"
              width="500"
              height="500"
              alt="My Image"
              style={{ width: "auto", height: "auto" }}
              className="rounded-md"
            />
          </div>

          <div>
            <h1 className="text-2xl font-medium uppercase text-secondary">
              Front-End Developer
            </h1>

            <p className="text-sm font-light">{about.intro.title}</p>

            <div className="py-4">
              <ul className="grid gap-4 lg:grid-cols-2">
                {Object.entries(about.personal_info).map(
                  ([key, value], index) => (
                    <li key={index} className="flex items-center gap-2">
                      <TbMathGreater
                        className="font-semibold text-secondary"
                        size={15}
                      />
                      <p className="text-sm font-medium capitalize">
                        {key === "birthDay"
                          ? "Birth Date"
                          : key === "phoneNumber"
                            ? "Phone Number"
                            : key}
                        :{" "}
                      </p>
                      <span className="text-xs font-light">{value}</span>
                    </li>
                  ),
                )}
              </ul>

              <div className="pt-10">
                <p className="text-sm font-light">{about.intro.subtitle1}</p>
                <p className="mt-4 text-sm font-light">
                  {about.intro.subtitle2}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.1 }}
            className="text-md flex items-center gap-2 font-medium uppercase text-textDark"
          >
            Interests
            <span className="h-px w-24 bg-secondary"></span>
          </motion.h1>

          <div className="grid gap-5 pt-5 sm:grid-cols-2 md:grid-cols-4">
            {interests.map((interest, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", "tween", 0.2, 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 rounded-md bg-boxDark p-4 text-xs"
              >
                <span>{interest.icon}</span>
                <p>{interest.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Wrapper>
  );
};

export default About;
