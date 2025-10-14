
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
          const section = sectionRef.current;
    
          if (section) {
            const elements = section.querySelectorAll('h1, h2, h3, p, a, div:not(.animated-copy-container):not(.services-heading-wrapper)');

            gsap.fromTo(
              elements,
              {
                y: 50,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                  trigger: section,
                  start: 'top 80%',
                },
              }
            );
          }
        }, []);
      return <div ref={sectionRef}>{children}</div>;
};

export default AnimationWrapper;
