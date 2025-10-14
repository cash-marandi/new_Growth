
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MainContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const MainContent = ({ isOpen, children }: MainContentProps) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        rotate: -10,
        y: '10%',
        scale: 0.9,
        duration: 1,
        ease: 'power4.inOut',
      });
    } else {
      gsap.to(contentRef.current, {
        rotate: 0,
        y: '0%',
        scale: 1,
        duration: 1,
        ease: 'power4.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div ref={contentRef} className="relative w-full h-full bg-background" style={{ transformOrigin: 'top right' }}>
      {children}
    </div>
  );
};

export default MainContent;
