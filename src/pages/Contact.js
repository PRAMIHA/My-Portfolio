import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "../style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2 className="title">Get in <span>Touch</span></h2>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <p><FaEnvelope /> pramiha16@gmail.com</p>
          <p><FaPhone /> 9176948112</p>
          <p><FaMapMarkerAlt /> Trichy, India</p>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://github.com/PRAMIHA" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/pramiha-kalaiselvan-a252022a4/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="map-container">
      <iframe title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.265181598565!2d78.7053464905312!3d10.87751850710973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf68e8f18ceed%3A0xb5d86b6296f3e937!2sNo%201%20Tollgate%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20621216!5e0!3m2!1sen!2sin!4v1743488828702!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: '0' }}  // Correcting to use an object
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </section>
  );
};

export default Contact;
