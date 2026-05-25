function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Left */}
        <div className="footer-left">
          <h2>shwetacodes</h2>
          <p>Building clean & thoughtful web experiences</p>
        </div>

        {/* Right */}
        <div className="footer-right">
          <a href="#projects">Projects</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Shweta Nigam
      </div>
    </footer>
  );
}

export default Footer;