import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

    const navItems = [
        {
            name: "HOME",
            slug: "/"
        },{
            name: "DONATE US",
            slug: "/donate"
        },{
            name: "ABOUT",
            slug: "/about"
        },{
            name: "CONTACT",
            slug: "/contact"
        }
    ]

    return (
        <>
            <nav className={show ? "navbar navbar_show" : "navbar"}>
                <div className='logo'>
                    <img src="/logo.png" alt="logo"/>
                </div>
                <div className={`links ${show ? 'show' : ''}`}>
                    <ul>
                        {navItems.map((item)=>(
                            <li onClick={() => setShow(false)}>
                            <NavLink key={item.name} to={item.slug}  className={({isActive})=>`${isActive? "active":""}`}> 
                                
                                    {item.name}
                                
                            </NavLink>
                            </li>
                        ))}
                        
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
