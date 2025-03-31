import React from "react";
import "../style/Contact.css";

const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Resume file in public folder
    link.download = "Your_Name_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-container">
      <button className="download-btn" onClick={handleDownload}>
        📄 Download CV
      </button>
    </div>
  );
};

export default Contact;
