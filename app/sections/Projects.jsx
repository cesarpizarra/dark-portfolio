import { projects } from "@/constant";
import Image from "next/image";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen py-8 md:py-0 pt-24 md:pt-0"
    >
      <h1 className="font-bold text-2xl md:text-4xl">Projects</h1>
      <p className="text-sm">Here are some of the projects that I built.</p>

      <div className="">
        {projects.map((project, i) => (
          <div key={i} className="md:flex py-8 gap-12">
            <Image
              src={project.image}
              width={500}
              height={500}
              alt={project.title}
              priority={true}
              draggable={false}
            />
            <div className="flex flex-col py-5">
              <h1 className="font-bold text-xl md:text-3xl">{project.title}</h1>
              <p className="text-sm">{project.description}</p>

              <div className="flex items-center gap-3 pt-5">
                {project.tools &&
                  project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-[#c6d2d1] px-4 text-sm py-1 rounded-full lowercase"
                    >
                      {tool}
                    </span>
                  ))}
              </div>
              <div className="pt-8 flex items-center gap-5">
                <a
                  href={project.urL}
                  className="bg-green-500 px-5 py-2 rounded-md text-white hover:translate-y-[-10px] duration-300"
                >
                  take a look
                </a>
                <a
                  href={project.code}
                  className="shadow-lg shadow-[#00331ab9] rounded-full p-2 md:p-4 hover:translate-y-[-10px] duration-300 cursor-pointer "
                >
                  {project.icon}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
