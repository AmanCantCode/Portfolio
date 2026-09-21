import styles from "./PostGrid.module.css";

function PostGrid({ posts, onSelect }) {
  return (
    <section className={styles.grid}>
      {posts.map((post, index) => (
        <button
          className={styles.post}
          key={`${post.type}-${post.title}`}
          onClick={() => onSelect(post)}
          data-variant={index % 3}
        >
          <div className={post.image ? styles.visualPhoto : styles.visual}>
            {post.image && (
              <img className={styles.photo} src={post.image} alt={post.title} />
            )}

            <div className={styles.corner}>{post.icon}</div>
            <div className={styles.year}>{post.period}</div>

            <div className={styles.content}>
              <span>{post.type === "project" ? "PROJECT" : "EXPERIENCE"}</span>
              <h2>{post.title}</h2>
              <p>{post.company}</p>
            </div>
          </div>

          <div className={styles.overlay}>
            <span className="material-symbols-outlined">visibility</span>
            <strong>View details</strong>
          </div>
        </button>
      ))}
    </section>
  );
}

export default PostGrid;