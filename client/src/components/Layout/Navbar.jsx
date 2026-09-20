import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setExpanded(false);

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeNav}>
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

        <BSNavbar.Collapse id="main-navbar" className="navbar-collapse">
          <Nav className="ms-auto align-items-lg-center">
            <NavLink to="/" className="nav-link" onClick={closeNav}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeNav}>
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
                <li><Link className="dropdown-item" to="/study-abroad" onClick={closeNav}>All Countries</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/study-abroad/canada" onClick={closeNav}>🇨🇦 Canada</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/australia" onClick={closeNav}>🇦🇺 Australia</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/uk" onClick={closeNav}>🇬🇧 United Kingdom</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/usa" onClick={closeNav}>🇺🇸 United States</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/new-zealand" onClick={closeNav}>🇳🇿 New Zealand</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/malta" onClick={closeNav}>🇲🇹 Malta</Link></li>
                <li><Link className="dropdown-item" to="/study-abroad/europe" onClick={closeNav}>🇪🇺 Europe</Link></li>
              </ul>
            </div>

            <NavLink to="/testimonials" className="nav-link" onClick={closeNav}>
              Testimonials
            </NavLink>
            <NavLink to="/check-eligibility" className="nav-link" onClick={closeNav}>
              Check Eligibility
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeNav}>
              Contact Us
            </NavLink>
            <NavLink to="/contact" className="btn btn-warning ms-lg-3 nav-cta" onClick={closeNav}>
              Book Appointment
            </NavLink>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
