import React from "react";
import "../style/Home.css";
import developerImg from "../assets/developer.png"; // Add an appropriate developer illustration
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h2 className="greeting">
          Hi There! <span className="wave">👋</span>
        </h2>
        <h1>
          I'M <span className="highlight">PRAMIHA</span>
        </h1>
        <h2 className="typing-text">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Full-Stack Developer",
              2000,
              "React Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <button className="cta-button">Download Resume</button>
      </div>

      <div className="image-container">
        <img src={developerImg} alt="Developer Illustration" className="dev-image" />
      </div>
    </div>
  );
};

export default Home;
