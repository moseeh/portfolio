// Portfolio Data Configuration
const portfolioData = {
  personal: {
    name: "MOSES OTIENO ONYANGO",
    title: "Full Stack Software Developer",
    about:
      "I am a software developer with a passion for building efficient and innovative solutions. With experience in languages like Go, JavaScript, and Rust, I enjoy tackling challenging problems and constantly learning new tools and frameworks. I have worked on projects that involve systems programming, web development, and command-line tools, gaining hands-on experience with the full stack. My goal is to deepen my expertise in software development while contributing to projects that make a positive impact. I am driven by curiosity, dedication, and a commitment to developing practical, user-friendly software solutions.",
    location: "KISUMU, KENYA",
    profileImage: "images/profile.jpg",
  },

  contact: {
    email: "mosesadrian825@gmail.com",
    twitter: "mosesotienoo",
    linkedin: "moses-otieno-7a24b8248",
    github: "moseeh",
  },

  skills: [
    { name: "GO", proficiency: "Expert", experience: "2+ years" },
    { name: "RUST", proficiency: "Expert", experience: "1+ year" },
    { name: "JAVASCRIPT", proficiency: "Advanced", experience: "1.5+ years" },
    { name: "TYPESCRIPT", proficiency: "Advanced", experience: "1+ year" },
    { name: "PYTHON", proficiency: "Intermediate", experience: "1+ year" },
    { name: "REACT", proficiency: "Intermediate", experience: "1+ year" },
    { name: "NODE.JS", proficiency: "Intermediate", experience: "1+ year" },
    { name: "CPP", proficiency: "Intermediate", experience: "1+ years" },
    { name: "GIT", proficiency: "Advanced", experience: "2+ years" },
    { name: "REST APIS", proficiency: "Advanced", experience: "1.5+ years" },
    { name: "SQL", proficiency: "Intermediate", experience: "1+ year" },
    { name: "DOCKER", proficiency: "Intermediate", experience: "1+ year" },
    { name: "UNIX", proficiency: "Advanced", experience: "2+ years" },
    { name: "AI", proficiency: "Beginner", experience: "6+ months" },
    { name: "STATISTICS", proficiency: "Beginner", experience: "6+ months" },
  ],

  projects: [
    {
      title: "Autonomous Traffic Simulation",
      description:
        "A real-time autonomous vehicle traffic simulation built in Rust using SDL2. Implements intelligent intersection management without traffic lights, featuring collision avoidance and optimized traffic flow algorithms.",
      githubUrl: "https://github.com/moseeh/smart-road",
      liveUrl: null,
      icon: "🚗",
      technologies: ["Rust", "SDL2", "Algorithms", "Simulation"],
      featured: true,
    },
    {
      title: "GraphQL Profile Dashboard",
      description:
        "A personalized student dashboard that fetches and visualizes Zone01 profile data using GraphQL API. Features JWT authentication, interactive SVG graphs for XP tracking, project grades, audit statistics, and skills progression visualization.",
      githubUrl: "https://github.com/moseeh/graphql",
      liveUrl: "https://moseeh.github.io/graphql/",
      icon: "📊",
      technologies: ["GraphQL", "JavaScript", "JWT", "Data Visualization"],
      featured: true,
    },
    {
      title: "Real-Time Forum",
      description:
        "A full-stack real-time forum application with WebSocket support for instant messaging. Features user authentication, session management, and live updates without page refreshes.",
      githubUrl: "https://github.com/moseeh/real-time-forum",
      liveUrl: null,
      icon: "💬",
      technologies: ["Go", "WebSockets", "SQLite", "JavaScript"],
      featured: true,
    },
    {
      title: "Filler - AI Strategy Game",
      description:
        "An algorithmic strategy game where an AI bot competes to place pieces on a board efficiently. Implements heat map algorithms, pathfinding, and competitive AI logic to outmaneuver opponents by maximizing board coverage.",
      githubUrl: "https://github.com/moseeh/filler",
      liveUrl: null,
      icon: "🎮",
      technologies: ["Go", "Algorithms", "AI", "Game Theory", "Strategy"],
      featured: false,
    },
    {
      title: "Groupie Tracker",
      description:
        "A web application that fetches and displays music artist data from multiple APIs. Features interactive UI, data visualization, and advanced filtering/search capabilities.",
      githubUrl: "https://github.com/moseeh/Go-Projects/tree/main/groupie-tracker",
      liveUrl: null,
      icon: "🎵",
      technologies: ["Go", "REST APIs", "HTML/CSS", "JavaScript"],
      featured: false,
    },
    {
      title: "Lem-in - Ant Colony Pathfinding",
      description:
        "An algorithm that finds the optimal paths for ants to traverse from start to end in a colony. Implements graph theory and pathfinding algorithms to minimize total turns.",
      githubUrl: "https://github.com/moseeh/Go-Projects/tree/main/lem-in",
      liveUrl: null,
      icon: "🐜",
      technologies: ["Go", "Graph Theory", "BFS/DFS", "Optimization"],
      featured: false,
    },
  ],

  articles: [
    {
      title: "Building Modern SPAs with Vanilla JavaScript: A Beginner's Guide",
      synopsis:
        "Building Single Page Applications (SPAs) provide that smooth user experience by dynamically updating the page without requiring a full reload.",
      readTime: "3 min read",
      publishedDate: "2025-2-18",
      url: "https://dev.to/moseeh_52/building-modern-spas-with-vanilla-javascript-a-beginners-guide-9a3",
      tags: ["JS", "HTML", "Programming", "CSS", "DOM Manipulation"],
    },
    {
      title:
        "Understanding os.Stat() vs os.Lstat() in Go: File and Symlink Handling ",
      synopsis:
        "Key Differences between the two functions and when to use each one.",
      readTime: "4 min read",
      publishedDate: "2024-10-07",
      url: "https://dev.to/moseeh_52/understanding-osstat-vs-oslstat-in-go-file-and-symlink-handling-3p5d",
      tags: ["Go", "Linux", "Ubuntu", "Programming"],
    },
    {
      title: "Two Paths to Safety: How Go and Rust Made Opposite Bets",
      synopsis: "Go trusts developers with simplicity. Rust trusts the compiler with guarantees. A deep dive into why two modern languages solve the same problem in opposite ways.",
      readTime: "8 min read",
      publishedDate: "2025-10-31",
      url: "https://dev.to/moseeh_52/two-paths-to-safety-how-go-and-rust-made-opposite-bets-2980",
      tags: ["Go", "Rust", "Programming Languages", "Software Engineering"],
    },
    {
      title:
        "Efficient File Reading in Go: Mastering bufio.NewScanner vs os.ReadFile",
      synopsis: "Perfomance, memory usage, and use cases for each method.",
      readTime: "4 min read",
      publishedDate: "2024-05-16",
      url: "https://dev.to/moseeh_52/efficient-file-reading-in-go-mastering-bufionewscanner-vs-osreadfile-4h05",
      tags: ["Go", "File Reading"],
    },
    {
      title: "Getting Started with Electron: A Guide To Building Desktop Apps ",
      synopsis:
        "Exploring how to build cross-platform desktop applications using Electron.",
      readTime: "9 min read",
      publishedDate: "2025-06-14",
      url: "https://dev.to/moseeh_52/getting-started-with-electron-a-guide-to-building-desktop-apps-5cm6",
      tags: ["Electron", "JavaScript", "Desktop Apps"],
    },
    {
      title: "Getting Started with Clap: A Beginner's Guide to Rust CLI Apps ",
      synopsis:
        "Exploring how to build command line applications using Rust and Clap.",
      readTime: "3 min read",
      publishedDate: "2025-06-20",
      url: "https://dev.to/moseeh_52/getting-started-with-clap-a-beginners-guide-to-rust-cli-apps-1n3f",
      tags: ["Rust", "Clap", "CLI Apps"],
    },
  ],

  social: [
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:mosesadrian825@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://linkedin.com/in/moses-otieno-7a24b8248",
    },
    {
      name: "Dev.to",
      icon: "fab fa-dev",
      url: "https://dev.to/moseeh_52",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/moseeh",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://twitter.com/mosesotienoo",
    },
  ],

  // Typewriter titles for hero section
  typewriterTitles: [
    "FULL-STACK SOFTWARE DEVELOPER",
    "GOLANG ENTHUSIAST",
    "PROBLEM SOLVER",
    "CODE CRAFTSMAN",
    "SYSTEMS PROGRAMMER",
    "RUSTACEAN",
  ],
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
