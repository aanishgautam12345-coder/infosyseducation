import React from 'react';
import PageBanner from '../components/common/PageBanner';
import StudyAbroadContent from '../components/StudyAbroad/StudyAbroadContent';

const StudyAbroadPage = () => {
  return (
    <>
      <PageBanner
        title="Study Abroad"
        subtitle="Explore top study destinations and find the perfect country for your education"
        breadcrumbs={[{ label: 'Study Abroad' }]}
      />
      <StudyAbroadContent />
    </>
  );
};

export default StudyAbroadPage;
