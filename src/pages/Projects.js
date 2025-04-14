import React from "react";
import "../style/Project.css";

const projects = [
  {
    title: "Face Recognition System",
    description:
      "An AI-powered system that identifies and verifies individuals using facial recognition techniques.",
    github: "https://github.com/PRAMIHA/Face_recognition_proj",
    demo: "https://github.com/PRAMIHA/Face_recognition_proj",
  },
  {
    title: "My Portfolio",
    description:
      "A sleek and interactive portfolio showcasing my skills, projects, and achievements in frontend development.",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourdemo.com/portfolio",
  },
  {
    title: "Go Green App",
    description:
      "An eco-friendly app promoting sustainable living with features like carbon footprint tracking and green challenges.",
    github: "https://gogreen-mu.vercel.app/",
    demo: "https://gogreen-mu.vercel.app/",
  },
  {
    title: "Donezo",
    description:
      "A to-do list is a simple tool used to organize and track tasks that need to be completed. It helps individuals or teams stay productive by listing tasks in order of priority..",
    github: "https://task-nine-phi.vercel.app/",
    demo: "https://task-nine-phi.vercel.app/",
  },
];

const Project = () => {
  return (
    <section className="projects-section">
      <h2 className="title">
        My Recent <span>Works</span>
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} className="btn demo" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
