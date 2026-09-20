import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subscribeNewsletter } from '../../utils/api';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await subscribeNewsletter({ email });
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } catch (err) {
      setError('Subscription failed. Please try again.');
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          {/* Logo & About */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-about">
              <Link to="/" className="footer-logo d-flex align-items-center mb-3">
                <img src="/images/logo.png" alt="Infosys Education" className="footer-logo-img" />
                <div className="ms-2">
                  <h5 className="text-white mb-0">Infosys Education</h5>
                  <small className="text-warning">& Advisory</small>
                </div>
              </Link>
              <p className="text-light">
                Your trusted partner for international education. We help students achieve their dream of studying abroad with expert guidance and personalized support.
              </p>
              <div className="social-links mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/check-eligibility">Check Eligibility</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Study Destinations</h5>
            <ul className="footer-links">
              <li><Link to="/study-abroad/canada">Study in Canada</Link></li>
              <li><Link to="/study-abroad/australia">Study in Australia</Link></li>
              <li><Link to="/study-abroad/uk">Study in UK</Link></li>
              <li><Link to="/study-abroad/usa">Study in USA</Link></li>
              <li><Link to="/study-abroad/new-zealand">Study in New Zealand</Link></li>
              <li><Link to="/study-abroad/malta">Study in Malta</Link></li>
              <li><Link to="/study-abroad/europe">Study in Europe</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Contact Us</h5>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="bi bi-geo-alt-fill text-warning"></i>
                <p style={{ color: '#fff' }}>Aitabare Road, Itahari-06,<br />Sunsari, Nepal</p>
              </div>
              <div className="contact-item">
                <i className="bi bi-telephone-fill text-warning"></i>
                <p>
                  <a href="tel:+9779714607930">+977 9714607930</a><br />
                  <a href="tel:+9779714607932">+977 9714607932</a>
                </p>
              </div>
              <div className="contact-item">
                <i className="bi bi-envelope-fill text-warning"></i>
                <p><a href="mailto:infosyseducation@gmail.com">infosyseducation@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter mt-5">
          <div className="row align-items-center">
            <div className="col-md-5">
              <h5 className="text-white mb-1">Sign up to our Newsletter</h5>
              <p className="text-light small">Receive weekly newsletter with educational materials, popular books and much more!</p>
            </div>
            <div className="col-md-7">
              <form name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubscribe} className="newsletter-form d-flex gap-2">
                <input type="hidden" name="form-name" value="newsletter" />
                <p hidden>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-warning px-4">
                  Subscribe
                </button>
              </form>
              {subscribed && <small className="text-success mt-1 d-block">Successfully subscribed!</small>}
              {error && <small className="text-danger mt-1 d-block">{error}</small>}
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-light mb-0 small">
              © {new Date().getFullYear()} Infosys Education & Advisory. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-light mb-0 small">
              <Link to="/privacy" className="text-light text-decoration-none me-3">Privacy Policy</Link>
              <Link to="/terms" className="text-light text-decoration-none">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
