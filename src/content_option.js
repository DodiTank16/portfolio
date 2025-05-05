import AWSLogo from "./assets/images/awsLogo.svg";
import BootstrapLogo from "./assets/images/bootstrapLogo.svg";
import CSSLogo from "./assets/images/cssLogo.svg";
import GitHubLogo from "./assets/images/githubLogo.svg";
import GitLabLogo from "./assets/images/gitlabLogo.svg";
import HTMLLogo from "./assets/images/htmlLogo.svg";
import JavaScriptLogo from "./assets/images/javascriptLogo.svg";
import MongoDBLogo from "./assets/images/mongoDBLogo.svg";
import MySQLLogo from "./assets/images/mySQLLogo.svg";
import NodeLogo from "./assets/images/nodeLogo.svg";
import ReactLogo from "./assets/images/reactLogo.svg";
import TailwindLogo from "./assets/images/tailwindLogo.svg";
import TypeScriptLogo from "./assets/images/typescriptLogo.svg";
import VSCodeLogo from "./assets/images/vsCodeLogo.svg";

// Portfolio Images
import NextJs1 from "../src/assets/images/NextJs/1.png"
import NextJs2 from "../src/assets/images/NextJs/home.png"
import NextJs3 from "../src/assets/images/NextJs/invoice.png"

import AdvancedTodo1 from "../src/assets/images/AdvanceToDo/1.png"
import AdvancedTodo2 from "../src/assets/images/AdvanceToDo/2.png"
import AdvancedTodo3 from "../src/assets/images/AdvanceToDo/login.png"

const logotext = "TANK";
const meta = {
  title: "Dodi Tank",
  description: "I'm Dodi tank Web Devloper _ Full stack devloper,currently working in Ahmedabad",
};

const introdata = {
  title: "I'm Dody Tank",
  animated: {
    first: "I'm a React.js Developer",
    second: "I build scalable full-stack apps",
    third: "I'm also a part-time DJ 🎧",
  },
  description: `I'm a passionate <strong>React.js developer</strong> with <strong>3+ years</strong> of experience building dynamic and responsive web applications. I specialize in the <strong>MERN stack</strong>, love clean code, and enjoy taking on new challenges to grow as a developer. Currently working at <strong>CMARIX</strong>, I'm exploring <strong>DevOps</strong> and diving deeper into <strong>micro frontends</strong> and <strong>scalable architecture</strong>. Beyond the code, you'll often find me <strong>spinning tracks</strong> and exploring the world of <strong>music production</strong>. <strong>Coding by day, beats by night!</strong>`,
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "Know More About Me",

  aboutme_pera1: `Hi, I'm <strong>Dody Tank</strong> — a passionate <strong>React.js Developer</strong> with over <strong>3+ years</strong> of hands-on experience in building responsive, scalable, and user-focused web applications. I specialize in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) and love crafting clean, efficient code that solves real-world problems. I'm always looking for new opportunities to expand my skills and contribute to the tech community.`,

  aboutme_pera2: `I've worked across multiple projects using <strong>React, Redux, Node, Express</strong>, and databases like <strong>MongoDB, MySQL, and Oracle SQL</strong>. I'm currently working at <strong>CMARIX</strong>, where I continue to level up my skills while contributing to impactful products.`,

  aboutme_pera3: `In addition to my frontend strengths, I'm diving deeper into <strong>DevOps practices</strong>, <strong>micro frontend architecture</strong>, and tools like <strong>Webpack module federation</strong>, constantly pushing the boundaries of what I can build.`,

  title_second: "Outside the Code🎧",

  aboutme_pera4: `When I'm not building apps, you'll probably find me immersed in <strong>music</strong>. I'm an avid music lover and enjoy <strong>DJing</strong> in my free time — mixing beats, exploring genres, and occasionally creating my own tracks. Whether it's <strong>tech or tracks</strong>, creativity is at the core of everything I do.`,
};
const worktimeline = [
  {
    jobtitle: "Developer",
    where: "CMARIX TechnoLabs.",
    date: "December, 2024 - Present",
  },
  {
    jobtitle: "Associate Developer",
    where: "DRC Systems India Limited.",
    date: "June, 2022 - 2024",
  },
  {
    jobtitle: "Intern at DRC Systems",
    where: "DRC Systems India Limited.",
    date: "December, 2021 - 2022",
  },
];

const skills_languages = [
  {
    name: "HTML",
    value: HTMLLogo,
  },
  {
    name: "CSS",
    value: CSSLogo,
  },
  {
    name: "Javascript",
    value: JavaScriptLogo,
  },
  {
    name: "Typescript",
    value: TypeScriptLogo,
  },
  {
    name: "ReactJs",
    value: ReactLogo,
  },
  {
    name: "NodeJs",
    value: NodeLogo,
  },
];

const skills_frameworkDb = [
  {
    name: "Bootstrap",
    value: BootstrapLogo,
  },
  {
    name: "Tailwind CSS",
    value: TailwindLogo,
  },
  {
    name: "NextJs",
    isDynamic: true,
  },
  {
    name: "ExpressJs",
    isDynamic: true,
  },
  {
    name: "MySQL",
    value: MySQLLogo,
  },
  {
    name: "MongoDB",
    value: MongoDBLogo,
  },
];

const skills_tools = [
  {
    name: "VS Code",
    value: VSCodeLogo,
  },
  {
    name: "GitHub",
    value: GitHubLogo,
  },
  {
    name: "GitLab",
    value: GitLabLogo,
  },
  {
    name: "AWS",
    value: AWSLogo,
  },
  {
    name: "Vercel",
    isDynamic: true,
  },
];

