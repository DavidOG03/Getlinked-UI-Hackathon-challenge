import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
export default function Header() {

 
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeNav = () => {
    return setIsMobileNavOpen(false)
  };

  const show = {
    hidden: {
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        duration:2,
      }
    }
  }


  return (
    <>
      <div className="logo">
        <NavLink to="/" className="mobile-nav-link">
          get<span>linked</span>
        </NavLink>
      </div>

        <motion.nav 
        variants={show}
        initial="hidden"
        animate="visible"
        className={`mobile-nav ${isMobileNavOpen ? "active" : " "}`}>
          <div className="close" 
          onClick={() => {
            return setIsMobileNavOpen(false)}}>
            <img src="/assets/close.svg" alt="close button" />
          </div>
          <ul>
            <li>
              <a href="#timeline" className="mobile-nav-link" onClick={closeNav} >
                Timeline
              </a>
            </li>
            <li>
              <a href="#overview" className="mobile-nav-link" onClick={closeNav} >
                Overview
              </a>
            </li>
            <li>
              <a href="#faqs" className="mobile-nav-link" onClick={closeNav}>
                Faqs
              </a>
            </li>
            <li>
              <NavLink to="/contact" className="mobile-nav-link" onClick={closeNav}>
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink to="/register" className="mobile-nav-btn" onClick={closeNav}>
            Register
          </NavLink>
        </motion.nav>

      <nav className="desktop-nav">
        <ul>
          <a href="/#timeline-desktop" className="desktop-nav-link" onClick={() => scrollToSection("section1")}>
            Timeline
          </a>
          <a href="/#overview" className="desktop-nav-link" onClick={() => scrollToSection("section2")}>
            Overview
          </a>
          <a href="/#faqs" className="desktop-nav-link" onClick={() => scrollToSection("section3")}>
            Faqs
          </a>
          <NavLink to="/contact" className="desktop-nav-link">
            Contact
          </NavLink>
        </ul>
        <NavLink to="/register" className="register-btn">
          Register
        </NavLink>
      </nav>
      <div
        className="hamburger"
        onClick={() => {
          return setIsMobileNavOpen(true);
        }}
      >
        <img src="/assets/hamburger.svg" alt="" />
      </div>
    </>
  );
}
