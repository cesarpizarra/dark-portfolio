import Image from "next/image";
import { hero_data, socials } from "@/constant";
const Hero = () => {
  return (
    <section
      id="/"
      className="w-full min-h-screen flex items-center justify-center gap-10"
    >
      <div className="hidden md:block hover:rotate-[-15deg] duration-300">
        <Image
          src="/cezaru.png"
          width={350}
          height={350}
          alt="Picture of the author"
          priority={true}
        />
      </div>

      <div className="w-full">
        <p className="font-medium text-lg md:text-3xl py-4 flex items-center">
          {" "}
          <span className="block md:hidden hover:rotate-[-15deg] duration-300 mr-3">
            <Image
              src="/cezaru.png"
              width={50}
              height={50}
              alt="Picture of the author"
              priority={true}
            />
          </span>
          {hero_data.name}
        </p>
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
          {hero_data.subheading}{" "}
          <span className="text-green-400 py-4">Frontend Developer</span>
        </h1>
        <p className="text-sm md:text-lg py-4">{hero_data.description}</p>

        <div className="flex gap-5">
          {socials.map((social, i) => (
            <div
              key={i}
              className="shadow-lg shadow-[#00473e] rounded-full p-2 md:p-4 hover:scale-125 transition duration-300 cursor-pointer"
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
