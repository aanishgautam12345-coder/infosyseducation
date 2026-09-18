import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/images/logo.png"
            alt="Infosys Education Logo"
            className="logo-img"
          />
          <div className="brand-text ms-2">
            <span className="brand-name">Infosys Education</span>
            <span className="brand-tagline">& Advisory</span>
          </div>
        </Link>

        <BSNavbar.Toggle aria-controls="main-navbar" className="border-0">
          <span className="navbar-toggler-icon"></span>
        </BSNavbar.Toggle>

        <BSNavbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>

            <div className="nav-item dropdown">
              <NavLink
                to="/study-abroad"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Study Abroad
              </NavLink>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/study-abroad">All Countries</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/study-abroad/canada">🇨🇦 Canada</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/australia">🇦🇺 Australia</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/uk">🇬🇧 United Kingdom</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/usa">🇺🇸 United States</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/new-zealand">🇳🇿 New Zealand</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/malta">🇲🇹 Malta</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/europe">🇪🇺 Europe</Link></li>
              </ul>
            </div>

            <NavLink to="/testimonials" className="nav-link">
              Testimonials
            </NavLink>
            <NavLink to="/check-eligibility" className="nav-link">
              Check Eligibility
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/contact" className="btn btn-warning ms-lg-3 nav-cta">
              Book Appointment
            </NavLink>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
