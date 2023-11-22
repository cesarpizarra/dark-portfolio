import { about } from "@/constant";
const About = () => {
  return (
    <section id="about" className="w-full min-h-screen">
      <h1 className="font-bold text-2xl md:text-4xl">About</h1>

      <div>
        {about.intro.map((about, i) => (
          <div key={i}>
            <p>{about.title}</p>
            <p>{about.subtitle1}</p>
            <p>{about.subtitle2}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
