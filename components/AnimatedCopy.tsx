
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, SplitText);

interface AnimatedCopyProps {
  children: React.ReactNode;
  colorInitial?: string;
  colorAccent?: string;
  colorFinal?: string;
}

const AnimatedCopy: React.FC<AnimatedCopyProps> = ({
  children,
  colorInitial = '#888',
  colorAccent = '#00f',
  colorFinal = '#000',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRefs = useRef<SplitText[]>([]);
  const lastScrollProgress = useRef(0);
  const colorTransitionTimers = useRef<Map<number, NodeJS.Timeout>>(new Map());
  const completedCharacters = useRef<Set<number>>(new Set());

  const scheduleFinalTransition = (charElement: HTMLElement, index: number) => {
    if (colorTransitionTimers.current.has(index)) {
      clearTimeout(colorTransitionTimers.current.get(index)!);
    }
    const timer = setTimeout(() => {
      if (!completedCharacters.current.has(index)) {
        gsap.to(charElement, { color: colorFinal, duration: 0.1 });
        completedCharacters.current.add(index);
      }
      colorTransitionTimers.current.delete(index);
    }, 50);
    colorTransitionTimers.current.set(index, timer);
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    splitRefs.current.forEach((split) => split.revert());
    splitRefs.current = [];
    lastScrollProgress.current = 0;
    colorTransitionTimers.current.forEach((timer) => clearTimeout(timer));
    colorTransitionTimers.current.clear();
    completedCharacters.current.clear();

    const elementsToSplit: HTMLElement[] = [];
    if (containerRef.current.hasAttribute('data-copy-wrapper')) {
      Array.from(containerRef.current.children).forEach((child) => {
        if (child instanceof HTMLElement) {
          elementsToSplit.push(child);
        }
      });
    } else if (containerRef.current.firstElementChild instanceof HTMLElement) {
      elementsToSplit.push(containerRef.current.firstElementChild);
    }

    // Initial animation for the entire text block
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2,
        onComplete: () => {
          let allCharacters: HTMLElement[] = [];

          elementsToSplit.forEach((el) => {
            const split = new SplitText(el, { type: 'words,chars' });
            splitRefs.current.push(split);
            allCharacters = allCharacters.concat(split.chars as HTMLElement[]);
          });

          gsap.set(allCharacters, { color: colorInitial });

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'center 100%',
            end: 'bottom center',
            scrub: 0,
            onUpdate: (self) => {
              const progress = self.progress;
              const totalChars = allCharacters.length;
              const isScrollingDown = progress >= lastScrollProgress.current;
              const scrollIndex = Math.floor(progress * totalChars);

              allCharacters.forEach((char, index) => {
                if (!isScrollingDown && index >= scrollIndex) {
                  if (colorTransitionTimers.current.has(index)) {
                    clearTimeout(colorTransitionTimers.current.get(index)!);
                    colorTransitionTimers.current.delete(index);
                  }
                  completedCharacters.current.delete(index);
                  gsap.to(char, { color: colorInitial, duration: 0.05, stagger: 0 });
                } else if (completedCharacters.current.has(index)) {
                  // Do nothing, already completed
                } else if (index <= scrollIndex) {
                  gsap.to(char, { color: colorAccent, duration: 0.05, stagger: 0 });
                  scheduleFinalTransition(char, index);
                } else {
                  gsap.to(char, { color: colorInitial, duration: 0.05, stagger: 0 });
                }
              });

              lastScrollProgress.current = progress;
            },
          });
        }
      }
    );

    return () => {
      splitRefs.current.forEach((split) => split.revert());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      colorTransitionTimers.current.forEach((timer) => clearTimeout(timer));
      colorTransitionTimers.current.clear();
      completedCharacters.current.clear();
    };
  }, { scope: containerRef, dependencies: [colorInitial, colorAccent, colorFinal] });

  return (
    <div ref={containerRef} className="animated-copy-container" data-copy-wrapper={React.Children.count(children) > 1 ? 'true' : undefined}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { /* Removed ref: containerRef */ });
        }
        return child;
      })}
    </div>
  );
};

export default AnimatedCopy;
