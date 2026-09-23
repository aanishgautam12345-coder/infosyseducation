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
                <a href="https://www.facebook.com/share/199Ef2DhRQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@infosyseducation?_r=1&_t=ZS-99uXLuSndlU" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 2.512 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
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
