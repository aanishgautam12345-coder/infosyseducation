import React from 'react';
import CountryCard from './CountryCard';
import { countries } from '../../data/countries';
import { Link } from 'react-router-dom';

const StudyAbroadContent = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Choose Your Study Destination</h2>
          <p className="section-subtitle">
            We offer expert guidance for students looking to study in these popular destinations
          </p>
        </div>

        <div className="row g-4">
          {countries.map((country, index) => (
            <div key={country.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <CountryCard country={country} />
            </div>
          ))}
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <h4>Can't find what you're looking for?</h4>
          <p className="text-muted mb-3">We provide guidance for many more countries. Contact us to discuss your options.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadContent;