const services = [
  {
    title: "🚀 Full-Stack Web Development",
    description:
      "Crafting robust and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). From frontend UI to backend APIs—I handle it all with clean, maintainable code.",
  },
  {
    title: "🎨 Frontend Development",
    description:
      "Creating modern, responsive, and pixel-perfect UIs using React.js. I specialize in reusable components, hooks, and state management (Redux/Context) for high-performance interfaces.",
  },
  {
    title: "🔌 API Integration & Backend Services",
    description:
      "Designing and integrating RESTful APIs with secure authentication, role-based access control, and seamless data handling using Node.js and Express.",
  },
  {
    title: "📦 DevOps & Deployment Support",
    description:
      "Deploying full-stack applications on platforms like AWS EC2 and managing environments on Ubuntu. I ensure smooth CI/CD pipelines and efficient deployment strategies.",
  },
  {
    title: "🧪 Testing & Optimization",
    description:
      "Improving performance and debugging apps for reliability. Familiar with tools like Postman for API testing and browser dev tools for front-end optimization.",
  },
  {
    title: "🛠️ Tech Stack & Tools",
    description:
      "Hands-on experience with Git, Jira, VSCode, Postman, ClickUp, and databases like MongoDB, MySQL, and Oracle SQL. Clean version control and agile collaboration are part of my workflow.",
  },
];

const dataportfolio = [
  {
    name: "Next.js Dashboard",
    img: [NextJs1, NextJs2, NextJs3],
    description: "A dashboard application built with Next.js, showcasing dynamic routing and server-side rendering.",
    link: "https://github.com/DodiTank16/nextjs-dashboard",
  },
  {
    name: "Handshake Parallax Effect",
    img: ["https://picsum.photos/400/800/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "A parallax effect implementation created using CodeSandbox, demonstrating interactive UI elements.",
    link: "https://github.com/DodiTank16/Handshake-Parallax-Effect",
  },
  {
    name: "AutoSuggestion",
    img: ["https://picsum.photos/300/?grayscale", "https://picsum.photos/300/800/?grayscale"],
    description: "An autocomplete feature that predicts user input, enhancing form usability and efficiency.",
    link: "https://github.com/DodiTank16/autosuggestion",
  },
  {
    name: "React Node Mongo Auth",
    img: ["https://picsum.photos/400/600/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "A robust authentication system with role-based access control, email verification, and secure admin login.",
    link: "https://github.com/DodiTank16/react-node-mongo-authentication-permissions",
  },
  {
    name: "Advanced Todo Application",
    img: [AdvancedTodo1, AdvancedTodo2, AdvancedTodo3],
    description: "A full-stack todo application with CRUD operations, user authentication, and drag-and-drop functionality.",
    link: "https://github.com/DodiTank16/advanced-todo-application",
  },
  {
    name: "Image File Resizer",
    img: ["https://picsum.photos/400/700/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "A tool to resize image files efficiently before uploading, optimizing performance in React applications.",
    link: "https://github.com/DodiTank16/image-file-resizer",
  },
  {
    name: "Shopping App MERN",
    img: ["https://picsum.photos/400/600/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "An e-commerce platform built using the MERN stack, featuring product listings and shopping cart functionality.",
    link: "https://github.com/DodiTank16/Shopping-App-MERN",
  },
  {
    name: "JWT Auth",
    img: ["https://picsum.photos/400/300/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "A full-stack authentication system implementing JWT and Nodemailer for secure user management.",
    link: "https://github.com/DodiTank16/JWT-Auth",
  },
  {
    name: "Tinder Clone",
    img: ["https://picsum.photos/400/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "A clone of the Tinder application, replicating swipe functionality and user interactions.",
    link: "https://github.com/DodiTank16/Tinder-Clone",
  },
  {
    name: "Complete RESTful API",
    img: ["https://picsum.photos/400/550/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "A comprehensive RESTful API built with Node.js, demonstrating CRUD operations and middleware integration.",
    link: "https://github.com/DodiTank16/Complete-RESTful-API",
  },
  {
    name: "Shopping App Redux",
    img: ["https://picsum.photos/400/700/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "A shopping application utilizing Redux for state management, enhancing scalability and maintainability.",
    link: "https://github.com/DodiTank16/Shopping-App-Redux",
  },
  {
    name: "Lensart",
    img: ["https://picsum.photos/400/500/?grayscale", "https://picsum.photos/400/?grayscale" ],
    description: "A photography portfolio website showcasing high-resolution images and interactive galleries.",
    link: "https://github.com/DodiTank16/Lensart",
  },
  {
    name: "E-Learning Platform",
    img: ["https://picsum.photos/400/400/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "An online learning platform offering courses, quizzes, and progress tracking for students.",
    link: "https://github.com/DodiTank16/E_Learning",
  },
  {
    name: "IEMS",
    img: ["https://picsum.photos/400/600/?grayscale", "https://picsum.photos/400/?grayscale"],
    description: "An Inventory and Event Management System designed to streamline operations and resource allocation.",
    link: "https://github.com/DodiTank16/iems",
  },
];

const contactConfig = {
  YOUR_EMAIL: "tank.dodi@gmail.com",
  YOUR_FONE: "+91 99047 77068",
  description:
    "Got an idea, a project, or just want to connect? I'm always up for a good tech chat or collaboration. Whether it's building full-stack apps or solving tough bugs — let's make it happen!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/DodiTank16",
  // facebook: "https://facebook.com",
  linkedin: "https://in.linkedin.com/in/doditank",
  // twitter: "https://twitter.com",
};
export {
  contactConfig, dataabout,
  dataportfolio, introdata, logotext, meta, services, skills_frameworkDb, skills_languages, skills_tools, socialprofils, worktimeline
};

