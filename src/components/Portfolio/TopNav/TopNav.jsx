import { useEffect, useState } from "react";
import styles from "./TopNav.module.css";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function TopNav({ onExplore }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
  const isMobileDrawer = window.matchMedia("(max-width: 699px)").matches;
  document.body.style.overflow = menuOpen && isMobileDrawer ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToProjects = () => {
    onExplore?.("projects");

    requestAnimationFrame(() => {
      const tabs = document.getElementById("profile-tabs");

      if (!tabs) return;

      const y = tabs.getBoundingClientRect().top + window.scrollY - 60;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    });
  };
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <button className={styles.brand} onClick={scrollTop}>
          <span>Portfolio - Aman Bhayani</span>
        </button>

        <div className={styles.rightGroup}>
          <div className={`${styles.icons} ${menuOpen ? styles.iconsOpen : ""}`}>
            <button title="Home" onClick={scrollTop}>
              <span className="material-symbols-outlined">home</span>
            </button>
            <a title="Email" href="mailto:amanbhayani608@gmail.com">
              <span className="material-symbols-outlined">send</span>
            </a>
            <button title="Projects" onClick={scrollToProjects}>
              <span className="material-symbols-outlined">explore</span>
            </button>
            <button
              title={theme === "dark" ? "Light mode" : "Dark mode"}
              onClick={toggleTheme}
            >
              <span className="material-symbols-outlined">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <button className={styles.avatar} title="Profile" onClick={scrollTop}>
              AB
            </button>
          </div>

          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            title={menuOpen ? "Close menu" : "Menu"}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`} />
          </button>
        </div>

        <div className={styles.mobileBar}>
          <span className={styles.mobileTitle}>Portfolio - Aman Bhayani</span>
          <button title="Menu" onClick={() => setMenuOpen(true)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={closeMenu}
      />

      <div className={`${styles.panel} ${menuOpen ? styles.panelOpen : ""}`}>
        <button className={styles.panelClose} title="Close" onClick={closeMenu}>
          <span className="material-symbols-outlined">close</span>
        </button>

        <button
          className={styles.panelItem}
          onClick={() => {
            scrollTop();
            closeMenu();
          }}
        >
          <span className="material-symbols-outlined">home</span>
          Home
        </button>

        <a
          className={styles.panelItem}
          href="mailto:amanbhayani608@gmail.com"
          onClick={closeMenu}
        >
          <span className="material-symbols-outlined">send</span>
          Email
        </a>

        <button
          className={styles.panelItem}
          onClick={() => {
            closeMenu();
            scrollToProjects();
          }}
        >
          <span className="material-symbols-outlined">explore</span>
          Projects
        </button>

        <button className={styles.panelItem} onClick={toggleTheme}>
          <span className="material-symbols-outlined">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </nav>
  );
}

export default TopNav;