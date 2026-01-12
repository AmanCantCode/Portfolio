import AnimatedText from "./AnimatedText/AnimatedText.jsx"

function Experience () {
    return (
        <div id="experience_section">
            <AnimatedText text="EXPERIENCE" />

            {/* Exp. 1 */}
            <div>
                <h3>Software Developer - Sports Media Inc</h3>
                <p>
                    Developed and maintained front-end features using React, 
                    focusing on responsive UI and user experience. Built backend 
                    services using Supabase, including user authentication, 
                    eal-time data updates, and database queries. Collaborated using 
                    GitHub with pull requests and code reviews in a team environment.
                </p>
            </div>

            {/* Exp. 2 */}
            <div>
                <h3>KSU Lab Assistant - Java & Python</h3>
                <p>Assisted students during Java and Python lab sessions
                     by explaining core programming concepts, debugging code, 
                     and guiding them through assignments. Graded programming 
                     assignments and provided feedback on code quality, logic, 
                     and adherence to specifications, reinforcing best practices 
                     in software development.</p>
            </div>

            {/* Exp. 3 */}
            <div>
                <h3>Certifications</h3>
                <p>Pandas for Data Analysis with Python - Coursera</p>
            </div>
        </div>
    );
}

export default Experience