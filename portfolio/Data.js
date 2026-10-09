/* ============================================================
   ALL YOUR CONTENT LIVES HERE.
   Edit this file only — the page builds itself from it.
   To add a project: copy one { ... } block inside `projects`.
   ============================================================ */

window.PORTFOLIO = {

  profile: {
    name: "Guruprasad K P",
    role: "Java Developer · CSE Undergraduate",
    tagline:
      "I build software the way I'd want to find it later — readable, modular, and easy to change. " +
      "Focused on Java, OOP and MySQL.",
    photo: "assets/images/profile.jpg",      // square-ish photo, ~600x600
    location: "Sullia, Dakshina Kannada, Karnataka",
    email: "guruprasad.kp.tech@gmail.com",
    github: "https://github.com/Guruprasad-K-P",
    linkedin: "https://www.linkedin.com/in/guruprasad-k-p-745772296",
    resume: "assets/resume.pdf"              // put your PDF here, or set to "" to hide the button
  },

  about: [
    "I'm a B.Tech Computer Science and Engineering student at St. Joseph Engineering College, Mangaluru " +
    "(graduating 2027), with a steady interest in Java development and MySQL. I enjoy building practical, " +
    "database-driven software and solving real-world problems.",
    "When I design something, I think about the version of me who has to debug it six months from now: " +
    "clear structure, sensible names, and pieces that can change without a rewrite."
  ],

  /* ---------- PROJECTS ----------
     tags    : used for the filter buttons (any words you like)
     stack   : small chips on the card
     images  : first image is the card cover. Each can be a path string
               or { src: "...", caption: "..." }. Missing files show a placeholder.
     code / demo : optional links (leave "" to hide)
  */
  projects: [
    {
      title: "Student Management System",
      date: "Feb 2026 – Mar 2026",
      tags: ["Java", "Database"],
      stack: ["Java", "JDBC", "MySQL"],
      summary:
        "Console-based Java app for managing student records with full CRUD through JDBC and MySQL.",
      details:
        "Built to practise clean layering: a database layer, a model layer and a menu-driven console layer, " +
        "so each piece can change without touching the others.",
      highlights: [
        "Add, search, update, delete and list students using PreparedStatement.",
        "Object-oriented design with modular classes.",
        "Exception handling around every database operation."
      ],
      images: [
        { src: "assets/images/projects/student-management/1.png", caption: "Main menu" },
        { src: "assets/images/projects/student-management/2.png", caption: "Search and update output" }
      ],
      code: "https://github.com/Guruprasad-K-P",   // TODO: exact repo URL
      demo: ""
    },
    {
      title: "Bank Management System",
      date: "",
      tags: ["Java", "Database"],
      stack: ["Java", "JDBC", "MySQL"],
      summary:
        "Java banking app covering deposits, withdrawals and transfers with transaction-safe SQL.",
      details:
        "Focused on correctness: money movements run inside transactions so a failure part-way never leaves balances inconsistent.",
      highlights: [
        "Deposits, withdrawals and account-to-account transfers.",
        "Parameterized SQL through PreparedStatement.",
        "Transaction handling with commit / rollback."
      ],
      images: [
        { src: "assets/images/projects/bank-management/1.png", caption: "Account menu" },
        { src: "assets/images/projects/bank-management/2.png", caption: "Transfer flow" }
      ],
      code: "https://github.com/Guruprasad-K-P",   // TODO: exact repo URL
      demo: ""
    },
    {
      title: "AI-Based Decision-Support System for Crime Investigation",
      date: "Jan 2026 – Present",
      tags: ["Python", "AI / NLP", "Web"],
      stack: ["Python", "Flask", "Scikit-learn", "MySQL"],
      summary:
        "Academic NLP tool that ranks suspects by evidence relevance, with explainable output.",
      details:
        "Helps investigators cut through large volumes of case documents and suspect profiles. " +
        "Human judgment stays in the loop: every ranking comes with the reasoning behind it.",
      highlights: [
        "TF-IDF vectorization and cosine similarity over crime-report text.",
        "Flask REST APIs connected to MySQL.",
        "Explainable ranking so results can be reviewed, not just trusted."
      ],
      images: [
        { src: "assets/images/projects/crime-dss/1.png", caption: "Dashboard" },
        { src: "assets/images/projects/crime-dss/2.png", caption: "Suspect ranking with explanation" }
      ],
      code: "https://github.com/Guruprasad-K-P/PBL-Project",
      demo: ""
    },
    {
      title: "Healthcare Camp Tracker",
      date: "",
      tags: ["Web", "Database"],
      stack: ["HTML/CSS/JS", "MySQL", "GPS API"],
      summary:
        "Digital platform replacing paperwork at rural health camps, with bilingual support and GPS tracking.",
      details:
        "Manages patient registration, medical records and staff details in one place, with Kannada and English " +
        "support and live camp location for better coordination between doctors, volunteers and organizers.",
      highlights: [
        "Patient registration and medical record management.",
        "Bilingual interface (Kannada and English).",
        "GPS-based location tracking of camps."
      ],
      images: [
        { src: "assets/images/projects/healthcare-camp/1.png", caption: "Registration screen" }
      ],
      code: "https://github.com/Guruprasad-K-P",   // TODO: exact repo URL
      demo: ""
    }
  ],

  skills: [
    { group: "Languages", items: ["Java", "C", "Python"] },
    { group: "Java",      items: ["OOP", "JDBC", "PreparedStatement", "Exception Handling"] },
    { group: "Database",  items: ["MySQL", "SQL", "CRUD Operations"] },
    { group: "Web",       items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"] },
    { group: "Core CS",   items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"] },
    { group: "Tools",     items: ["Git", "GitHub", "IntelliJ IDEA", "Eclipse", "VS Code"] }
  ],

  learning: ["DevOps", "Docker", "Kubernetes", "Cloud Computing"],

  education: [
    { title: "B.Tech, Computer Science and Engineering", place: "St. Joseph Engineering College, Mangaluru", when: "2023 – 2027" },
    { title: "Pre-University Course (Class XII)",        place: "Government PU College, Belthangady",        when: "2021 – 2023" }
  ],

  certifications: [
    { title: "Advanced Data Structures & Algorithms in Java: Sorting & Searching", issuer: "Infosys Springboard", when: "Feb 2025" }
  ]
};
