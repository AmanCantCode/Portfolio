import AnimatedText from "../AnimatedText/AnimatedText.jsx";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import styles from "./Projects.module.css";

function Projects() {
    return (
        <div id="projects_section">
            <AnimatedText text="PROJECTS" />

            <div className={styles.grid}>

                {/* Project 1 */}
                <ProjectCard
                    title="Shared Grocery List App"
                    description="Full-stack Flutter app using Supabase authentication and PostgreSQL. Supports shared grocery lists with real-time collaboration and integrates a nutrition API."
                    tags={[
                        "FLUTTER",
                        "SUPABASE",
                        "POSTGRESQL",
                        "API"
                    ]}
                />

                {/* Project 2 */}
                <ProjectCard
                    title="Student Portal Simulation App"
                    description="Android application simulating a classroom portal. Built with Kotlin using MVVM architecture, Jetpack Navigation, ViewModel, and LiveData."
                    tags={[
                        "KOTLIN",
                        "ANDROID",
                        "MVVM",
                        "JETPACK"
                    ]}
                />

                {/* Project 3 */}
                <ProjectCard
                    title="Decaf20 Compiler"
                    description="Compiler for the Decaf20 language in Python featuring lexical analysis, recursive-descent parsing, and Abstract Syntax Tree generation."
                    tags={[
                        "PYTHON",
                        "COMPILER",
                        "LEXER",
                        "PARSER"
                    ]}
                />

                {/* Project 4 */}
                <ProjectCard
                    title="Movie Data Mining & Analysis"
                    description="Analyzed the 32M MovieLens dataset using Python and Pandas. Applied PCA, clustering, decision trees, and data visualization to identify trends."
                    tags={[
                        "PYTHON",
                        "PANDAS",
                        "DATA MINING",
                    ]}
                />

                {/* Project 5 */}
                <ProjectCard
                    title="CPU Scheduling Simulator"
                    description="C# simulator implementing FCFS, SJF, RR, SRTF, and HRRN scheduling algorithms with performance analysis across varied workloads."
                    tags={[
                        "C#",
                        ".NET",
                        "ALGORITHMS",
                        "SIMULATION"
                    ]}
                />

            </div>
        </div>
    );
}

export default Projects;