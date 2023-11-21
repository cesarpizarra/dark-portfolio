import About from "./sections/About";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="w-full max-w-[1240px] mx-auto px-4">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
