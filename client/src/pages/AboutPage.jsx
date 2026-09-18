import React from 'react';
import PageBanner from '../components/common/PageBanner';
import AboutContent from '../components/About/AboutContent';

const AboutPage = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Learn more about Infosys Education & Advisory and our mission"
        breadcrumbs={[{ label: 'About Us' }]}
      />
      <AboutContent />
    </>
  );
};

export default AboutPage;
