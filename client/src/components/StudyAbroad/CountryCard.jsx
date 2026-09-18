import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
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
        <div className="country-cost mb-3">
          <small className="text-muted">
            <i className="bi bi-cash me-1"></i>
            Tuition: {country.costOfLiving.tuition}
          </small>
        </div>
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
  );
};

export default CountryCard;
