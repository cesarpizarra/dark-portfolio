"use client";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/constant";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
const Projects = () => {
  return (
    <Wrapper>
      <motion.section
        variants={staggerContainer(0.8, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.4 }}
        id="projects"
        className="min-h-screen w-full px-4 py-8"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-3xl font-bold uppercase text-textDark"
        >
          Projects{" "}
          <span className="mb-1 inline-flex h-px w-24 bg-secondary"></span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-sm font-light"
        >
          Here are some of the projects that I built.
        </motion.p>

        <div className="py-12">
          <motion.h1
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            className="mb-2 text-2xl font-semibold text-secondary"
          >
            Featured Projects
          </motion.h1>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.1 }}
            className="grid w-full gap-5 rounded md:grid-cols-2"
          >
            <div className="relative p-3">
              <div className="absolute inset-0 z-999 rounded bg-boxDark"></div>
              <div className="relative left-[-2rem]">
                <Image
                  src="/bookmark-landing-page.png"
                  alt="Bookmark landing page"
                  width="500"
                  height="500"
                  style={{ width: "auto", height: "auto" }}
                  className="rounded"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-textDark md:text-3xl">
                Bookmark Landing Page
              </h3>
              <p className="text-xs font-light">
                A Bookmark Landing Page challenge from the Frontend Mentor
                website.
              </p>

              <div className="flex items-center gap-3">
                {["React", "Tailwind CSS", "Vite"].map((value, i) => (
                  <div
                    key={i}
                    className="rounded-full bg-shadowDark px-4 py-2 text-xs"
                  >
                    {value}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <button className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium duration-300 hover:translate-y-[-5px]">
                  <FiExternalLink />
                  take a look
                </button>
                <div className="cursor-pointer rounded-full bg-shadowDark p-4 duration-300 hover:translate-y-[-5px]">
                  <FiGithub />
                </div>{" "}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="py-12">
          <motion.h1
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            className="mb-2 text-2xl font-semibold text-secondary"
          >
            Other Projects
          </motion.h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", "tween", 0.2, 0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: "false", amount: 0.1 }}
                className="rounded-md bg-boxDark"
              >
                <div>
                  <Image
                    src={proj.thumbnail}
                    width="500"
                    height="500"
                    alt={proj.title}
                    style={{ width: "auto", height: "auto" }}
                    className="rounded-t"
                  />
                </div>

                <div className="flex flex-col gap-4 p-4">
                  <h3 className="text-lg font-semibold">{proj.title}</h3>
                  <p className="text-sm font-light">{proj.description}</p>

                  <div className="flex items-center gap-3">
                    {proj.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="rounded-full bg-shadowDark px-4 py-2 text-xs"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end gap-3">
                    <a
                      href={proj.code}
                      className="cursor-pointer rounded-full bg-shadowDark p-4 duration-300 hover:translate-y-[-5px]"
                    >
                      <FiGithub />{" "}
                    </a>
                    <a
                      href={proj.urL}
                      className="cursor-pointer rounded-full bg-shadowDark p-4 duration-300 hover:translate-y-[-5px]"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Wrapper>
  );
};

export default Projects;
