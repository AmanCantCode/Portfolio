import styles from "./ProfileTabs.module.css";

function ProfileTabs({ tab, onChange }) {
  return (
    <div id="profile-tabs" className={styles.tabs}>
      <button
        className={tab === "experience" ? styles.active : ""}
        onClick={() => onChange("experience")}
      >
        <span className="material-symbols-outlined">grid_on</span>
        <span>EXPERIENCE</span>
      </button>
      <button
        className={tab === "projects" ? styles.active : ""}
        onClick={() => onChange("projects")}
      >
        <span className="material-symbols-outlined">folder_copy</span>
        <span>PROJECTS</span>
      </button>
    </div>
  );
}

export default ProfileTabs;
