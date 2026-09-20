import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8">
            <div className="hero-content" data-aos="fade-up">
              <h1 className="hero-title">
                Your Gateway to <span className="text-warning">International Education</span>
              </h1>
              <p className="hero-subtitle">
                Studying abroad offers you the opportunity to expand your horizons, see different cultures firsthand, and earn priceless knowledge in addition to academic benefits.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-warning btn-lg px-5">
                  Book Appointment
                </Link>
                <Link to="/check-eligibility" className="btn btn-outline-light btn-lg px-5">
                  Check Eligibility
                </Link>
              </div>
              <div className="hero-stats mt-5">
                <div className="stat-item">
                  <h3 className="text-warning">150+</h3>
                  <p className="text-light">Students Placed</p>
                </div>
                <div className="stat-item">
                  <h3 className="text-warning">100+</h3>
                  <p className="text-light">Partner Universities</p>
                </div>
                <div className="stat-item">
                  <h3 className="text-warning">7+</h3>
                  <p className="text-light">Study Destinations</p>
                </div>
                <div className="stat-item">
                  <h3 className="text-warning">98%</h3>
                  <p className="text-light">Visa Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
