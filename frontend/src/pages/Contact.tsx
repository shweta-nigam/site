import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-white bg-D-purple">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Let's Connect
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-200 text-lg md:text-xl max-w-xl text-center mb-10"
      >
        Feel free to reach out for opportunities, collaborations, or just to say
        hi!
      </motion.p>

      {/* Contact Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-lg border border-white/20"
      >
        <form
          action="https://formsubmit.co/shwetanigam2106@gmail.com"
          method="POST"
          className="flex flex-col space-y-5"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Your Message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-gray-300 text-white outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Send Message <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </form>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex space-x-6 mt-10"
      >
        <a
          href="https://github.com/shweta-nigam"
          target="_blank"
          className="text-white hover:scale-125 transition transform"
        >
          <SiGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/shweta-nigam-1b4b4a322/"
          target="_blank"
          className="text-white hover:scale-125 transition transform"
        >
          <SiLinkedin size={28} />
        </a>
        <a
          href="shwetanigam2106@gmail.com"
          className="text-white hover:scale-125 transition transform"
        >
          <SiGmail size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
