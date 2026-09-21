import { useState } from "react";
import styles from "./Highlights.module.css";
import HighlightModal from "../HighlightModal/HighlightModal.jsx";

const highlights = [
  { name: "Languages", icon: "terminal", items: ["Java", "Python", "Kotlin", "Dart", "JavaScript", "R"] },
  { name: "Frontend", icon: "devices", items: ["React", "Flutter", "HTML", "CSS"] },
  { name: "Backend", icon: "dns", items: ["Supabase", "Firebase", "PostgreSQL", "REST APIs"] },
  { name: "Concepts", icon: "hub", items: ["Data Structures", "Algorithms", "OOP", "Architecture"] },
  { name: "Tools", icon: "build", items: ["Git/GitHub", "Android Studio", "IntelliJ", "VS Code", "Figma"] },
];

function Highlights() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.row}>
          {highlights.map((item) => (
            <button key={item.name} className={styles.highlight} onClick={() => setSelected(item)}>
              <div className={styles.circle}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <span className={styles.label}>{item.name}</span>
            </button>
          ))}
        </div>
      </section>

      {selected && <HighlightModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

export default Highlights;