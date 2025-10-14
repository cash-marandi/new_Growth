
'use client';

import React, { useState } from 'react';
import NewHeader from '../components/NewHeader';
import MainContent from '../components/MainContent';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import PricingPlans from '../components/PricingPlans';

import Testimonials from '../components/Testimonials';


interface HomeProps {
  bebasNeueClassName: string;
}

export default function Home({ bebasNeueClassName }: HomeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="h-full">
      <NewHeader bebasNeueClassName={bebasNeueClassName} />
      <MainContent isOpen={isOpen}>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <PricingPlans />
        {/* Free Compliance Check Section */}
        {/* <FreeComplianceCheck /> */}
        {/* Testimonials Section */}
        {/* <Testimonials /> */}
        {/* FAQs Section */}
        {/* <FAQs /> */}
        <Contact />
        <Footer />
      </MainContent>
    </main>
  );
}