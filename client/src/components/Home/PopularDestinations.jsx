import React from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../../data/countries';

const PopularDestinations = () => {
  return (
    <section className="py-5 destinations-section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Popular Study Destinations</h2>
          <p className="section-subtitle">
            Explore top study destinations chosen by thousands of Nepali students
          </p>
        </div>
        <div className="row g-4">
          {countries.map((country, index) => (
            <div key={country.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="country-card h-100">
                <div className="country-image" style={{ backgroundColor: country.color }}>
                  {country.image ? (
                    <img src={country.image} alt={country.name} className="country-flag-img" />
                  ) : (
                    <span className="country-flag-large">{country.flag}</span>
                  )}
                </div>
                <div className="country-info">
                  <h4>{country.tagline}</h4>
                  <p>{country.description}</p>
                  <div className="country-highlights mb-3">
                    {country.whyStudy.slice(0, 2).map((item, i) => (
                      <span key={i} className="badge bg-light text-dark me-1 mb-1">
                        <i className="bi bi-check-circle text-success me-1"></i>
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link to={`/study-abroad/${country.id}`} className="btn btn-primary w-100">
                    Explore {country.name}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
