import { motion } from "framer-motion";
import { Github, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "ReadGala - Online Book Store",
    description:
      "A full-stack MERN online bookstore that allows users to browse, purchase, and manage books seamlessly. It features secure authentication, a powerful search system, email notifications, and a modern shopping UI built with React and TailwindCSS.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "TailwindCSS",
    ],
    features: [
      "🔐 User authentication & JWT security",
      "📚 Book browsing and purchase flow",
      "📧 Email notifications using Nodemailer",
      "⚡ Backend built with Express & Prisma ORM",
      "🎨 Responsive frontend with TailwindCSS & Framer Motion",
    ],
    github: "https://github.com/your-username/ReadGala",
    live: "https://readgala.vercel.app",
    image: "/assets/readgala-preview.png",
  },
  {
    id: 2,
    title: "FinEase - Personal Finance Tracker",
    description:
      "FinEase is a modern personal finance tracking platform that helps users manage budgets, track expenses, and visualize financial data in real-time. It includes authentication, Google OAuth, charts, and email verification.",
    techStack: [
      "React + TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "TailwindCSS",
      "ShadCN UI",
    ],
    features: [
      "📊 Dashboard with category-wise expense charts",
      "💸 Add, update & manage budgets and expenses",
      "🔐 JWT + Google OAuth authentication",
      "📬 Email verification via Nodemailer",
      "🎨 Built with React + TailwindCSS + ShadCN",
    ],
    github: "https://github.com/your-username/FinEase",
    live: "https://finease.vercel.app",
    image: "/assets/finease-preview.png",
  },
];

const Project = () => {
  return (
    <section className="min-h-screen bg-D-purple text-white py-16 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // className={`flex flex-col md:flex-row ${
            //   index % 2 !== 0 ? "md:flex-row-reverse" : ""
            // } items-center gap-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow`}
            className="flex flex-col md:flex-row items-center gap-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"

          >
            <div className="md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg border border-white/10"
              />
            </div>

            <div className="md:w-1/2 space-y-4">
              <h3 className="text-3xl font-semibold">{project.title}</h3>
              <p className="text-gray-200 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc pl-6 text-gray-300 mt-4 space-y-1">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="flex gap-4 mt-6">
                <Link
                  to={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform"
                >
                  <Github size={18} /> Code
                </Link>
                <Link
                  to={project.live}
                  target="_blank"
                  className="flex items-center gap-2 bg-gradient-to-r from-[#540979] to-[#0066FF] px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform"
                >
                  <Globe size={18} /> Live
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-lg font-medium hover:underline"
        >
          Want to collaborate? Let’s connect <ArrowRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Project;
