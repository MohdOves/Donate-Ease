import React from "react";
import { Link } from "react-router-dom";
import {
  
  FaSquareInstagram,
  FaLinkedin,
  FaGithub,
  FaX
} from "react-icons/fa6";

const Footer = () => {
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
            <Link to={"/"}>
              {" "}
              <span><FaSquareInstagram/></span> <span>Instagram</span>{""}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span><FaLinkedin/></span> <span>LinkedIn</span>{""}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span><FaX/></span> <span>X</span>{""}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span><FaGithub/></span> <span>GitHub</span>{""}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
