// Portfolio Data Configuration
const portfolioData = {
  personal: {
    name: "MOSES OTIENO ONYANGO",
    title: "Apprentice Software Developer at Zone01 Kisumu",
    about:
      "I am an apprentice software developer at Zone 01 Kisumu with a passion for building efficient and innovative solutions. With experience in languages like Go, JavaScript, and Rust, I enjoy tackling challenging problems and constantly learning new tools and frameworks. I have worked on projects that involve systems programming, web development, and command-line tools, gaining hands-on experience with the full stack. My goal is to deepen my expertise in software development while contributing to projects that make a positive impact. I am driven by curiosity, dedication, and a commitment to developing practical, user-friendly software solutions.",
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
    { name: "JAVASCRIPT", proficiency: "Advanced", experience: "1.5+ years" },
    { name: "HTML", proficiency: "Advanced", experience: "2+ years" },
    { name: "CSS", proficiency: "Advanced", experience: "2+ years" },
    { name: "RUST", proficiency: "Intermediate", experience: "1+ year" },
    { name: "PROGRAMMING", proficiency: "Expert", experience: "2+ years" },
    { name: "GIT", proficiency: "Advanced", experience: "2+ years" },
    { name: "REST APIS", proficiency: "Advanced", experience: "1.5+ years" },
    { name: "SQLITE", proficiency: "Intermediate", experience: "1+ year" },
    { name: "DOCKER", proficiency: "Intermediate", experience: "1+ year" },
    { name: "UNIX", proficiency: "Advanced", experience: "2+ years" },
    { name: "AI", proficiency: "Beginner", experience: "6+ months" },
    { name: "STATISTICS", proficiency: "Beginner", experience: "6+ months" },
  ],

  projects: [
    {
      title: "Go Projects",
      description:
        "These are projects I have done in Golang using the zone01 kisumu Pedagogy",
      githubUrl: "https://github.com/moseeh/Go-Projects",
      icon: "⚡",
      technologies: ["Go", "Algorithms", "Data Structures"],
    },
    {
      title: "my-ls",
      description:
        "A program that mimics the linux command line tool(ls). This program lists entries in any specified path using flags",
      githubUrl: "https://github.com/moseeh/Go-Projects/tree/main/my-ls-1",
      icon: "📁",
      technologies: ["Go", "File Systems", "CLI"],
    },
    {
      title: "lem-in",
      description:
        "A program that describes an ant colony and generates paths and turns ants need to make from start to end",
      githubUrl: "https://github.com/moseeh/Go-Projects/tree/main/lem-in",
      icon: "🐜",
      technologies: ["Go", "Graph Theory", "Pathfinding"],
    },
    {
      title: "my-Sudoku",
      description:
        "A program that uses the backtracking algorithm to solve the sudoku puzzle",
      githubUrl: "https://github.com/moseeh/my-sudoku",
      icon: "🧩",
      technologies: ["Go", "Backtracking", "Algorithms"],
    },
    {
      title: "Kilimo-chain",
      description:
        "A blockchain based program that offers transparency of goods from the farm to the market",
      githubUrl: "https://github.com/moseeh/kilimo-link",
      icon: "🔗",
      technologies: ["Blockchain", "Go", "Supply Chain"],
    },
    {
      title: "Groupie Tracker",
      description:
        "A Go-based Program that reads data from a JSON API and displays it on a webpage",
      githubUrl:
        "https://github.com/moseeh/Go-Projects/tree/main/groupie-tracker",
      icon: "🎵",
      technologies: ["Go", "JSON API", "Web Development"],
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
      title: "Understanding os.Stat() vs os.Lstat() in Go: File and Symlink Handling ",
      synopsis:
        "Key Differences between the two functions and when to use each one.",
      readTime: "4 min read",
      publishedDate: "2024-10-07",
      url: "https://dev.to/moseeh_52/understanding-osstat-vs-oslstat-in-go-file-and-symlink-handling-3p5d",
      tags: ["Go", "Linux", "Ubuntu", "Programming"],
    },
    // {
    //   title: "Building a Linux Command Clone: Lessons from my-ls",
    //   synopsis:
    //     "What I learned recreating the Linux 'ls' command from scratch. File system navigation, flag handling, and the beauty of Unix philosophy.",
    //   readTime: "10 min read",
    //   publishedDate: "2024-11-10",
    //   url: "https://dev.to/moseeh_52/building-linux-command-clone-lessons",
    //   tags: ["Go", "Systems Programming", "Unix"],
    // },
    {
      title: "Understanding Graph Algorithms Through Ant Colony Simulation",
      synopsis:
        "How the lem-in project taught me about graph theory, pathfinding algorithms, and the elegance of nature-inspired computing solutions.",
      readTime: "15 min read",
      publishedDate: "2024-10-22",
      url: "https://dev.to/moseeh_52/graph-algorithms-ant-colony-simulation",
      tags: ["Graph Theory", "Algorithms", "Simulation"],
    },
    {
      title: "Blockchain Transparency in Agriculture: The Kilimo-Chain Story",
      synopsis:
        "Exploring how blockchain technology can revolutionize supply chain transparency in agriculture. From farm to table, building trust through code.",
      readTime: "11 min read",
      publishedDate: "2024-10-05",
      url: "https://dev.to/moseeh_52/blockchain-agriculture-kilimo-chain",
      tags: ["Blockchain", "Agriculture", "Supply Chain"],
    },
    {
      title: "API Integration Patterns: Building Groupie Tracker",
      synopsis:
        "Best practices for consuming REST APIs in Go applications. Error handling, data parsing, and creating responsive web interfaces.",
      readTime: "9 min read",
      publishedDate: "2024-09-18",
      url: "https://dev.to/moseeh_52/api-integration-patterns-groupie-tracker",
      tags: ["API", "Go", "Web Development"],
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
    "APPRENTICE SOFTWARE DEVELOPER",
    "GOLANG ENTHUSIAST",
    "PROBLEM SOLVER",
    "CODE CRAFTSMAN",
    "SYSTEMS PROGRAMMER",
    "FULL STACK DEVELOPER",
  ],
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = portfolioData;
}
