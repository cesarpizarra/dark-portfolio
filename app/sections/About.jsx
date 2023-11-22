import { about } from "@/constant";
import Image from "next/image";
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
          <p className="font-bold text-2xl pb-2">Certificates</p>
          <Image
            src="/free_code.png"
            width={350}
            height={350}
            alt="Picture of the Cert"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
