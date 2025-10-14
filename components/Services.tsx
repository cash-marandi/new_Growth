
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimationWrapper from './AnimationWrapper';
import { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';

const Services = () => {
  const services = [
    {
      title: 'Compliance & Tax',
      description: 'Stay on top of SARS, tax deadlines, and statutory requirements without the headache.',
      image: '/images/1.png'
    },
    {
      title: 'Bookkeeping & Reporting',
      description: 'Regular, accurate financial reporting so you can see how your business is really doing at any time.',
      image: '/images/2.png'
    },
    {
      title: 'Cash Flow & Forecasting',
      description: 'Plan ahead. Keep cash flowing. Make decisions with confidence.',
      image: '/images/3.png'
    },
    {
      title: 'Advisory & Growth Planning',
      description: 'We don’t just look backwards. We help you plot a roadmap for growth—whether that’s scaling, entering new markets, or optimizing costs.',
      image: '/images/4.png'
    },
    {
      title: 'Payroll & Employee Related Services',
      description: 'From payslips to deductions to compliance. Let us handle the details.',
      image: '/images/5.png'
    },
    {
      title: 'Support & One-on-One Coaching',
      description: 'If you want more than just numbers — we offer guidance, insights, and training so you and your team can understand, manage, and grow your finances.',
      image: '/images/6.png'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current.children, {
        x: -currentIndex * ((carouselRef.current.children[0] as HTMLElement).offsetWidth + 32), // 32px for gap-8
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  }, [currentIndex]);

  return (
    <AnimationWrapper>
      <section id="services" className="py-20 min-h-screen flex about-section-margin-y items-center bg-foreground text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-[3.5rem] font-bold font-bebas-neue text-left text-card">OUR SERVICES</h1>
          </div>
          <div className="relative w-full">
            <div ref={carouselRef} className="flex overflow-hidden gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-primary mt-10 relative rounded-full w-full h-full service-card-width border-gray-700 group shadow-lg hover:shadow-xl hover:shadow-primary flex-shrink-0">
                  <CardContent className="flex flex-col justify-center items-center h-full text-center">
                    <CardTitle className="text-[2rem] text-secondary service-title font-playfair-display font-bold z-10 group-hover:hidden">{service.title}</CardTitle>
                    <p className="text-card text-[1.5rem] z-10 hidden font-playfair-display text-shadow-custom group-hover:block">{service.description}</p>
                    <img src={service.image} alt={service.title} className="opacity-0 rounded-full group-hover:opacity-100 group-hover:blur-sm absolute inset-0 w-full h-full object-cover transition-opacity duration-300" />
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="absolute mt-[40] left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
              <button onClick={handlePrev} className="bg-secondary p-[5] text-foreground m-[5] w-[35] h-[35] rounded-full">
                <FaArrowLeft />
              </button>
              <button onClick={handleNext} className="bg-secondary p-[5] text-foreground m-[5] w-[35] h-[35] rounded-full">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Services;
