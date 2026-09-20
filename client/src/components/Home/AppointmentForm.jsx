import React, { useState } from 'react';
import { submitAppointment } from '../../utils/api';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    country: 'Nepal',
    appointmentDate: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const countries = [
    'Nepal', 'USA', 'Australia', 'Switzerland', 'Ireland', 'Japan',
    'Cyprus', 'Canada', 'Germany', 'New Zealand', 'India', 'Finland',
    'UK', 'Malta',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await submitAppointment(formData);
      setStatus({ type: 'success', message: 'Appointment booked successfully! Check your email for confirmation.' });
      setFormData({
        name: '', email: '', phone: '', streetAddress: '', streetAddress2: '',
        city: '', state: '', country: 'Nepal', appointmentDate: '', message: '',
      });
    } catch (error) {
      setStatus({ type: 'danger', message: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 appointment-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="section-title text-white">Book Your Appointment</h2>
            <p className="text-light mb-4">
              Schedule a free consultation with our education experts. We'll help you choose the right course, university, and guide you through the entire application process.
            </p>
            <div className="appointment-info">
              <div className="info-item">
                <i className="bi bi-check-circle-fill text-warning me-2"></i>
                <span className="text-light">Free initial consultation</span>
              </div>
              <div className="info-item">
                <i className="bi bi-check-circle-fill text-warning me-2"></i>
                <span className="text-light">Personalized guidance</span>
              </div>
              <div className="info-item">
                <i className="bi bi-check-circle-fill text-warning me-2"></i>
                <span className="text-light">University & course selection</span>
              </div>
              <div className="info-item">
                <i className="bi bi-check-circle-fill text-warning me-2"></i>
                <span className="text-light">Visa application support</span>
              </div>
              <div className="info-item">
                <i className="bi bi-check-circle-fill text-warning me-2"></i>
                <span className="text-light">Scholarship assistance</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-warning mb-1">
                <i className="bi bi-telephone-fill me-2"></i>+977 9714607930, +977 9714607932
              </p>
              <p className="text-warning">
                <i className="bi bi-envelope-fill me-2"></i>infosyseducation@gmail.com
              </p>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="appointment-form-card">
              <h4 className="mb-4">Your Appointment Details</h4>

              {status.message && (
                <div className={`alert alert-${status.type} alert-dismissible fade show`}>
                  {status.message}
                  <button type="button" className="btn-close" onClick={() => setStatus({ type: '', message: '' })}></button>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <p hidden>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country *</label>
                    <select
                      className="form-select"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Street Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Street Address 2</label>
                    <input
                      type="text"
                      className="form-control"
                      name="streetAddress2"
                      value={formData.streetAddress2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">City *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">State/Region *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Appointment *</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message (Optional)</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-warning btn-lg w-100" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Application'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
