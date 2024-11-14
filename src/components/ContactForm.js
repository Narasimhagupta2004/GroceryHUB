
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import './ContactForm.css'; // Ensure this path is correct
import Footer from './Footer'; // Ensure Footer component is correctly imported

// Directly reference images from the public folder
const emailIcon = `${process.env.PUBLIC_URL}/img/email.png`;
const locationIcon = `${process.env.PUBLIC_URL}/img/location.png`;
const phoneIcon = `${process.env.PUBLIC_URL}/img/phone.png`;
const shapeImage = `${process.env.PUBLIC_URL}/img/shape.png`;

const ContactForm = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    const focusFunc = (e) => {
      let parent = e.target.parentNode;
      parent.classList.add("focus");
    };

    const blurFunc = (e) => {
      let parent = e.target.parentNode;
      if (e.target.value === "") {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    // Cleanup listeners on unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  return (
    <div>
      <div className="container">
        <span className="big-circle"></span>
        <img src={shapeImage} className="square" alt="Shape" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <img src={locationIcon} className="icon" alt="Location" />
                <p>main road Gokavaram 533286</p>
              </div>
              <div className="information">
                <img src={emailIcon} className="icon" alt="Email" />
                <p>lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src={phoneIcon} className="icon" alt="Phone" />
                <p>9121-345-262</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" required />
                <label htmlFor="name">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" required />
                <label htmlFor="email">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" required />
                <label htmlFor="phone">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" required></textarea>
                <label htmlFor="message">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
