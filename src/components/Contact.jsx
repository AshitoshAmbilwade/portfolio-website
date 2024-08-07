import React, { useState } from 'react';
import axios from 'axios';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5174/', formData);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <>
      <div className="contactform">
        <div className="container contact" id="contact">
          <h1>CONTACT ME</h1>
          <div
            className="contact-icon"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
           
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  cols="40"
                  rows="10"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <input type="submit" value="submit" className="btn btn-outline-warning my-3 send"/>
              </form>
            </div>
            <a href="https://www.google.com" target="_blank" className="items">
              <FaInstagram className="icons" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100093939860425" target="_blank" className="items">
              <CiFacebook className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/ashitosh-ambilwade-a561a5293/" target="_blank" className="items">
              <CiLinkedin className="icons" />
            </a>
            <a href="https://www.google.com" target="_blank" className="items">
              <FaSquareXTwitter className="icons" />
            </a>
            <a href="https://github.com/AshitoshAmbilwade" target="_blank" className="items">
              <FaGithubSquare className="icons" />
            </a>
            <a
              href="mailto:ashitoshambilwade1289@gmail.com"
              target="_blank"
              className="items"
            >
              <SiGmail className="icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
