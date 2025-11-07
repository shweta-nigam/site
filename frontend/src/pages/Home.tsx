import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#00241F] via-[#540979] to-[#0066FF] text-white px-6 py-20">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-blue-300">Full Stack Developer</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          MERN Stack Enthusiast ⚡
        </h2>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          I design and build responsive, high-performance web applications using
          modern technologies — <span className="font-semibold">MongoDB</span>,{" "}
          <span className="font-semibold">Express</span>,{" "}
          <span className="font-semibold">React</span>, and{" "}
          <span className="font-semibold">Node.js</span>.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-2xl font-semibold transition-all"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center border border-white/50 hover:bg-white/10 px-6 py-3 rounded-2xl font-semibold transition-all"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Floating Icon */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center text-sm text-gray-300"
      >
        <Code2 className="w-6 h-6 mb-1 text-blue-300 animate-bounce" />
        <p>Scroll to explore more</p>
      </motion.div>
    </section>
  );
}
