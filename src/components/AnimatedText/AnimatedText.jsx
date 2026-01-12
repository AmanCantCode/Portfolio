import styles from "./AnimatedText.module.css";

function AnimatedText({
  text,
  as: Tag = "h1",
  stagger = 40,
  className = ""
}) {
  return (
    <Tag className={`${styles.title} ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i} className={styles.char}>
          <span
            className={styles.top}
            style={{ transitionDelay: `${i * stagger}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
          <span
            className={styles.bottom}
            style={{ transitionDelay: `${i * stagger}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export default AnimatedText;
