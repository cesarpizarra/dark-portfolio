import { skills } from "@/constant";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen pt-24 md:pt-0">
      <h1 className="font-bold text-2xl md:text-4xl">Skills</h1>
      <p className="text-sm">These are the technologies and tools I use</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 pt-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="shadow-xl  p-4 rounded-md flex items-center gap-4 hover:translate-y-[-5px] duration-300"
          >
            <Image src={skill.logo} alt={skill.name} width={35} height={35} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
