'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import NewHeaderDisplay from './NewHeaderContent';
import MenuOverlay from './MenuOverlay';

const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const menuText = document.getElementById('menu-text');
    const closeText = document.getElementById('close-text');

    if (isOpen) {
      gsap.to(menuText, { y: '-120%', opacity: 0, rotate: 10, duration: 0.5, ease: 'power4.in' });
      gsap.fromTo(closeText, { y: '0%', opacity: 1, rotate: 0 }, { y: '0%', opacity: 1, rotate: 0, duration: 0.5, ease: 'power4.out' });
      if (closeText) {
        closeText.style.display = 'block';
      }
    } else {
      gsap.to(closeText, { y: '-120%', opacity: 0, rotate: 10, duration: 0.5, ease: 'power4.in' });
      gsap.fromTo(menuText, { y: '0%', opacity: 1, rotate: 0 }, { y: '0%', opacity: 1, rotate: 0, duration: 0.5, ease: 'power4.out' });
      setTimeout(() => {
        if(closeText)
        closeText.style.display = 'none';
      }, 500)
    }
  }, [isOpen]);

  return (
    <>
      <NewHeaderDisplay isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuOverlay isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default NewHeader;