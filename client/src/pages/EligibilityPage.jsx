import React from 'react';
import PageBanner from '../components/common/PageBanner';
import EligibilityChecker from '../components/StudyAbroad/EligibilityChecker';

const EligibilityPage = () => {
  return (
    <>
      <PageBanner
        title="Check Your Eligibility"
        subtitle="Find out if you qualify for studying abroad"
        breadcrumbs={[{ label: 'Check Eligibility' }]}
      />
      <EligibilityChecker />
    </>
  );
};

export default EligibilityPage;
