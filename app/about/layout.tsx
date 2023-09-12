'use client';

import { useStore } from '../store';
import Head from 'next/head';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = useStore((state) => state.language);
  return (
    <>
      <Head>
        <title>
          {language === 'en'
            ? 'About Me - Frederik Barbre - Frontend/Fullstack Developer & Designer'
            : 'Om Mig - Frederik Barbre - Frontend/Fullstack Udvikler & Designer'}
        </title>
        <meta
          name="description"
          content="Get to know me better! I'm a passionate frontend/fullstack web developer and designer with expertise in React, Next.js, and TypeScript. Learn about my journey and experience in web development and design."
        />
        <meta
          name="description"
          content="Lær mig bedre at kende! Jeg er en passioneret frontend/fullstack webudvikler og designer med ekspertise i React, Next.js og TypeScript. Læs om min rejse og erfaring inden for webudvikling og design."
        />
        <meta
          name="keywords"
          content="About Me, Frederik Barbre, Web Developer, Designer, React, Next.js, TypeScript"
        />
        <meta
          name="keywords"
          content="Om Mig, Frederik Barbre, Webudvikler, Designer, React, Next.js, TypeScript"
        />
        <link rel="canonical" href="https://frederikbarbre.dk/about" />
        <meta
          property="og:title"
          content="About Me - Frederik Barbre - Frontend/Fullstack Developer & Designer"
        />
        <meta
          property="og:description"
          content="Get to know me better! I'm a passionate frontend/fullstack web developer and designer with expertise in React, Next.js, and TypeScript. Learn about my journey and experience in web development and design."
        />
        <meta
          property="og:image"
          content="https://frederikbarbre.dk/images/about2.png"
        />
        <meta
          property="og:title"
          content="Om Mig - Frederik Barbre - Frontend/Fullstack Udvikler & Designer"
        />
        <meta
          property="og:description"
          content="Lær mig bedre at kende! Jeg er en passioneret frontend/fullstack webudvikler og designer med ekspertise i React, Next.js og TypeScript. Læs om min rejse og erfaring inden for webudvikling og design."
        />

        <meta property="og:url" content="https://frederikbarbre.dk/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Me - Frederik Barbre - Frontend/Fullstack Developer & Designer"
        />
        <meta
          name="twitter:description"
          content="Get to know me better! I'm a passionate frontend/fullstack web developer and designer with expertise in React, Next.js, and TypeScript. Learn about my journey and experience in web development and design."
        />
        <meta
          name="twitter:image"
          content="https://frederikbarbre.dk/images/about2.png"
        />
        <meta
          name="twitter:title"
          content="Om Mig - Frederik Barbre - Frontend/Fullstack Udvikler & Designer"
        />
        <meta
          name="twitter:description"
          content="Lær mig bedre at kende! Jeg er en passioneret frontend/fullstack webudvikler og designer med ekspertise i React, Next.js og TypeScript. Læs om min rejse og erfaring inden for webudvikling og design."
        />
      </Head>
      {children}
    </>
  );
}
