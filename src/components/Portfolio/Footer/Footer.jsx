import styles from "./Footer.module.css";

function Footer({ onNavigate }) {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links}>
        <button onClick={() => onNavigate?.("experience")}>Experience</button>
        <button onClick={() => onNavigate?.("projects")}>Projects</button>
        <a href="https://github.com/AmanCantCode" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/aman-bhayani" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:amanbhayani608@gmail.com">Contact</a>
      </nav>
      <small>© 2026 AMAN BHAYANI</small>
    </footer>
  );
}

export default Footer;
