import { useState } from "react";
import styles from "./Portfolio.module.css";
import TopNav from "./TopNav/TopNav.jsx";
import ProfileHeader from "./ProfileHeader/ProfileHeader.jsx";
import Highlights from "./Highlights/Highlights.jsx";
import ProfileTabs from "./ProfileTabs/ProfileTabs.jsx";
import PostGrid from "./PostGrid/PostGrid.jsx";
import PostModal from "./PostModal/PostModal.jsx";
import Footer from "./Footer/Footer.jsx";

import sportsMediaImage from "../../assets/sportsmedia.png";
import ksuTutoringImage from "../../assets/ksu-tutoring.png";
import ksuHesaImage from "../../assets/ksu-hesa.png";
import groceryListImage from "../../assets/sp-grocerylist.png";
import studentPortalImage from "../../assets/student-portal.png";

const experience = [
  {
    type: "experience",
    title: "Software Developer",
    company: "Sports Media Inc.",
    period: "Summer 2025",
    icon: "◈",
    image: sportsMediaImage,
    description:
      "Developed and maintained front-end features using React, focusing on responsive UI and user experience. Built backend services using Supabase, including authentication, real-time data updates, and database queries. Collaborated using GitHub with pull requests and code reviews.",
    tags: ["React", "Supabase", "PostgreSQL", "GitHub"],
  },
  {
    type: "experience",
    title: "Java & Python Lab Assistant",
    company: "Kennesaw State University",
    period: "Fall 2025",
    icon: "⌘",
    image: ksuTutoringImage,
    description:
      "Assisted students during Java and Python lab sessions by explaining programming concepts, debugging code, and guiding assignments. Graded programming assignments and provided feedback on code quality, logic, and specifications.",
    tags: ["Java", "Python", "OOP", "Debugging"],
  },
  {
    type: "experience",
    title: "HESA Project Developer",
    company: "KSU Engineering Club",
    period: "2026",
    icon: "◇",
    image: ksuHesaImage,
    description:
      "Developed a web application for the KSU Engineering Club's HESA project, focusing on building responsive user interfaces and implementing project-specific functionality. Collaborated with the engineering club to develop and refine features based on project requirements. Vist joinhesa.org",
    tags: ["React", "JavaScript", "Web Development", "GitHub"],
  },
  {
    type: "experience",
    title: "Pandas for Data Analysis",
    company: "Coursera Certification",
    period: "Summer 2025",
    icon: "◎",
    description:
      "Completed hands-on work with data manipulation, cleaning, filtering, and analysis using the Pandas library in Python.",
    tags: ["Python", "Pandas", "Data Analysis"],
  },
];

const projects = [
  {
    type: "project",
    title: "Shared Grocery List App",
    company: "Senior Project",
    period: "2026",
    icon: "▦",
    image: groceryListImage,
    description:
      "Full-stack Flutter app using Supabase authentication and PostgreSQL. Supports shared grocery lists with real-time collaboration and integrates a nutrition API.",
    tags: ["Flutter", "Supabase", "PostgreSQL", "API"],
  },
  {
    type: "project",
    title: "Student Portal Simulation",
    company: "Android Project",
    period: "2025",
    icon: "▣",
    image: studentPortalImage,
    description:
      "Android application simulating a classroom portal. Built with Kotlin using MVVM architecture, Jetpack Navigation, ViewModel, and LiveData.",
    tags: ["Kotlin", "Android", "MVVM", "Jetpack"],
  },
  {
    type: "project",
    title: "Decaf20 Compiler",
    company: "Compiler Project",
    period: "2025",
    icon: "</>",
    description:
      "Compiler for the Decaf20 language in Python featuring lexical analysis, recursive-descent parsing, and Abstract Syntax Tree generation.",
    tags: ["Python", "Compiler", "Lexer", "Parser"],
  },
  {
    type: "project",
    title: "Movie Data Mining & Analysis",
    company: "Data Mining Project",
    period: "2025",
    icon: "⌁",
    description:
      "Analyzed the 32M MovieLens dataset using Python and Pandas. Applied PCA, clustering, decision trees, and data visualization to identify trends.",
    tags: ["Python", "Pandas", "Data Mining"],
  },
  {
    type: "project",
    title: "CPU Scheduling Simulator",
    company: "Algorithms Project",
    period: "2024",
    icon: "▤",
    description:
      "C# simulator implementing FCFS, SJF, RR, SRTF, and HRRN scheduling algorithms with performance analysis across varied workloads.",
    tags: ["C#", ".NET", "Algorithms", "Simulation"],
  },
];

function Portfolio() {
  const [tab, setTab] = useState("experience");
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = tab === "projects" ? projects : experience;

  return (
    <main className={styles.page}>
      <TopNav onExplore={setTab} />

      <div className={styles.profile}>
        <ProfileHeader
          postsCount={experience.length}
          projectsCount={projects.length}
        />

        <Highlights />

        <ProfileTabs tab={tab} onChange={setTab} />

        <PostGrid posts={posts} onSelect={setSelectedPost} />

        <Footer onNavigate={setTab} />
      </div>

      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </main>
  );
}

export default Portfolio;