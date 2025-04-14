import React from "react";
import "../style/About.css";
import coderImage from "../assets/coder_transparent.png"; // Make sure to place the image in the correct path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text-section">
          <h1 className="about-title">
            Know Who <span className="highlight">I'M</span>
          </h1>
          <p className="about-text">
            Hi Everyone, I am <span className="highlight">Pramiha</span> from{" "}
            <span className="highlight">Trichy, India.</span>
          </p>
          <p className="about-text">
            I have completed my B.TECH Information Technology 
          </p>

          <h2 className="activities-title">Apart from coding, some other activities that I love to do!</h2>
          <ul className="activities-list">
            <li>🎮 Playing Games</li>
            <li> 👩‍🍳Cooking</li>
            <li>🌍 Travelling</li>
            <li>🧑‍🌾 Gardening</li>
          </ul>

          <blockquote className="quote">
            "Strive to build things that make a difference!"
            <br />— Pramiha
          </blockquote>
        </div>

        {/* Image Section */}
        <div className="about-image">
          <img src={coderImage} alt="Coder Illustration" />
        </div>
      </div>
    </div>
  );
};

export default About;
