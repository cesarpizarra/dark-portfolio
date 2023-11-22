"use client";
import React, { useState, useEffect } from "react";
import { nav_links } from "@/constant";
import { LuMoonStar } from "react-icons/lu";
import { MdLightMode } from "react-icons/md";
import Link from "next/link";
const Header = () => {
  const [toggleMode, setToggleMode] = useState(false);
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  const handleToggle = () => {
    setToggleMode(!toggleMode);
  };
  return (
    <header
      className={`flex items-center justify-between py-8 ${
        header ? "border-b border-2" : ""
      } `}
    >
      <h2 className="font-medium text-lg md:text-2xl">@cezaru.</h2>
      <ul className="flex items-center">
        {nav_links.map((link, i) => (
          <Link key={i} href={link.path}>
            <li className="hidden md:flex px-4 font-medium cursor-pointer hover:text-green-400">
              {link.title}
            </li>
          </Link>
        ))}
        <div
          onClick={handleToggle}
          className="text-2xl md:text-3xl cursor-pointer"
        >
          {!toggleMode ? <LuMoonStar /> : <MdLightMode />}
        </div>
      </ul>
    </header>
  );
};

export default Header;
