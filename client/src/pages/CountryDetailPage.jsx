import React from 'react';
import { useParams } from 'react-router-dom';
import CountryPage from '../components/StudyAbroad/CountryPage';
import { getCountryById } from '../data/countries';

const CountryDetailPage = () => {
  const { countryId } = useParams();
  const country = getCountryById(countryId);

  if (!country) {
    return (
      <div className="container py-5 text-center">
        <h2>Country Not Found</h2>
        <p className="text-muted">The country you're looking for doesn't exist.</p>
        <a href="/study-abroad" className="btn btn-primary">
          Browse All Countries
        </a>
      </div>
    );
  }

  return <CountryPage country={country} />;
};

export default CountryDetailPage;
