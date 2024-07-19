// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
//import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Mustapha Zoghlami",
  tagline: " Mobile & Web Developer | Computer Engineer | Cybersecurity Enthusiast ", // Highlight mobile dev
  img: profile,
  about: `Highly motivated and results-oriented Computer Engineer with a proven track record in leading teams, developing innovative solutions, and driving positive change. Extensive experience in Python programming, cybersecurity, network administration, cloud platforms (AWS, Azure, Google Cloud), and mobile development with React Native.`, // Mention React Native
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/zogmus99/",
  github: "https://github.com/zoghlamimostafa", // Add Mustapha's GitHub profile URL if available
  twitter: "https://x.com/ZoghlamiMostafa", // Add Mustapha's Twitter profile URL if available
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Director",
    Company: "Aether Trade LTD",
    Location: "London, United Kingdom",
    Type: "Full Time",
    Duration: "August 2023 - Present",
  },
  {
    Position: "Ecommerce Manager",
    Company: "Electrotech",
    Location: "Bizerte, Tunisia",
    Type: "Full Time",
    Duration: "July 2023 - August 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Science in Computer Engineering (in progress)",
    Company: "Faculty of Sciences of Bizerte",
    Location: "Bizerte, Tunisia",
    Type: "Full Time",
    Duration: "2020 - 2023",
  },
  {
    Position: "Google Cybersecurity Certificate",
    Company: "Coursera",
    Location: "Online",
    Type: "Certification",
    Duration: "2024", // Assuming completion year
  },
  {
    Position: "Scientific Computing with Python",
    Company: "FreeCodeCamp",
    Location: "Online",
    Type: "Certification",
    Duration: "2023", 
  },
];



// Enter your Project Details here (Based on provided resumes)
export const projectDetails = [
  {
    title: "ESP-Streaming",
    image: projectImage1, // Replace with actual image
    description: "Set up an ESP32-CAM module as a web server to capture and serve JPEG images.",
    techstack: "Python, ESP32",
    githubLink: "https://github.com/zoghlamimostafa/Esp-streaming", // Replace with actual link
  },
  {
    title: "Face Recognition",
    image: projectImage2, // Replace with actual image
    description: "Implemented a face recognition system using OpenCV, face recognition libraries, and Firebase.",
    techstack: "Python, OpenCV, Firebase",
    githubLink: "https://github.com/zoghlamimostafa/face-recognition", // Replace with actual link
  },
  {
    title: "Unknown Face Alarm",
    image: projectImage3, // Replace with actual image
    description: "A Flutter application that detects unknown faces in a video stream or set of images.",
    techstack: "Flutter, Python",
    githubLink: "https://github.com/zoghlamimostafa/unknown-face-alarm", // Replace with actual link
  },
  {
    title: "Mobile Expense Tracker (React Native) ",
    image: projectImage4,
    description: `A mobile app developed with React Native that allows users to track their daily expenses, set budgets, and visualize spending patterns.`,
    techstack: "React Native, Firebase",
    githubLink: "https://github.com/zoghlamimostafa/Expense-Tracker-React-Native-App", // Replace with actual link
  },
  {
    title: "Portfolio Website (React)",
    image: projectImage5,
    description: `A personal portfolio website built with React to showcase my skills and projects.`,
    techstack: "React, HTML/CSS, JavaScript",
    previewLink: "https://your-portfolio-website.com", // Replace with actual link
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "zoghlamimustapha16@gmail.com",
  phone: "+216 52994394",
};


// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};
