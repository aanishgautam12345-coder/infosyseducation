import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent = () => {
  const stats = [
    { number: '150+', label: 'Students Placed' },
    { number: '100+', label: 'Partner Universities' },
    { number: '6+', label: 'Study Destinations' },
    { number: '98%', label: 'Visa Success Rate' },
  ];

  const team = [
    { name: 'Sishan Adhikari', role: 'Managing Director', initials: 'SA' },
    { name: 'Bikram Thapa', role: 'CEO', initials: 'BT' },
    { name: 'Samjhana Karki', role: 'Head Counselor', initials: 'SK' },
    { name: 'Utsav Bhattarai', role: 'Admission Officer / Senior Counselor', initials: 'UB' },
  ];

  return (
    <>
      {/* About Overview */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="about-image-placeholder" style={{ backgroundColor: '#0d2b55', borderRadius: '12px', height: '400px' }}>
                <div className="d-flex align-items-center justify-content-center h-100 text-white">
                  <div className="text-center">
                    <img src="/images/logo.png" alt="Infosys Education" style={{ maxHeight: '120px' }} />
                    <h4 className="mt-3">Infosys Education & Advisory</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="section-title">About Us</h2>
              <p className="lead">
                Infosys Education & Advisory is a leading education consultancy based in Itahari, Nepal, dedicated to helping students achieve their dreams of studying abroad.
              </p>
              <p>
                We have successfully placed thousands of students in top universities across Canada, Australia, UK, USA, New Zealand, and Malta. Our team of expert counselors provides personalized guidance throughout the entire process — from university selection to visa approval.
              </p>
              <p>
                We believe that every student deserves access to world-class education, and we work tirelessly to make that dream a reality. Our comprehensive services include career counseling, university selection, application assistance, visa processing, scholarship guidance, and pre-departure orientation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 stats-section">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="stat-card text-center">
                  <h2 className="stat-number">{stat.number}</h2>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="mission-card h-100">
                <div className="mission-icon mb-3">
                  <i className="bi bi-bullseye fs-1 text-warning"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower students with the knowledge, resources, and support they need to access quality international education and build successful global careers.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="mission-card h-100">
                <div className="mission-icon mb-3">
                  <i className="bi bi-eye fs-1 text-warning"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted and reliable education consultancy in Nepal, recognized for our commitment to student success and ethical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">Our Core Values</h2>
          <div className="row g-4">
            {[
              { icon: 'bi-heart', title: 'Student First', desc: 'Every decision we make is guided by what\'s best for our students.' },
              { icon: 'bi-shield-check', title: 'Integrity', desc: 'We maintain the highest standards of honesty and transparency.' },
              { icon: 'bi-trophy', title: 'Excellence', desc: 'We strive for excellence in every service we provide.' },
              { icon: 'bi-handshake', title: 'Trust', desc: 'We build lasting relationships based on trust and mutual respect.' },
            ].map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="value-card text-center h-100">
                  <i className={`bi ${value.icon} fs-1 text-primary mb-3`}></i>
                  <h5>{value.title}</h5>
                  <p className="text-muted">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">Our Team</h2>
          <div className="row g-4 justify-content-center">
            {team.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="team-card text-center">
                  <div className="team-avatar">
                    <span>{member.initials}</span>
                  </div>
                  <h5 className="mt-3 mb-1">{member.name}</h5>
                  <p className="text-muted">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 cta-section">
        <div className="container text-center">
          <h2 className="text-white mb-3">Ready to Start Your Journey?</h2>
          <p className="text-light mb-4">
            Contact us today for a free consultation and take the first step towards your international education.
          </p>
          <Link to="/contact" className="btn btn-warning btn-lg me-3">
            Contact Us
          </Link>
          <Link to="/check-eligibility" className="btn btn-outline-light btn-lg">
            Check Eligibility
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
