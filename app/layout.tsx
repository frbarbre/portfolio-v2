'use client';

import './globals.css';
import { Barlow } from 'next/font/google';
import { useStore } from './store';
import Navbar from '@/components/navigation/Navbar';
import CTA from '@/components/cta/CTA';
import Footer from '@/components/footer/Footer';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useStore((state) => state.theme);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Frederik Barbre - Frontend/Fullstack Developer & Designer</title>
        <meta
          name="description"
          content="I'm a frontend/fullstack web developer with a passion for creating stunning web applications using React, Next.js, and TypeScript. Explore my portfolio to see my design-driven development work."
        />
        <meta
          name="keywords"
          content="React, Next.js, TypeScript, Web Development, UI/UX Design, Frontend Development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://frederikbarbre.dk/works" />
        <meta
          property="og:title"
          content="Frederik Barbre - Frontend/Fullstack Developer & Designer"
        />
        <meta
          property="og:description"
          content="I'm a frontend/fullstack web developer with a passion for creating stunning web applications using React, Next.js, and TypeScript. Explore my portfolio to see my design-driven development work."
        />
        <meta
          property="og:image"
          content="https://frederikbarbre.dk/images/hero.png"
        />
        <meta property="og:url" content="https://frederikbarbre.dk/works" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Your Name - Frontend/Fullstack Developer & Designer"
        />
        <meta
          name="twitter:description"
          content="I'm a frontend/fullstack web developer with a passion for creating stunning web applications using React, Next.js, and TypeScript. Explore my portfolio to see my design-driven development work."
        />
        <meta
          name="twitter:image"
          content="https://frederikbarbre.dk/images/hero.png"
        />
        <meta
          name="theme-color"
          content={theme === 'light' ? '#FFFFFF' : '#0E0E0E'}
        />
      </Head>
      <body
        className={`${barlow.className} ${
          theme === 'light'
            ? 'text-near-black bg-white'
            : 'bg-near-black text-white'
        } transition-colors`}
      >
        {isClient && (
          <>
            <Navbar />
            <main className="pt-[77px]">{children}</main>
            <CTA />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
