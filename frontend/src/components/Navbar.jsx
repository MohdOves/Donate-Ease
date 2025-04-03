import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaLinkedin, FaX, FaSquareGithub} from "react-icons/fa6"
import {BsInstagram} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdClose} from "react-icons/io"

const Navbar = () => {
    const [show, setShow] = useState(false);

    // Social media links
    const socialLinks = {
      
        linkedin: "https://www.linkedin.com/in/mohammad-oves",
        github: "https://github.com/MohdOves",
        twitter: "https://twitter.com/MohdOves07",
        instagram: "https://instagram.com/mohd_oves_"
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (show && !event.target.closest('.navbar') && !event.target.closest('.links')) {
                setShow(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [show]);

    return (
        <>
            <nav className={show ? "navbar navbar_show" : "navbar"}>
                <div className='logo'>
                    <img src="/logo.png" alt="logo"/>
                </div>
                <div className={`links ${show ? 'show' : ''}`}>
                    <ul>
                        <li><Link to={"/"} onClick={() => setShow(false)}>HOME</Link></li>
                        <li><Link to={"/donate"} onClick={() => setShow(false)}>DONATE US</Link></li>
                        <li><Link to={"/about"} onClick={() => setShow(false)}>ABOUT</Link></li>
                        <li><Link to={"/contact"} onClick={() => setShow(false)}>CONTACT</Link></li>
                    </ul>
                    <ul>
                        <li>
                            <a 
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setShow(false)}
                            >
                                <FaLinkedin/>
                            </a>
                        </li>
                        <li>
                            <a 
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setShow(false)}
                            >
                                <FaSquareGithub/>
                            </a>
                        </li>
                        <li>
                            <a 
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setShow(false)}
                            >
                                <FaX/>
                            </a>
                        </li>
                        <li>
                            <a 
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setShow(false)}
                            >
                                <BsInstagram/>
                            </a>
                        </li>
                    </ul>
                </div>
                <button className="hamburger" onClick={() => setShow(!show)}>
                    {show ? <IoMdClose /> : <GiHamburgerMenu />}
                </button>
            </nav>
        </>
    )
}

export default Navbar
