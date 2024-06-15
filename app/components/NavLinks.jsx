"use client";
import { useEffect, useState } from "react";
import { nav_links } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  headerLinksVariants,
  navContainer,
  navItem,
  navList,
  staggerContainer,
} from "@/utils/motion";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up to set overflow back to auto
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <div className="absolute right-0 top-3 z-999999 flex lg:hidden">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
      </div>

      {/* Desktop Links */}
      <motion.nav
        variants={staggerContainer(0.4, 0.2)}
        initial="hidden"
        animate="show"
      >
        <ul className="mt-5 hidden items-center gap-4 lg:flex">
          {nav_links.map((link, i) => (
            <Link href={link.path} key={i}>
              <motion.li
                variants={pathName === "/" && headerLinksVariants}
                className={`relative block cursor-pointer capitalize text-gray ${
                  link.path === pathName
                    ? "after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-50 after:bg-secondary after:content-['']"
                    : "after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-secondary after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
                }`}
              >
                {link.title}
              </motion.li>
            </Link>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Links */}
      {isOpen && (
        <AnimatePresence>
          <motion.nav
            animate={isOpen ? "visible" : "hidden"}
            variants={navContainer}
            exit="hidden"
            className="absolute bottom-0 left-0 right-0 top-0 z-99999 flex h-screen flex-col items-center justify-center bg-dark lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navList}
              className="flex flex-col items-center gap-4"
            >
              {nav_links.map((link, i) => (
                <Link href={link.path} key={i} onClick={() => setIsOpen(false)}>
                  <motion.li
                    variants={navItem}
                    className={`relative block cursor-pointer capitalize text-gray ${
                      link.path === pathName
                        ? "after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-50 after:bg-secondary after:content-['']"
                        : "after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-secondary after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
                    }`}
                  >
                    {link.title}
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavLinks;
