import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="flex">
            <h2>About Us</h2>
            <h3>Discover Our Team's Story</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam laborum quidem maiores reprehenderit illum cum aut, in soluta ipsam est quod voluptas saepe sequi esse, rem quis impedit earum.
            </p>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <a href="/" className="btn">Learn More</a>
            <div className="flex">
            <img src={process.env.PUBLIC_URL + '/about-us.jpg'} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
