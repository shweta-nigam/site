import { motion } from "framer-motion";
import { Code2, Rocket, Brain, Laptop } from "lucide-react";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js / Next.js",
  "Node.js / Express",
  "MongoDB / Prisma",
  "REST APIs",
  "TailwindCSS",
  "Git / GitHub",
];

const About = () => {
  return (
    <section className="min-h-screen bg-D-purple text-white py-20 px-6 md:px-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-gray-200 space-y-6 text-lg leading-relaxed bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg"
      >
        <p>
          I’m a{" "}
          <span className="text-cyan-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          with a strong passion for building interactive, high-performance, and
          scalable web applications. I love combining design and logic to
          deliver smooth user experiences and maintainable backend systems.
        </p>

        <p>
          My expertise lies primarily in the{" "}
          <span className="text-cyan-300">MERN stack</span> — crafting elegant
          frontends using React, TypeScript, and TailwindCSS, while developing
          secure, optimized REST APIs with Node.js, Express, and MongoDB. I’m
          constantly learning and refining my skills to stay aligned with modern
          development practices.
        </p>

        <p>
          I enjoy transforming ideas into reality through code — whether it’s
          building personal projects like{" "}
          <span className="text-cyan-300">ReadGala</span> and{" "}
          <span className="text-cyan-300">FinEase</span>, or experimenting with
          new tools and libraries. My goal is to keep growing, collaborating
          with inspiring people, and creating digital products that make a
          difference.
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16"
      >
        <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Code2 className="text-cyan-400" /> Tech Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-24 grid md:grid-cols-3 gap-8"
      >
        <div className="bg-white/10 rounded-2xl p-8 shadow-lg text-center">
          <Rocket className="text-cyan-400 mb-4 mx-auto" size={36} />
          <h4 className="text-xl font-semibold mb-2">Innovation</h4>
          <p className="text-gray-300 text-sm">
            I enjoy experimenting with new technologies and improving efficiency
            through creative problem-solving.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 shadow-lg text-center">
          <Laptop className="text-cyan-400 mb-4 mx-auto" size={36} />
          <h4 className="text-xl font-semibold mb-2">Craftsmanship</h4>
          <p className="text-gray-300 text-sm">
            I believe good code is clean, scalable, and built with care — each
            line contributing to something meaningful.
          </p>
        </div>

        <div className="bg-white/10 rounded-2xl p-8 shadow-lg text-center">
          <Brain className="text-cyan-400 mb-4 mx-auto" size={36} />
          <h4 className="text-xl font-semibold mb-2">Growth</h4>
          <p className="text-gray-300 text-sm">
            Continuous learning is at the heart of my journey — every project,
            failure, and success is an opportunity to grow.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
