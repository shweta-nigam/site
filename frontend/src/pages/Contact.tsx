import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiInstagram,
  SiYoutube,
} from "react-icons/si";

const contacts = [
  {
    icon: <Mail />,
    title: "Email",
    value: "shwetanigam2106@email.com",
    link: "mailto:your@email.com",
  },
  {
    icon: <SiGithub />,
    title: "GitHub",
    value: "@shweta-nigam",
    link: "https://github.com/shweta-nigam",
  },
  {
    icon: <SiLinkedin />,
    title: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/shweta-nigam-1b4b4a322/",
  },
  {
    icon: <SiX />,
    title: "X",
    value: "@shwetanigam_dev",
    link: "https://x.com/shwetanigam_dev",
  },
  {
    icon: <SiInstagram />,
    title: "Instagram",
    value: "@shwetanigamdev",
    link: "https://instagram.com/yourhandle",
  },
  {
    icon: <SiYoutube />,
    title: "YouTube",
    value: "Watch my content",
    link: "https://www.youtube.com/@Shweta_dev",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        py-28 px-6
        bg-[var(--color-bg)]
        text-[var(--color-text)]
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[700px] h-[700px]
          bg-[var(--color-primary)]
          opacity-10 blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      {/* GRID PATTERN */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--pattern-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--pattern-line) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p
            className="
              text-sm uppercase tracking-[0.3em]
              text-[var(--color-primary)]
              mb-4
            "
          >
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Whether you have a project idea, freelance opportunity,
            collaboration, or just want to connect —
            my inbox is always open.
          </p>
        </motion.div>

        {/* CONTACT GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                group relative overflow-hidden
                rounded-3xl p-8
                border border-[var(--border-accent)]
                bg-white/[0.03]
                backdrop-blur-xl
                hover:-translate-y-2
                hover:border-[var(--color-primary)]
                transition-all duration-500
              "
            >
              {/* CARD GLOW */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition duration-500
                "
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(85,247,185,0.15), transparent 60%)",
                }}
              />

              {/* ICON */}
              <div
                className="
                  relative z-10
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center
                  text-2xl
                  bg-[var(--color-primary)]
                  text-black
                  mb-6
                  shadow-lg
                  shadow-[var(--color-primary)]
                "
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 group-hover:text-white transition">
                  {item.value}
                </p>
              </div>

              {/* BORDER LIGHT */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                "
                style={{
                  border: "1px solid rgba(85,247,185,0.25)",
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;