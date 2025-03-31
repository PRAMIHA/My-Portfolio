import React from "react";
import "../style/Project.css";

const projects = [
  {
    title: "Face Recognition System",
    description:
      "Personal Chat Room or Workspace to share resources and hang out with friends. Built with React.js, Material-UI, and Firebase. Features include real-time messaging, image sharing, and message reactions.",
    github: "#",
    demo: "#",
    image: "face.jpeg",
  },
  {
    title: "My Portfolio",
    description:
      "A personal blog page built with Next.js and Tailwind CSS. It takes content from Markdown files and renders it using Next.js. Supports dark mode and easy Markdown writing.",
    github: "#",
    demo: "#",
    image: "bits-of-code.png",
  },
  {
    title: "Automated ResumeBuilder",
    description:
      "An online code and Markdown editor built with React.js. Supports HTML, CSS, and JS with instant preview. Also includes a Markdown editor for README files with toolbar support and local storage auto-save.",
    github: "#",
    demo: "#",
    image: "editorio.png",
  },
  {
    title: "Go Green App",
    description:
      "An online code and Markdown editor built with React.js. Supports HTML, CSS, and JS with instant preview. Also includes a Markdown editor for README files with toolbar support and local storage auto-save.",
    github: "#",
    demo: "#",
    image: "editorio.png",
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
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.github} className="btn github">GitHub</a>
              <a href={project.demo} className="btn demo">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
