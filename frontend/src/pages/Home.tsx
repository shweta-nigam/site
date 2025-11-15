import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-D-purple text-white">
      {/* --------------------- HERO SECTION --------------------- */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-20 py-24">
        
        {/* Left - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-300">a MERN Stack Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            I build modern, scalable and user-focused applications using{" "}
            <span className="font-semibold text-white">
              MongoDB, Express, React, and Node.js.
            </span>{" "}
            Passionate about clean UI, performance and end-to-end development.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-2xl flex items-center gap-2 transition-all"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 border border-cyan-400 hover:bg-cyan-400 hover:text-black rounded-2xl transition-all"
            >
              Contact Me
            </Link>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-900/50">
            <img
              src="/dev-img.png"
              alt="Developer portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* --------------------- TECH STACK --------------------- */}
      <section className="py-16 bg-[#0f001c]/50 backdrop-blur-sm">
        <h2 className="text-center text-3xl font-bold mb-10">
          Tech Stack & Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-10 text-gray-300 text-lg">
          <div className="flex flex-col items-center gap-2">
            <SiMongodb size={35} className="text-green-400" />
            MongoDB
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiExpress size={35} />
            Express
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiReact size={35} className="text-cyan-300" />
            React
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiNodedotjs size={35} className="text-green-500" />
            Node.js
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiJavascript size={35} className="text-yellow-400" />
            JavaScript
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTypescript size={35} className="text-blue-400" />
            TypeScript
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiTailwindcss size={35} className="text-cyan-300" />
            TailwindCSS
          </div>
          <div className="flex flex-col items-center gap-2">
            <SiGit size={35} className="text-orange-400" />
            Git
          </div>
        </div>
      </section>

      {/* --------------------- FEATURED PROJECTS --------------------- */}
      <section className="py-20 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#150026] p-6 rounded-2xl border border-cyan-700/40 hover:border-cyan-400 transition shadow-lg"
          >
            <h3 className="text-xl font-bold">Project One</h3>
            <p className="text-gray-300 mt-2">
              Short description of your first featured MERN project. Explain the
              key idea in one sentence.
            </p>
            <Link
              to="/projects"
              className="text-cyan-300 mt-4 inline-block hover:text-cyan-200"
            >
              View Project →
            </Link>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#150026] p-6 rounded-2xl border border-cyan-700/40 hover:border-cyan-400 transition shadow-lg"
          >
            <h3 className="text-xl font-bold">Project Two</h3>
            <p className="text-gray-300 mt-2">
              Short description of your second featured project. Mention the tech
              used or the main feature.
            </p>
            <Link
              to="/projects"
              className="text-cyan-300 mt-4 inline-block hover:text-cyan-200"
            >
              View Project →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --------------------- MINI ABOUT --------------------- */}
      <section className="py-20 px-8 md:px-20 bg-[#0d0015]">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          I'm a MERN Stack Developer focused on building responsive, user-friendly
          and high-performance applications. I enjoy creating clean UI, solving 
          logical problems and understanding systems end-to-end. Always learning, 
          improving and working on exciting projects.
        </p>

        <div className="flex justify-center mt-8">
          <Link
            to="/about"
            className="px-6 py-3 border border-cyan-400 hover:bg-cyan-400 hover:text-black rounded-2xl transition-all"
          >
            More About Me
          </Link>
        </div>
      </section>

      {/* --------------------- CONTACT CTA --------------------- */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="text-gray-300 mt-2 text-lg">
          Have a project idea or want to collaborate?
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-2xl transition-all"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default Home;
