import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaGithub,
  FaX
} from "react-icons/fa6";

const Footer = () => {
  // Social media links
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/mohammad-oves",
    github: "https://github.com/MohdOves",
    twitter: "https://twitter.com/MohdOves07",
    instagram: "https://instagram.com/mohd_oves_"
  };

  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Kota,Rajasthan,INDIA</li>
          <li>mohammadovescontact@gmail.com</li>
          <li>+91 9983449941</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <span><FaSquareInstagram/></span> <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <span><FaLinkedin/></span> <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <span><FaX/></span> <span>X</span>
            </a>
          </li>
          <li>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <span><FaGithub/></span> <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
