"use client";
import { about, certificates } from "@/constant";
import Image from "next/image";

import Carousel from "framer-motion-carousel";
const About = () => {
  return (
    <section id="about" className="w-full min-h-screen py-0 md:py-8">
      <h1 className="font-bold text-2xl md:text-4xl">About Me</h1>
      <div className="md:grid grid-cols-2">
        <div className="max-w-xl">
          {about.intro.map((about, i) => (
            <div key={i} className="py-2">
              <p>{about.title}</p>
              <p>{about.subtitle1}</p>
              <p>{about.subtitle2}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center pt-12 md:pt-0">
          <p className="font-medium text-xl pb-2">Certificates</p>
          <Carousel>
            {certificates.map((cert, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={cert.img}
                  width={0}
                  height={400}
                  alt={cert.title}
                  priority={true}
                  draggable={false}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default About;
