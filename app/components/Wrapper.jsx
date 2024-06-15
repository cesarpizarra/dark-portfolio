import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
const Wrapper = ({ children }) => {
  return (
    <div className="left-0 top-0 z-999999 mx-auto h-full min-h-screen w-full max-w-[1320px] bg-black/70 px-4 py-5">
      <div>
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="cursor-pointer">
              <Image src="/logo.png" alt="logo" width="40" height="40" />
            </div>
          </Link>
          <NavLinks />
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
