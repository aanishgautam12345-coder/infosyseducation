import React from 'react';
import PageBanner from '../components/common/PageBanner';
import TestimonialList from '../components/Testimonials/TestimonialList';

const TestimonialsPage = () => {
  return (
    <>
      <PageBanner
        title="Testimonials"
        subtitle="Hear from our successful students about their study abroad journey"
        breadcrumbs={[{ label: 'Testimonials' }]}
      />
      <TestimonialList />
    </>
  );
};

export default TestimonialsPage;
