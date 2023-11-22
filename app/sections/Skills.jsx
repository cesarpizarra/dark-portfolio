import { skills } from "@/constant";
import Image from "next/image";
import { FaCode, FaCodeBranch, FaBrain } from "react-icons/fa";
const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen py-0 md:py-8">
      <h1 className="font-bold text-2xl md:text-4xl">Skills</h1>
      <p className="text-sm">These are the technologies and tools I use</p>

      <div className="grid md:grid-cols-3 gap-5">
        {/* Frontend */}
        <div className="shadow-xl rounded-md">
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="flex items-center gap-4">
              <FaCode size={35} />
              <p className="font-bold"> Frontend Developer</p>
            </div>
            <p className="text-sm">More than 2 years</p>
          </div>
          <div className="grid grid-cols-3  pb-20 pt-10 px-3">
            {skills.front_end.map((frontend, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <div className="shadow-xl p-4 rounded-full hover:scale-110 transition duration-300">
                  <Image
                    src={frontend.logo}
                    alt={frontend.name}
                    width={35}
                    height={35}
                  />
                </div>
                <p className="text-sm">{frontend.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-xl rounded-md">
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="flex items-center gap-4">
              <FaCodeBranch size={35} />
              <p className="font-bold"> Backend Developer</p>
            </div>
            <p className="text-sm">6 months experience</p>
          </div>
          <div className="grid grid-cols-3  pb-20 pt-10 px-3">
            {skills.backend.map((backend, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <div className="shadow-xl p-4 rounded-full hover:scale-110 transition duration-300">
                  <Image
                    src={backend.logo}
                    alt={backend.name}
                    width={35}
                    height={35}
                  />
                </div>
                <p className="text-sm">{backend.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="shadow-xl rounded-md">
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="flex items-center gap-4">
              <FaBrain size={35} />
              <p className="font-bold"> Others</p>
            </div>
            <p className="text-sm">Aquired Skills</p>
          </div>
          <div className="grid grid-cols-3  pb-20 pt-10 px-3">
            {skills.others.map((others, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <div className="shadow-xl p-4 rounded-full hover:scale-110 transition duration-300">
                  <Image
                    src={others.logo}
                    alt={others.name}
                    width={35}
                    height={35}
                  />
                </div>
                <p className="text-sm">{others.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
