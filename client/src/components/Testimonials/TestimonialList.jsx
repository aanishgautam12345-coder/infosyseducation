import React, { useState } from 'react';
import { testimonials } from '../../data/testimonials';

const TestimonialList = () => {
  const [filter, setFilter] = useState('all');

  const countries = ['all', ...new Set(testimonials.map((t) => t.country))];
  const filtered = filter === 'all' ? testimonials : testimonials.filter((t) => t.country === filter);

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Student Testimonials</h2>
            <p className="section-subtitle">
              Real stories from real students who achieved their study abroad dreams
            </p>
          </div>

          {/* Filter */}
          <div className="text-center mb-4" data-aos="fade-up">
            <div className="btn-group flex-wrap" role="group">
              {countries.map((country) => (
                <button
                  key={country}
                  type="button"
                  className={`btn ${filter === country ? 'btn-primary' : 'btn-outline-primary'} mb-2`}
                  onClick={() => setFilter(country)}
                >
                  {country === 'all' ? 'All Countries' : country}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="row g-4">
            {filtered.map((testimonial, index) => (
              <div key={testimonial.id} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="testimonial-card h-100">
                  <div className="testimonial-rating mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`bi bi-star${i < testimonial.rating ? '-fill' : ''} text-warning`}></i>
                    ))}
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author d-flex align-items-center mt-4">
                    <div className="author-avatar">
                      <span>{testimonial.initials}</span>
                    </div>
                    <div className="author-info ms-3">
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-muted">
                        {testimonial.program}
                      </small>
                      <br />
                      <small className="text-primary">
                        <i className="bi bi-geo-alt me-1"></i>
                        <a href={testimonial.universityUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">
                          {testimonial.university}
                        </a>, {testimonial.country}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No testimonials found for this country.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default TestimonialList;
