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
      title: "Efficient File Reading in Go: Mastering bufio.NewScanner vs os.ReadFile",
      synopsis:
        "Perfomance, memory usage, and use cases for each method.",
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
      tags: ["Electron", "JavaScript", "Desktop Apps", ],
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
