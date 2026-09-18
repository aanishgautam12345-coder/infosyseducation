import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../../data/testimonials';

const TestimonialPreview = () => {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-5 testimonial-section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Hear from students who successfully achieved their study abroad dreams
          </p>
        </div>
        <div className="row g-4">
          {featuredTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
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
                      {testimonial.program} - {testimonial.country}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5" data-aos="fade-up">
          <Link to="/testimonials" className="btn btn-outline-primary btn-lg">
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPreview;
