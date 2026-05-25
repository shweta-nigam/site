import ProjectCard from "./ProjectCard";
import { projects } from "../data/data";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="flex justify-center relative">
        {/* LEFT SIDE (cards) */}
        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* RIGHT SIDE (brace + label) */}
        <div className="web-aside">
          {/* SHARP CURLY BRACE */}
          <svg
            className="width-[80%] h-full"
            viewBox="0 0 100 600"
            preserveAspectRatio="none"
          >
            <path
              d="
      M20 0
      C80 0, 80 80, 50 120
      C30 150, 30 220, 50 260
      
      L70 300
      L50 340
      
      C30 380, 30 450, 50 480
      C80 520, 80 600, 20 600
    "
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
            />
          </svg>

          <div className="section-label">WEB DEV</div>
        </div>

        {/* Gradient */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(84, 9, 121, 1)" />
              <stop offset="100%" stopColor="rgba(0, 102, 255, 1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
