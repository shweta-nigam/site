import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "../data/data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  // detect mobile app project
  const isMobileApp =
    project.title.toLowerCase().includes("mobile") ||
    project.title.toLowerCase().includes("app");

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
        flex flex-col lg:flex-row gap-8
        rounded-3xl p-6 md:p-8
        border border-[var(--border-accent)]
        bg-[var(--bg-color)]
        shadow-xl hover:shadow-2xl
        transition-all duration-300
        overflow-hidden
      "
    >
      {/* VIDEO SECTION */}
      <div
        className={`
          w-full flex justify-center items-center
          ${isMobileApp ? "lg:w-[35%]" : "lg:w-[50%]"}
        `}
      >
        {project.video && (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className={`
              border border-white/10
              shadow-xl rounded-2xl
              object-cover

              ${
                isMobileApp
                  ? `
                    w-[260px]
                    h-[520px]
                  `
                  : `
                    w-full
                    max-w-[650px]
                    aspect-video
                  `
              }
            `}
          />
        )}
      </div>

      {/* CONTENT SECTION */}
      <div
        className={`
          w-full flex flex-col justify-center
          ${isMobileApp ? "lg:w-[65%]" : "lg:w-[50%]"}
        `}
      >
        <div className="space-y-5">
          {/* TITLE */}
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-1.5 rounded-full
                  bg-white/10 border border-white/10
                  text-sm text-gray-200
                  hover:bg-white/20
                  transition
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* FEATURES */}
          <ul className="space-y-2 text-gray-400">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-2.5 rounded-xl
                bg-white/10 hover:bg-white/20
                border border-white/10
                transition-all duration-300
              "
            >
              <SiGithub size={18} />
              <span>Code</span>
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-2.5 rounded-xl
                bg-grey-500 hover:bg-grey-600
                text-white
                transition-all duration-300
              "
            >
              <Globe size={18} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}