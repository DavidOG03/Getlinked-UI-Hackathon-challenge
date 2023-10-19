import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import AnimatedReveal from "../components/animatedReveal";
import axios from 'axios';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    topic: '',
    email: '',
    message: '',
  });

  const [confirmation, setConfirmation] = useState(false);

  const handleSuccess = () => {
    setConfirmation(true); // Update with your message
    setTimeout(() => {
      setConfirmation(false)
    }, 2000);
  };

  const clearConfirmation = () => {
    setConfirmation(false); // Clear the message
  };
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://jsonplaceholder.typicode.com/posts', formData)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        handleSuccess(); // Show confirmation message
        resetForm(); // Optionally reset the form fields
      })
      .catch((error) => {
        console.error('Error sending data:', error);
        clearConfirmation();
        // Handle errors, show an error message, etc.
      });

    // Simulate sending the email (replace this with actual sending logic)
    const emailMessage = `
      Team-Name: ${formData.name}
      Topic: ${formData.topic}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    // Log the email message (you can send it via an API or backend)
    console.log('Email Message:', emailMessage);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      topic: '',
      email: '',
      message: '',
    });
  }


  return (
    <div className="contact">
      <div className="contact-mobile">
        <img
          src="/assets/contactflare.svg"
          alt="purple flare"
          className="flare"
        />
        <img src="/assets/star-gra.svg" alt="star" className="star-1" />
        <img src="/assets/star-pu.svg" alt="star" className="star-2" />
        <img src="/assets/star-2.svg" alt="star" className="star-3" />
        <img src="/assets/star.svg" alt="star" className="star-4" />

        <NavLink to="/" className="nav-up" >
          <img src="/assets/left-arrow.svg" alt="left arrow" />
        </NavLink>

        <AnimatedReveal>
          <div className="contact-mobile-form">
            <h3>Questions or need assistance? Let us know about it</h3>
            <p>Email us below to any question related to our event</p>
            <form onSubmit={handleSubmit} className="contact-mobile-form">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="name"
                placeholder="Team's name"
                required
              />
              <input type="text" name="topic" id="topic" placeholder="Topic" 
              value={formData.topic}
              onChange={handleChange} required/>
              <input type="email" name="email" id="email" placeholder="Email"
               value={formData.email}
               onChange={handleChange} required/>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                value={formData.message}
            onChange={handleChange}
              ></textarea>

              <button type="submit" id="submit">Submit</button>
            </form>
          </div>
        </AnimatedReveal>

        <AnimatedReveal>
          <div className="contact-mobile-socials">
            <h4>Share on</h4>
            <div className="socials">
              <img src="/assets/instagram.svg" alt="instagram icon" />
              <img src="/assets/twitter.svg" alt="twitterX" />
              <img src="/assets/facebook.svg" alt="facebook icon" />
              <img src="/assets/linkedin.svg" alt="linkedin icon" />
            </div>
          </div>
        </AnimatedReveal>
      </div>

      <div className="contact-desktop">
        <img
          src="/assets/contactflare-desktop.svg"
          alt="flare"
          className="flare-1"
        />
        <img
          src="/assets/contactflare-desktop-2.svg"
          alt="flare"
          className="flare-2"
        />
        <img src="/assets/star-gra.svg" alt="star" className="star-1" />
        <img src="/assets/star-pu.svg" alt="star" className="star-2" />
        <img src="/assets/star-2.svg" alt="star" className="star-3" />
        <img src="/assets/star.svg" alt="star" className="star-4" />
        <img src="/assets/star-outline.svg" alt="star" className="star-5" />
        <img src="/assets/star-outline.svg" alt="star" className="star-6" />
        <div className="contact-desktop-text">
          <AnimatedReveal>
            <h3>Get in touch</h3>
            <p>Contact Information</p>
            <div className="location">
              27,Alara Street Yaba 100012 Lagos State
            </div>
            <div className="phone">Call Us : 07067981819</div>
            <div className="timetable">
              we are open from Monday-Friday 08:00am - 05:00pm\
            </div>
            <div className="contact-desktop-socials">
              <h4>Share on</h4>
              <div className="socials">
                <img src="/assets/instagram.svg" alt="instagram icon" />
                <img src="/assets/twitter.svg" alt="twitterX" />
                <img src="/assets/facebook.svg" alt="facebook icon" />
                <img src="/assets/linkedin.svg" alt="linkedin icon" />
              </div>
            </div>
          </AnimatedReveal>
        </div>

        <AnimatedReveal>
          <div className="contact-desktop-form">
            <h3>Questions or need assistance? Let us know about it</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input type="email" name="email" id="email" placeholder="Mail" 
              value={formData.email}
              onChange={handleChange}
              required/>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" id="submit">Submit</button>
            </form>
          </div>
        </AnimatedReveal>
      </div>

      {confirmation && <div className="confirmation-message">Thanks for contacting us!</div>}

    </div>
  );
}


