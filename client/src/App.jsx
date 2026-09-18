import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import Layout from './components/Layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import StudyAbroad from './pages/StudyAbroadPage';
import CountryDetailPage from './pages/CountryDetailPage';
import EligibilityPage from './pages/EligibilityPage';
import ContactPage from './pages/ContactPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import './App.css';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
});

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/study-abroad/:countryId" element={<CountryDetailPage />} />
          <Route path="/check-eligibility" element={<EligibilityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.me/9779714607930"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </Router>
  );
}

export default App;
