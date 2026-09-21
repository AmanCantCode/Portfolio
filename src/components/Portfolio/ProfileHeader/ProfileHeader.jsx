import { useState } from "react";
import styles from "./ProfileHeader.module.css";
import profilePic from "../../../assets/profile-pic.jpg";

function ProfileHeader({ postsCount, projectsCount }) {
  const [following, setFollowing] = useState(false);

  return (
    <section className={styles.header}>
      <div className={styles.avatarCol}>
        <div className={styles.ring}>
          <div className={styles.avatar}>
            <img src={profilePic} alt="Aman Bhayani" />
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.topRow}>
          <h1 className={styles.username}>aman.bhayani</h1>

          <div className={styles.actions}>

            <button
              className={following ? styles.followingBtn : styles.followBtn}
              onClick={() => setFollowing((v) => !v)}
            >
              {following ? "Following" : "Follow"}
            </button>

            <a className={styles.btn} href="mailto:amanbhayani608@gmail.com">
              Contact
            </a>
            <a
                className={styles.btn}
                href={`${import.meta.env.BASE_URL}Aman_Bhayani_Resume.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            
          </div>
        </div>

        <ul className={styles.stats}>
          <li><strong>4.0</strong> GPA</li>
          <li><strong>{postsCount}</strong> experiences</li>
          <li><strong>{projectsCount}</strong> projects</li>
          <li><strong>2026</strong> grad</li>
        </ul>

        <div className={styles.bio}>
          <h2>Aman Bhayani</h2>
          <p className={styles.role}>Computer Science Student · Full-Stack &amp; Mobile</p>
          <p>
            Building full-stack web, mobile, and software projects while
            studying Computer Science.
          </p>
          <p className={styles.secondary}>
            Interested in clean architecture, problem solving, and building
            things that actually work.
          </p>
          <div className={styles.meta}>
            <span>
              <span className="material-symbols-outlined">school</span>
              Kennesaw State University
            </span>

            <span>
              <span className="material-symbols-outlined">pin_drop</span>
              Atlanta, GA
            </span>
          
            <a 
              className={styles.breakBefore}
  href="https://linkedin.com/in/aman-bhayani"
  target="_blank"
  rel="noreferrer"
>
  <span className="material-symbols-outlined">link</span>
  linkedin.com/in/aman-bhayani
</a>

            <a href="https://github.com/AmanCantCode" target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">code</span>
              github.com/AmanCantCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
