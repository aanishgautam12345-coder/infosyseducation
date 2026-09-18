import React from 'react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Us',
      lines: [
        'Aitabare Road, Itahari-06,',
        'Sunsari, Nepal',
      ],
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us',
      lines: [
        '+977 9714607930',
        '+977 9714607932',
      ],
      links: [
        'tel:+9779714607930',
        'tel:+9779714607932',
      ],
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Us',
      lines: ['infosyseducation@gmail.com'],
      links: ['mailto:infosyseducation@gmail.com'],
    },
    {
      icon: 'bi-clock-fill',
      title: 'Working Hours',
      lines: [
        'Sunday - Friday',
        '9:00 AM - 5:00 PM',
      ],
    },
  ];

  return (
    <div className="contact-info-section">
      <h4 className="mb-4">Get in Touch</h4>

      <div className="contact-details">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-detail-item mb-4">
            <div className="d-flex align-items-start">
              <div className="contact-icon me-3">
                <i className={`bi ${detail.icon} text-warning fs-4`}></i>
              </div>
              <div>
                <h6 className="mb-2">{detail.title}</h6>
                {detail.lines.map((line, i) => (
                  detail.links && detail.links[i] ? (
                    <a key={i} href={detail.links[i]} className="text-decoration-none d-block mb-1">
                      {line}
                    </a>
                  ) : (
                    <p key={i} className="mb-1">{line}</p>
                  )
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Map */}
      <div className="map-container mt-4">
        <h6 className="mb-3">Our Location</h6>
        <div className="map-wrapper" style={{ borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.29!2d87.2740351!3d26.6665637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d0002684fa1%3A0x77c3e9f1f1de6a90!2sAspire%20Global%20Education%20itahari!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
        <a
          href="https://www.google.com/maps/place/Aspire+Global+Education+itahari/@26.6665685,87.2714602,17z/data=!3m1!4b1!4m6!3m5!1s0x39ef6d0002684fa1:0x77c3e9f1f1de6a90!8m2!3d26.6665637!4d87.2740351!16s%2Fg%2F11xm43jd2w?entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary mt-2"
        >
          <i className="bi bi-map me-1"></i>
          Open in Google Maps
        </a>
      </div>

      {/* Social Links */}
      <div className="social-links mt-4">
        <h6 className="mb-3">Follow Us</h6>
        <div className="d-flex gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link-icon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-icon">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link-icon">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-icon">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
