import React from "react";
import "../style/Home.css";
import profileImg from "../assets/developer.png";
import resumeFile from "../assets/resume.pdf"; // Import your PDF

const Home = () => {
  return (
    <section className="home-container">
      <div className="text-content">
        <h1>Hi There! 👋</h1>
        <h2>
          I'M <span>PRAMIHA</span>
        </h2>
        <p>React Enthusiast</p>
        <a href={resumeFile} download className="resume-btn">
          Download Resume
        </a>
      </div>

      <div className="image-content">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
