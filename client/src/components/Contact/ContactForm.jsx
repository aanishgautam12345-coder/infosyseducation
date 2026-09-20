import React, { useState } from 'react';
import { submitContact } from '../../utils/api';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await submitContact(formData);
      setStatus({ type: 'success', message: 'Your message has been sent successfully! We will get back to you within 24-48 hours.' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'danger', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-card">
      <h4 className="mb-4">Send Us a Message</h4>

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
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Subject *</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label">Message *</label>
            <textarea
              className="form-control"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning btn-lg" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
