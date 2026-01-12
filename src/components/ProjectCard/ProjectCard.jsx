import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, tags = [] }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>

      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
