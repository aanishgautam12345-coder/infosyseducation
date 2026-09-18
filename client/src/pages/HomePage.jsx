import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import WhyStudyAbroad from '../components/Home/WhyStudyAbroad';
import PopularDestinations from '../components/Home/PopularDestinations';
import TestimonialPreview from '../components/Home/TestimonialPreview';
import AppointmentForm from '../components/Home/AppointmentForm';
import Newsletter from '../components/Home/Newsletter';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyStudyAbroad />
      <PopularDestinations />
      <TestimonialPreview />
      <AppointmentForm />
      <Newsletter />
    </>
  );
};

export default HomePage;
