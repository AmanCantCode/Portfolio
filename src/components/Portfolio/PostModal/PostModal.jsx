import { useEffect, useState } from "react";
import styles from "./PostModal.module.css";

function PostModal({ post, onClose }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.backdrop} onMouseDown={onClose}>
      <button className={styles.close} onClick={onClose}>
        <span className="material-symbols-outlined">close</span>
      </button>

      <article className={styles.modal} onMouseDown={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div className={styles.avatar}>AB</div>
          <div className={styles.who}>
            <strong>
              aman.bhayani
              <span className="material-symbols-outlined" title="Verified">verified</span>
            </strong>
            <span>{post.company}</span>
          </div>
        </header>

        <div className={post.image ? styles.visualPhoto : styles.visual}>
          {post.image && (
            <img className={styles.photo} src={post.image} alt={post.title} />
          )}
          <span>{post.icon}</span>
          <div>
            <label>{post.type}</label>
            <h2>{post.title}</h2>
            <p>{post.company}</p>
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.iconRow}>
            <button onClick={() => setLiked((v) => !v)} title="Like">
              <span
                className="material-symbols-outlined"
                style={liked ? { color: "var(--heart)" } : undefined}
              >
                favorite
              </span>
            </button>
            <a href="mailto:amanbhayani608@gmail.com" title="Message">
              <span className="material-symbols-outlined">send</span>
            </a>
            <button
              className={styles.saveBtn}
              onClick={() => setSaved((v) => !v)}
              title="Save"
            >
              <span className="material-symbols-outlined">
                {saved ? "bookmark" : "bookmark_border"}
              </span>
            </button>
          </div>
          <span className={styles.date}>{post.period}</span>
        </div>

        <div className={styles.caption}>
          <p>
            <span className={styles.captionAuthor}>aman.bhayani</span>
            {post.description}
          </p>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag}>#{tag.replace(/\s+/g, "")}</span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostModal;