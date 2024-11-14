import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Assuming you create a Footer.css file for styles

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Branches</h3>
          <a href="#"> <FaMapMarkerAlt /> bangalore </a>
          <a href="#"> <FaMapMarkerAlt /> hyderabad </a>
          <a href="#"> <FaMapMarkerAlt /> delhi </a>
          <a href="#"> <FaMapMarkerAlt /> kolkata </a>
          <a href="#"> <FaMapMarkerAlt /> chennai </a>
        </div>

        <div className="box">
          <h3>Contact info</h3>
          <a href="#"> <FaPhone /> +91-9121345262 </a>
          <a href="#"> <FaPhone /> +91-9676336741 </a>
          <a href="#"> <FaEnvelope /> EliteEventplanners@gmail.com </a>
          <a href="#"> <FaEnvelope /> viswavardhankandula@gmail.com </a>
          <a href="#"><FaMapMarkerAlt /> Andhra Pradesh, Gokavarm, India - 533286</a>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          <a href="#"> <FaFacebookF /> facebook </a>
          <a href="#"> <FaTwitter /> twitter </a>
          <a href="#"> <FaInstagram /> instagram </a>
          <a href="#"> <FaLinkedinIn /> linkedin </a>
        </div>
      </div>

      <div className="credit">
        created by <span>Kandula</span> | © all rights reserved
      </div>
    </section>
  );
};

export default Footer;



// import React from 'react';
// import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
// import './Footer.css'; // Assuming you create a Footer.css file for styles

// const Footer = () => {
//   return (
//     <section className="footer">
//       <div className="box-container">
//         <div className="box">
//           <h3>Branches</h3>
//           <a href="#"><FaMapMarkerAlt /> bangalore </a>
//           <a href="#"><FaMapMarkerAlt /> hyderabad </a>
//           <a href="#"><FaMapMarkerAlt /> delhi </a>
//           <a href="#"><FaMapMarkerAlt /> kolkata </a>
//           <a href="#"><FaMapMarkerAlt /> chennai </a>
//         </div>

//         <div className="box">
//           <h3>Contact info</h3>
//           <a href="#"><FaPhone /> +91-9121345262 </a>
//           <a href="#"><FaPhone /> +91-9676336741 </a>
//           <a href="#"><FaEnvelope /> EliteEventplanners@gmail.com </a>
//           <a href="#"><FaEnvelope /> viswavardhankandula@gmail.com </a>
//           <a href="#"><FaMapMarkerAlt /> Andhra Pradesh, Gokavarm, India - 533286</a>
//         </div>

//         <div className="box">
//           <h3>Follow Us</h3>
//           <a href="#"><FaFacebookF /> facebook </a>
//           <a href="#"><FaTwitter /> twitter </a>
//           <a href="#"><FaInstagram /> instagram </a>
//           <a href="#"><FaLinkedinIn /> linkedin </a>
//         </div>
//       </div>

//       <div className="credit">
//         created by <span>Kandula</span> | all rights reserved
//       </div>
//     </section>
//   );
// };

// export default Footer;
