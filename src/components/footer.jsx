import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedReveal from "./animatedReveal";

export default function Footer() {
  return (
    <>
      <img src="/assets/star.svg" alt="star" className="star-one" />
      <img src="/assets/star-2.svg" alt="star" className="star-two" />
      <img src="/assets/star.svg" alt="star" className="star-three" />
      <img src="/assets/star-gra.svg" alt="star" className="star-four" />
      <img
        src="/assets/PurpleFlaresecure.svg"
        alt="purple-flare"
        className="flare-two"
      />
      <div className="footer">
        <div className="footer-head">
          <AnimatedReveal>
            <div className="logo">
              get <span> linked</span>
            </div>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </AnimatedReveal>
        </div>
          <AnimatedReveal>
        <div className="split">
            <div className="line"></div>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
        </div>
          </AnimatedReveal>
        <nav className="footer-nav">
          <AnimatedReveal>
            <h5>Useful Links</h5>
          </AnimatedReveal>
          <ul>
            <AnimatedReveal>
              <li>
                <a href="#overview" >Overview</a>
              </li>
            </AnimatedReveal>
            <AnimatedReveal>
              <li>
                <a href="#timeline-desktop">Timeline</a>
              </li>
            </AnimatedReveal>
            <AnimatedReveal>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </AnimatedReveal>
            <AnimatedReveal>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </AnimatedReveal>
          </ul>
        </nav>
        <div className="follow">
          <AnimatedReveal>
            <span className="follow-us">Follow Us</span>
            <div className="socials">
              <img src="/assets/instagram.svg" alt="instagram-icon" />
              <img src="/assets/twitter.svg" alt="twitter-X" />
              <img src="/assets/facebook.svg" alt="facebook-icon" />
              <img src="/assets/linkedin.svg" alt="linkedin-icon" />
            </div>
          </AnimatedReveal>
        </div>
        <div className="contact">
          <AnimatedReveal>
            <h5>Contact Us</h5>
          </AnimatedReveal>

          <div className="contact-info">
            <AnimatedReveal>
              <div className="info">
                <img src="/assets/phone.svg" alt="phone-icon" />
                <p>+234 679 81819</p>
              </div>
            </AnimatedReveal>
            <AnimatedReveal>
              <div className="info">
                <img src="/assets/location.svg" alt="location-icon" />
                <p>27,Alara Street Yaba 100012 Lagos State</p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
      <AnimatedReveal>
        <small>All rights reserved. © getlinked Ltd.</small>
      </AnimatedReveal>
    </>
  );
}
