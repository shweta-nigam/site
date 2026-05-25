import Project from "./Project";
import Blog from "./Blog";
import Contact from "./Contact";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: FaReact, color: "#61DBFB" },

  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },

  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },

  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },

  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
];
function Home() {
  return (
    <>
      {/* hero section */}
      <section className="relative min-h-screen bg-black text-white">
        <div className="min-h-screen bg-black text-white px-6 py-10 flex justify-between ">
          {/* left side */}
          <div className="flex flex-col justify-center px-12 gap-6 leaf-card lg:mt-6">
            <div>
              <h1 className="text-4xl font-bold leading-tight">
                Full Stack Developer <br />
                Focused on Modern Web Applications
              </h1>

              <p className="mt-4 text-gray-400 max-w-xl">
                I build scalable and responsive web applications using
                technologies like React, Node.js, and modern backend systems. I
                enjoy creating clean, efficient, and user-focused solutions.
                <br />
                <br />
                Currently exploring mobile development with React Native.
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <button className="btn btn-primary">View Resume</button>
              <button className="btn btn-outline">View Projects</button>
            </div>
          </div>
        </div>

        {/* stance */}
        <article className="absolute right-12 top-0 h-full  lg:mr-12 ">
          <div className="stacks">
            <div className="stack criss-cross criss-cross--animated"></div>
            <div className="stack criss-cross criss-cross--animated"></div>
            <div className="stack criss-cross criss-cross--animated"></div>
          </div>
        </article>
      </section>

      {/* tech stack */}
      <section className="w-full criss-cross py-14 border border-[var(--border-accent)] rounded-xl">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 p-6">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="
            bg-[var(--color-bg)]
            border border-[var(--border-accent)]
            rounded-xl
            flex flex-col items-center justify-center
            p-6 gap-2
            transition-all duration-200 ease-in-out
            hover:-translate-y-1
            hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
          "
              >
                <Icon size={28} color={tech.color} />
                <p className="text-sm">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* project section */}
      <Project />
      <Blog />
      <Contact />
    </>
  );
}

export default Home;
