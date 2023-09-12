'use client';

import { useStore } from '../store';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = useStore((state) => state.language);
  return (
    <>
      <head>
        <title>{language === 'en' ? 'Contact Me' : 'Kontakt Mig'}</title>
      </head>
      {children}
    </>
  );
}
