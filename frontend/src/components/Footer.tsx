import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-10 bg-D-purple text-gray-300 border-t border-cyan-400/20"
    >
      {/* Top Section - Links */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 gap-6">
        {/* Logo / Name */}
        <motion.h3
          whileHover={{ scale: 1.05 }}
          className="text-xl font-semibold text-white"
        >
          <Link to="/" className="text-cyan-300 "> shwetanigamdev</Link>
        </motion.h3>

        {/* Navigation */}
        <div className="flex gap-6 text-gray-400">
          <Link to="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-cyan-300 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-cyan-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-cyan-300 transition">
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="flex gap-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-cyan-300 transition"
          >
            <SiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-cyan-300 transition"
          >
            <SiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:youremail@gmail.com"
            className="hover:text-cyan-300 transition"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Bottom Copy */}
      <p className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Shweta Nigam. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
