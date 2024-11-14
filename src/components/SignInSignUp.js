import React, { useRef, useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import './SignInSignUp.css'; // Ensure you create and import this CSS file

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to track sign up mode
  const containerRef = useRef(null); // Ref to access the container

  const handleToggle = () => {
    setIsSignUp((prev) => !prev); // Toggle sign-up state
    if (containerRef.current) {
      containerRef.current.classList.toggle("sign-up-mode", !isSignUp);
    }
  };

  return (
    <div className="container" ref={containerRef}>
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUp ? (
            <form className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <FaUser />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-field">
                <FaEnvelope />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-field">
                <FaLock />
                <input type="password" placeholder="Password" required />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          ) : (
            <form className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <FaUser />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-field">
                <FaLock />
                <input type="password" placeholder="Password" required />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" onClick={handleToggle}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" onClick={handleToggle}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
