import React from 'react';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const ContactPage = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our education experts"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7" data-aos="fade-right">
              <ContactForm />
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
