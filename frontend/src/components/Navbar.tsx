import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-lg border-b border-[var(--border-accent)]/40 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/"
            className="text-xl font-bold text-[var(--color-primary)] hover:text-white transition"
          >
            &lt;/&gt;
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-white/70 text-lg transition ${
                  isActive
                    ? "text-[var(--color-primary)] font-semibold"
                    : "hover:text-white "
                }`}
              >
                {link.name}

                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--color-primary)] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--color-accent)] hover:text-white  transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-[var(--color-bg)]/95 backdrop-blur-lg border-t border-[var(--border-accent)]/30 py-4 space-y-4"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition ${
                  isActive
                    ? "text-[var(--color-primary)] font-semibold"
                    : "text-white/70 hover:text-white "
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;