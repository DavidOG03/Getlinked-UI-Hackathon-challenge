import React, { useState } from "react";
import AnimatedReveal from "../components/animatedReveal";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Register = ({ isOpen, onClose }) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    category: "",
    size: "",
  });

  const [confirmation, setConfirmation] = useState(false);

  const handleSuccess = () => {
    setConfirmation(true); // Update with your message
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

    openModal();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        handleSuccess();
        resetForm(); // Optionally reset the form fields
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        clearConfirmation();
        // Handle errors, show an error message, etc.
      });

    // Simulate sending the email (replace this with actual sending logic)
    const emailMessage = `
      Team-Name: ${formData.name}
      Phone: ${formData.phone}
      Email: ${formData.email}
      Topic: ${formData.topic}
      Category: ${formData.category}
      Group Size: ${formData.size}
    `;

    // Log the email message (you can send it via an API or backend)
    console.log("Email Message:", emailMessage);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      topic: "",
      category: "",
      size: "",
    });
    closeModal();
  };

  return (
    <div className="register">
      <div className="register-mobile">
        <h3>Register</h3>
        <AnimatedReveal>
          <div className="register-image">
            <img
              src="/assets/register-mobile.png"
              alt="graphic  designer thumbing up"
            />
          </div>
        </AnimatedReveal>
        <img
          src="/assets/registerflare-mob.svg"
          alt="purple-flare"
          className="flare"
        />
        <img src="/assets/star-gra.svg" alt="star" className="star-1" />
        <img src="/assets/star-pu.svg" alt="star" className="star-2" />
        <img src="/assets/star-2.svg" alt="star" className="star-3" />
        <AnimatedReveal>
          <p>
            Be part of this movement!
            <span>
<<<<<<< HEAD
              <img src="/assets/female-emoji.png" alt="female walking emoji" />
              <img src="/assets/male-emoji.png" alt="male walking emoji" />
=======
              <img src="/assets/female-emoji.webp" alt="female walking emoji" />
              <img src="/assets/male-emoji.webp" alt="male walking emoji" />
>>>>>>> 623b12c (commit)
            </span>
          </p>
          <h4>CREATE YOUR ACCOUNT</h4>
          <form action="register" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Team's Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter the name of your group"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="topic">Topic</label>
              <input
                type="text"
                name="topic"
                id="topic"
                value={formData.topic}
                onChange={handleChange}
                placeholder="What is your group project topic"
                required
              />
            </div>
            <div className="options">
              <div className="options-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="select">Select your category</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="devOps">DevOps</option>
                </select>
              </div>
              <div className="options-group">
                <label htmlFor="size">Group Size</label>
                <select
                  name="size"
                  id="size"
                  required
                  value={formData.size}
                  onChange={handleChange}
                >
                  <option value="Select">Select</option>
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                </select>
              </div>
            </div>
            <span className="warning">
              Please review your registration details before submitting
            </span>
            <div className="terms">
              <input type="checkbox" required name="terms" id="terms" />
              {/* <span className="checkmark"></span> */}
              <label htmlFor="terms">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            <input type="Submit" value="Submit" id="submit" />
          </form>
        </AnimatedReveal>
      </div>
      <AnimatePresence>
        {confirmation && (
          <div className="confirmation">
            <motion.div
              initial={{ opacity: 0 ,
              transitionDuration:1}}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="confirmation-box"
            >
              <img src="/assets/star-gra.svg" alt="star" className="star-one" />
              <img src="/assets/star-pu.svg" alt="star" className="star-two" />
              <img src="/assets/star-2.svg" alt="star" className="star-three" />
              <div className="image">
                <img
<<<<<<< HEAD
                  src="/assets/successfully-done-mob.png"
=======
                  src="/assets/successfully-done-mob.webp"
>>>>>>> 623b12c (commit)
                  alt="success icon"
                  className="icon"
                />
                <img
<<<<<<< HEAD
                  src="/assets/successful-man-mob.png"
=======
                  src="/assets/successful-man-mob.webp"
>>>>>>> 623b12c (commit)
                  alt="successful man"
                  className="man"
                />
              </div>
              <h4>Congratulations you have successfully Registered!</h4>
              <p>
                Yes, it was easy and you did it! check your mail box for next
                step
                <span>
<<<<<<< HEAD
                  <img src="/assets/wink.png" alt="wink-emoji" />
=======
                  <img src="/assets/wink.webp" alt="wink-emoji" />
>>>>>>> 623b12c (commit)
                </span>
              </p>
              <button className="back-btn" onClick={clearConfirmation} isOpen={isModalOpen} onClose={closeModal}>
                back
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* desktop  */}
      <div className="register-desktop">
        <div className="image">
          <AnimatedReveal>
            <img
<<<<<<< HEAD
              src="/assets/register-dsktp.png"
=======
              src="/assets/register-dsktp.webp"
>>>>>>> 623b12c (commit)
              alt="grahic designer thumbs up"
            />
          </AnimatedReveal>
        </div>

        <img
<<<<<<< HEAD
          src="/assets/registerflaredsktp-1.png"
=======
          src="/assets/registerflaredsktp-1.webp"
>>>>>>> 623b12c (commit)
          alt="purple flare"
          className="flare-1"
        />
        <img
<<<<<<< HEAD
          src="/assets/registerflaredsktp-2.png"
=======
          src="/assets/registerflaredsktp-2.webp"
>>>>>>> 623b12c (commit)
          alt="purple flare"
          className="flare-2"
        />
        <img src="/assets/star-gra.svg" alt="star" className="star-1" />
        <img src="/assets/star-pu.svg" alt="star" className="star-2" />
        <img src="/assets/star-2.svg" alt="star" className="star-3" />
        <img src="/assets/star-2.svg" alt="star" className="star-4" />
        <img src="/assets/star.svg" alt="star" className="star-5" />
        <AnimatedReveal>
          <div className="register-form">
            <h3>Register</h3>
            <p>
              Be part of this movement!
              <span>
                <img
<<<<<<< HEAD
                  src="/assets/female-emoji.png"
                  alt="female walking emoji"
                />
                <img src="/assets/male-emoji.png" alt="male walking emoji" />
=======
                  src="/assets/female-emoji.webp"
                  alt="female walking emoji"
                />
                <img src="/assets/male-emoji.webp" alt="male walking emoji" />
>>>>>>> 623b12c (commit)
              </span>
            </p>

            <h4>CREATE YOUR ACCOUNT</h4>
            <form action="register" onSubmit={handleSubmit}>
              <div className="form">
              <div className="input-group">
                <label htmlFor="name">Team's Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter the name of your group"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="topic">Topic</label>
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  placeholder="What is your group project topic"
                  required
                />
              </div>
              <div className="options-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="select your category">
                    Select your category
                  </option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="devOps">DevOps</option>
                </select>
              </div>
              <div className="options-group">
                <label htmlFor="size">Group Size</label>
                <select
                  name="size"
                  id="size"
                  required
                  value={formData.size}
                  onChange={handleChange}
                >
                  <option value="Select">Select</option>
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                </select>
              </div>
              </div>

              <span className="warning">
                Please review your registration details before submitting
              </span>
              <div className="terms">
                <input type="checkbox" required name="terms" id="terms" />
                <span className="checkmark"></span>
                <label htmlFor="terms">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
              <input type="submit" value="Register Now" id="submit" />
            </form>
          </div>
        </AnimatedReveal>
      </div>
      <AnimatePresence>
      {confirmation && (
        <div className="confirmation-desktop">
          <motion.div
            initial={{ opacity: 0 , 
            transitionDuration:1}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="confirmation-desktop-box"
          >
            <img src="/assets/star-gra.svg" alt="star" className="star-one" />
            <img src="/assets/star-pu.svg" alt="star" className="star-two" />
            <img src="/assets/star-2.svg" alt="star" className="star-three" />
            <div className="image">
              <img
<<<<<<< HEAD
                src="/assets/successfully-done-mob.png"
=======
                src="/assets/successfully-done-mob.webp"
>>>>>>> 623b12c (commit)
                alt="success icon"
                className="icon"
              />
              <img
<<<<<<< HEAD
                src="/assets/successful-man-mob.png"
=======
                src="/assets/successful-man-mob.webp"
>>>>>>> 623b12c (commit)
                alt="successful man"
                className="man"
              />
            </div>
            <h4>Congratulations you have successfully Registered!</h4>
            <p>
              Yes, it was easy and you did it! check your mail box for next step
              <span>
<<<<<<< HEAD
                <img src="/assets/wink.png" alt="wink-emoji" />
=======
                <img src="/assets/wink.webp" alt="wink-emoji" />
>>>>>>> 623b12c (commit)
              </span>
            </p>
            <button className="back-btn" onClick={clearConfirmation} isOpen={isModalOpen} onClose={closeModal}>
              back
            </button>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
      
    </div>
  );
}

export default Register;