import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import AnimatedText from "../AnimatedText/AnimatedText.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null); // ref for side panel

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={styles.hero}>
      <nav className={styles.nav_bar}>
        <div className={styles.nav_left}>Welcome to my portfolio</div>

        {/* Desktop nav */}
        <ul className={styles.nav_links}>
          <li><a href="#about_section">About</a></li>
          <li><a href="#experience_section">Experience</a></li>
          <li><a href="#projects_section">Projects</a></li>
          <li><a href="#skills_section">Skills</a></li>
        </ul>

        {/* Mobile menu button */}
        <button
          className={styles.menu_btn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile side panel */}
      <div
        ref={panelRef}
        className={`${styles.side_panel} ${menuOpen ? styles.open : ""}`}
      >
        <a href="#about_section" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#experience_section" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects_section" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#skills_section" onClick={() => setMenuOpen(false)}>Skills</a>
      </div>

      <div className={styles.hero_text}>
        <AnimatedText text="AMAN BHAYANI" />
        <p>Kennesaw State University ⋅ Computer Science Student</p>
        <p>4.0 GPA ⋅ Dean's List</p>
      </div>
    </div>
  );
}

export default Header;
