import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#00241F] via-[#540979] to-[#0066FF] text-white px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-cyan-300">a MERN Stack Developer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Full Stack Developer passionate about building dynamic web apps using
          <span className="font-semibold"> MongoDB, Express, React, and Node.js</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
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

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10">
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

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} MERN Stack Developer Portfolio
      </footer>
    </div>
  );
};

export default Home;

