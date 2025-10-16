
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone, FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

interface MenuOverlayProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuOverlay = ({ isOpen, toggleMenu }: MenuOverlayProps) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previewImage, setPreviewImage] = useState('/images/1.png');

  const openMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    tl.to(overlayRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1,
      ease: 'power4.inOut',
    })
      .to(
        contentRef.current,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.75'
      )
      .fromTo(
        '.menu-link',
        { y: '120%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power4.out',
        },
        '-=0.5'
      );
  };

  const closeMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    tl.to('.menu-link', {
      y: '120%',
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power4.in',
    })
      .to(
        contentRef.current,
        {
          opacity: 0,
          scale: 0.9,
          rotate: -10,
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.5'
      )
      .to(
        overlayRef.current,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.75'
      );
  };

  useEffect(() => {
    if (isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isOpen]);

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const image = (e.target as HTMLAnchorElement).getAttribute('data-image');
    setPreviewImage(image || ''); // Provide an empty string if image is null

    gsap.fromTo(
      '.preview-image',
      { opacity: 0, scale: 1.2, rotate: 5 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.75, ease: 'power3.out' }
    );
  };

  return (
    <div ref={overlayRef} className="fixed top-0 left-0 w-full h-screen bg-orange-300 z-40" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
             <div ref={contentRef} className="relative w-full h-full flex items-center justify-center opacity-0" style={{ transformOrigin: 'bottom left', scale: 0.9, transform: 'rotate(-10deg)' }}>        <div className="w-full max-w-6xl mx-auto flex gap-8">
          <div className="flex-[3] flex flex-col justify-center items-center">
            <div className="w-1/3 h-32 bg-gray-800 overflow-hidden">
              <img src={previewImage} alt="preview" className="preview-image w-full h-full object-cover" />
            </div>
            <p className="text-card mt-4 flex items-center gap-1 text-lg"><FaLocationDot className="icon-margin" />37 Brown Street, Mbombela, South Africa</p>
            <p className="text-card flex items-center gap-1 text-lg"><FaPhone className="icon-margin" />0824014845</p>
          </div>
          <div className="flex-[2] flex flex-col justify-center">
            <div className="flex flex-col gap-4">
              <Link href="#" onMouseEnter={handleLinkHover} data-image="/images/1.png" className={`menu-link text-[3rem] font-bold text-secondary relative inline-block no-underline ${bebasNeue.className}`}>Home</Link>
              <Link href="#about" onMouseEnter={handleLinkHover} data-image="/images/2.png" className={`menu-link text-[3rem] font-bold text-secondary relative inline-block no-underline ${bebasNeue.className}`}>About</Link>
              <Link href="#services" onMouseEnter={handleLinkHover} data-image="/images/3.png" className={`menu-link text-[3rem] font-bold text-secondary relative inline-block no-underline ${bebasNeue.className}`}>Services</Link>
              <Link href="#contact" onMouseEnter={handleLinkHover} data-image="/images/4.png" className={`menu-link text-[3rem] font-bold text-secondary relative inline-block no-underline ${bebasNeue.className}`}>Contact</Link>
            </div>
            <div className="flex gap-2 mt-5">
              <Link href="#" className="menu-link text-lg text-secondary no-underline"><FaFacebook className="icon-margin" /></Link>
              <Link href="#" className="menu-link text-lg text-secondary no-underline"><FaInstagram className="icon-margin" /></Link>
              <Link href="#" className="menu-link text-lg text-secondary no-underline"><FaTwitter className="icon-margin" /></Link>
              <Link href="#" className="menu-link text-lg text-secondary no-underline"><FaLinkedinIn className="icon-margin" /></Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default MenuOverlay;
