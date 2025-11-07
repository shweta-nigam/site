import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-D-purple text-white px-8 md:px-20">
      {/* Left Section - Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-start justify-center text-left space-y-6 pt-12"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-cyan-300">a MERN Stack Developer</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
          Full Stack Developer passionate about building modern and scalable
          web applications using{" "}
          <span className="font-semibold text-white">
            MongoDB, Express, React, and Node.js
          </span>.
        </p>

        {/* Buttons */}
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

        {/* Social Links */}
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

      {/* Right Section - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 flex items-center justify-center mt-10 md:mt-0"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-900/50">
          <img
            src="/assets/profile.png" // 👉 replace with your image path
            alt="Developer portrait"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

