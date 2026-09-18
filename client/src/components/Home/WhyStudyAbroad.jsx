import React from 'react';
import { Link } from 'react-router-dom';

const WhyStudyAbroad = () => {
  const reasons = [
    {
      icon: 'bi-globe',
      title: 'Global Exposure',
      description: 'Experience diverse cultures, meet people from around the world, and develop a global mindset.',
    },
    {
      icon: 'bi-book',
      title: 'World-Class Education',
      description: 'Access top-ranked universities with cutting-edge facilities and renowned faculty.',
    },
    {
      icon: 'bi-briefcase',
      title: 'Career Opportunities',
      description: 'Gain international work experience and open doors to global career prospects.',
    },
    {
      icon: 'bi-people',
      title: 'Personal Growth',
      description: 'Build independence, confidence, and life skills that set you apart.',
    },
    {
      icon: 'bi-cash-stack',
      title: 'Scholarships Available',
      description: 'Many countries offer scholarships and financial aid for international students.',
    },
    {
      icon: 'bi-shield-check',
      title: 'Safe Environment',
      description: 'Study in safe, welcoming countries with strong support systems for international students.',
    },
  ];

  return (
    <section className="py-5 why-study-section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Why Study Abroad?</h2>
          <p className="section-subtitle">
            Studying abroad is more than just education — it's a life-changing experience
          </p>
        </div>
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="reason-card h-100">
                <div className="reason-icon">
                  <i className={`bi ${reason.icon}`}></i>
                </div>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/about" className="btn btn-outline-primary btn-lg">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyStudyAbroad;
