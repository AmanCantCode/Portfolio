import AnimatedText from "../AnimatedText/AnimatedText.jsx"
import styles from "./Skills.module.css"


function Skills () {
    
    return (
        <div id = "skills_section">
            <AnimatedText text="SKILLS" />
            <div class={styles.skills} >
                

                <div class={styles.skill}>JAVA</div>
                <div class={styles.skill}>PYTHON</div>
                <div class={styles.skill}>KOTLIN</div>
                <div class={styles.skill}>FLUTTER</div>
                <div class={styles.skill}>REACT</div>
                <div class={styles.skill}>HTML / CSS</div>
                <div class={styles.skill}>DATA STRUCTURES</div>
                <div class={styles.skill}>GITHUB</div>
                
            </div>
        </div>
    );
}

export default Skills