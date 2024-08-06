import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
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
          <div class="contact-form">
        <form action="">
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Your Email" required/>
          <textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
          <input type="submit" value="submit" className="btn btn-outline-warning my-3 send"/>

        </form>
        </div >
        </div>
     
      </div>
      

      </div> 
      
    </>
  );
};

export default Contact;
