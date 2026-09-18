import React from 'react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section className="page-banner">
      <div className="banner-overlay"></div>
      <div className="container position-relative">
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
        {breadcrumbs && (
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white">Home</Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active text-warning' : ''}`}>
                  {crumb.link ? (
                    <Link to={crumb.link} className="text-white">{crumb.label}</Link>
                  ) : (
                    crumb.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
