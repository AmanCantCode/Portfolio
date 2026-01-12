import AnimatedText from "../AnimatedText/AnimatedText.jsx"
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import styles from "./Projects.module.css";

function Projects () {
    return(
        <div id="projects_section">
            <AnimatedText text = "PROJECTS" / >

            <div className={styles.grid}>

                {/* project 1 */}
                <ProjectCard
                title="Senior Project - Grocery List App"
                description="Cross-platform Flutter app using Supabase authentication and database. Supports shared grocery lists with real-time collaboration and integrates a third-party nutrition API."
                // description= "Built a cross-platform Flutter application with Supabase authentication and database, enabling secure user sign-in and real-time data synchronization. Designed a shared grocery list system supporting multiple users within a single group, allowing collaborative item management and updates. Integrated a third-party nutrition API to fetch food and nutritional information directly within the app. Produced thorough technical documentation throughout development, covering system design, features, and implementation decisions."
                tags={["FLUTTER", "SUPABASE", "API", "AUTH"]}
                />

                {/* project 2 */}
                <ProjectCard
                title="Student Portal Simulation App"
                description="Android application simulating a classroom portal. Built with Kotlin using MVVM architecture, Jetpack Navigation, ViewModel, and LiveData."
                tags={["KOTLIN", "ANDROID", "MVVM"]}
                />

                
            </div>
            
        </div>

        
    );
}

export default Projects