import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../common/PageBanner';

const CountryPage = ({ country }) => {
  return (
    <>
      <PageBanner
        title={country.tagline}
        subtitle={country.description}
        breadcrumbs={[
          { label: 'Study Abroad', link: '/study-abroad' },
          { label: country.name },
        ]}
      />

      {/* Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="country-hero-image" style={{ backgroundColor: country.color, borderRadius: '12px', height: '400px', overflow: 'hidden' }}>
                {country.image ? (
                  <img src={country.image} alt={country.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                ) : (
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <span style={{ fontSize: '8rem' }}>{country.flag}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="section-title">Overview</h2>
              <p className="lead">{country.overview}</p>
              <Link to="/contact" className="btn btn-warning btn-lg mt-3">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            Why Study in {country.name}?
          </h2>
          <div className="row g-4">
            {country.whyStudy.map((reason, index) => (
              <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-success fs-3 me-3"></i>
                  <div>
                    <h5>{reason}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Top Universities */}
            <div className="col-lg-4" data-aos="fade-up">
              <div className="info-card h-100">
                <div className="info-icon mb-3">
                  <i className="bi bi-building fs-1 text-primary"></i>
                </div>
                <h4>Top Universities</h4>
                <ul className="list-unstyled">
                  {country.topUniversities.map((uni, index) => (
                    <li key={index} className="py-2 border-bottom">
                      <i className="bi bi-mortarboard-fill text-warning me-2"></i>
                      <a href={uni.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        {uni.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Popular Courses */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="info-card h-100">
                <div className="info-icon mb-3">
                  <i className="bi bi-book fs-1 text-primary"></i>
                </div>
                <h4>Popular Courses</h4>
                <div className="course-tags">
                  {country.popularCourses.map((course, index) => (
                    <span key={index} className="badge bg-primary me-2 mb-2 fs-6">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cost of Living */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="info-card h-100">
                <div className="info-icon mb-3">
                  <i className="bi bi-cash-stack fs-1 text-primary"></i>
                </div>
                <h4>Cost of Living</h4>
                <div className="cost-breakdown">
                  <div className="cost-item py-2 border-bottom">
                    <span className="text-muted">Tuition:</span>
                    <strong className="d-block">{country.costOfLiving.tuition}</strong>
                  </div>
                  <div className="cost-item py-2 border-bottom">
                    <span className="text-muted">Living Expenses:</span>
                    <strong className="d-block">{country.costOfLiving.living}</strong>
                  </div>
                  <div className="cost-item py-2">
                    <span className="text-muted">Total (Estimate):</span>
                    <strong className="d-block text-primary fs-5">{country.costOfLiving.total}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Permit & Visa */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="info-card h-100">
                <h4><i className="bi bi-briefcase-fill text-warning me-2"></i>Work Permit & PR</h4>
                <p className="lead">{country.workPermit}</p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="info-card h-100">
                <h4><i className="bi bi-passport text-warning me-2"></i>Visa Information</h4>
                <p className="lead">{country.visaInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 cta-section">
        <div className="container text-center">
          <h2 className="text-white mb-3" data-aos="fade-up">Ready to Study in {country.name}?</h2>
          <p className="text-light mb-4" data-aos="fade-up" data-aos-delay="100">
            Get expert guidance from our counselors. Book a free consultation today!
          </p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="btn btn-warning btn-lg me-3">
              Book Appointment
            </Link>
            <Link to="/check-eligibility" className="btn btn-outline-light btn-lg">
              Check Eligibility
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryPage;
