"use client";
import Wrapper from "../components/Wrapper";
import { FaLocationDot } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineEmail, MdAddIcCall } from "react-icons/md";
import Image from "next/image";
import { socials } from "@/constant";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Contact = () => {
  return (
    <Wrapper>
      <motion.section
        variants={staggerContainer(0.8, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.4 }}
        id="contact"
        className="min-h-screen w-full py-8"
      >
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-3xl font-bold uppercase text-textDark"
        >
          Contact{" "}
          <span className="mb-1 inline-flex h-px w-24 bg-secondary"></span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="text-sm font-light"
        >
          Contact me.
        </motion.p>

        <div className="py-8">
          <div className="mb-4">
            <motion.p
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className="text-sm font-light"
            >
              I am actively seeking opportunities as a web developer and would
              love to contribute to real projects while expanding my skill set.
              If you&apos;re interested, don&apos;t hesitate to reach out.
              I&apos;m always available to connect and discuss potential
              collaborations.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.1, 0.6)}
            className="grid gap-5 md:grid-cols-2"
          >
            <div className="flex items-center rounded bg-boxDark p-4">
              <div className="flex items-center gap-5">
                <FaLocationDot size={25} className="text-secondary" />
                <div className="flex flex-col">
                  <h1 className="text-xl font-medium text-textDark">
                    My Address
                  </h1>
                  <p className="text-xs font-light">
                    Leones East Tubao, La Union
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center rounded bg-boxDark p-4">
              <div className="flex items-center gap-5">
                <FiShare2 size={25} className="text-secondary" />
                <div className="flex flex-col">
                  <span className="text-xl font-medium text-textDark">
                    Social Profiles
                  </span>
                  <div className="flex items-center gap-2 pt-px">
                    {socials.map((social, i) => (
                      <a
                        href={social.url}
                        key={i}
                        className={`cursor-pointer rounded-full bg-shadowDark p-2 duration-300 hover:translate-y-[-5px] hover:bg-secondary`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center rounded bg-boxDark p-4">
              <div className="flex items-center gap-5">
                <MdOutlineEmail size={25} className="text-secondary" />
                <div className="flex flex-col">
                  <h1 className="text-xl font-medium text-textDark">
                    Email Me
                  </h1>
                  <p className="text-xs font-light">cpizarra002@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center rounded bg-boxDark p-4">
              <div className="flex items-center gap-5">
                <MdAddIcCall size={25} className="text-secondary" />
                <div className="flex flex-col">
                  <h1 className="text-xl font-medium text-textDark">Call Me</h1>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/ph.png"
                      width="15"
                      height="15"
                      alt="philippines"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <p className="text-xs font-light">09071656632</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Wrapper>
  );
};

export default Contact;
