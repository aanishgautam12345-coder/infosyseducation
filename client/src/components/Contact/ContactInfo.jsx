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
          <a href="https://www.facebook.com/share/199Ef2DhRQ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link-icon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.tiktok.com/@infosyseducation?_r=1&_t=ZS-99uXLuSndlU" target="_blank" rel="noopener noreferrer" className="social-link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 2.512 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
