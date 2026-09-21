import { useEffect } from "react";
import styles from "./HighlightModal.module.css";

function HighlightModal({ item, onClose }) {
  useEffect(() => {
    const key = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} onMouseDown={onClose}>
      <button className={styles.close} onClick={onClose}>
        <span className="material-symbols-outlined">close</span>
      </button>

      <div className={styles.story} onMouseDown={(e) => e.stopPropagation()}>
        <div className={styles.progress}>
          <span className={styles.filled} />
        </div>

        <div className={styles.storyHeader}>
          <div className={styles.avatar}>AB</div>
          <div>
            <strong>aman.bhayani</strong>
            <span>{item.name}</span>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.iconCircle}>
            <span className="material-symbols-outlined">{item.icon}</span>
          </div>
          <h2>{item.name}</h2>
          <div className={styles.items}>
            {item.items.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightModal;
