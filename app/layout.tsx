'use client';

import React, { useEffect } from 'react';

import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Lenis from 'lenis';
import N8nChatbot from '../components/chatbot';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        {children}
        <N8nChatbot />
      </body>
    </html>
  );
}
