function Footer() {
  return (
    <footer
      className="relative mt-24 overflow-hidden rounded-t-[28px] border border-white/10"
      style={{
        background: `
          radial-gradient(circle at top left, var(--pattern-glow), transparent 35%),
          radial-gradient(circle at bottom right, rgba(34, 62, 221, 0.18), transparent 30%),
          var(--color-bg)
        `,
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "var(--gradient-primary)",
        }}
      />

      {/* Top Glow Line */}
      <div
        className="absolute top-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border-accent), transparent)",
          boxShadow: "0 0 18px var(--border-accent)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 px-6 md:px-12 py-14">
        {/* Left */}
        <div>
          <h2
            className="text-4xl font-extrabold tracking-tight"
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary), #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            shwetacodes
          </h2>

          <p className="mt-4 max-w-md text-white/70 leading-7">
            Building clean, interactive & thoughtful digital experiences with
            modern web technologies.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-4">
          {["Projects", "Blogs", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative overflow-hidden rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {/* Hover Glow */}
              <span
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(28,204,137,0.18), rgba(34,62,221,0.18))",
                }}
              />

              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Shweta Nigam
      </div>
    </footer>
  );
}

export default Footer;