import React, { useState } from 'react';
import { subscribeNewsletter } from '../../utils/api';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await subscribeNewsletter({ email });
      setStatus({ type: 'success', message: 'Successfully subscribed to our newsletter!' });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'danger',
        message: 'Subscription failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 newsletter-section">
      <div className="container">
        <div className="newsletter-box" data-aos="zoom-in">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h3 className="text-white mb-2">Sign up to our Newsletter</h3>
              <p className="text-light mb-0">
                Receive weekly newsletter with educational materials, popular books and much more!
              </p>
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubmit} className="d-flex gap-2">
                <p hidden>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-warning btn-lg px-4" disabled={loading}>
                  {loading ? '...' : 'Subscribe'}
                </button>
              </form>
              {status.message && (
                <small className={`text-${status.type === 'success' ? 'success' : 'danger'} mt-2 d-block`}>
                  {status.message}
                </small>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
