import { Tools } from '@/types';

export const navLinks = [
  {
    title: {
      en: 'Home',
      da: 'Hjem',
    },
    path: '',
    image: '/images/nav-home.png',
  },
  {
    title: {
      en: 'Contact',
      da: 'Kontakt',
    },
    path: 'contact',
    image: '/images/nav-contact.png',
  },
  {
    title: {
      en: 'Works',
      da: 'Arbejde',
    },
    path: 'works',
    image: '/images/nav-works.png',
  },
  {
    title: {
      en: 'About',
      da: 'Om Mig',
    },
    path: 'about',
    image: '/images/nav-about.png',
  },
];

export const skillsText = {
  en: 'I am Frederik Barbré, a profoundly enthusiastic web developer. <br> I derive immense joy from crafting distinctive and captivating designs and then bringing them to life through development. My proficiency spans across a broad spectrum of industry-standard JavaScript frontend technologies:',

  da: 'Jeg hedder Frederik Barbré, og jeg er en en dybt engageret webudvikler. <br> Jeg finder stor glæde ved at skabe distinkte og fængslende design og derefter bringe dem til live gennem udvikling. Min ekspertise strækker sig over en bred vifte af branchestandard JavaScript frontend-teknologier:',
};

export const skills = [
  {
    title: 'Next.JS',
    icon: '/tools/next.svg',
    id: Tools.next,
    link: 'https://nextjs.org/',
    isFeatured: true,
  },
  {
    title: 'React',
    icon: '/tools/react.svg',
    id: Tools.react,
    link: 'https://reactjs.org/',
    isFeatured: true,
  },
  {
    title: 'Svelte',
    icon: '/tools/svelte.svg',
    id: Tools.svelte,
    link: 'https://svelte.dev/',
    isFeatured: true,
  },
  {
    title: 'Astro',
    icon: '/tools/astro.svg',
    id: Tools.astro,
    link: 'https://astro.build/',
    isFeatured: true,
  },
  {
    title: 'TypeScript',
    icon: '/tools/typescript.svg',
    id: Tools.typescript,
    link: 'https://www.typescriptlang.org/',
    isFeatured: true,
  },
  {
    title: 'JavaScript',
    icon: '/tools/javascript.svg',
    id: Tools.javascript,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    isFeatured: false,
  },
  {
    title: 'Clerk',
    icon: '/tools/clerk.svg',
    id: Tools.clerk,
    link: 'https://clerk.dev/',
    isFeatured: false,
  },
  {
    title: 'Tailwind CSS',
    icon: '/tools/tailwind.svg',
    id: Tools.tailwind,
    link: 'https://tailwindcss.com/',
    isFeatured: true,
  },
  {
    title: 'Sass',
    icon: '/tools/scss.svg',
    id: Tools.scss,
    link: 'https://sass-lang.com/',
    isFeatured: false,
  },
  {
    title: 'GSAP',
    icon: '/tools/gsap.svg',
    id: Tools.gsap,
    link: 'https://greensock.com/gsap/',
    isFeatured: false,
  },
  {
    title: 'Three.js',
    icon: '/tools/three.svg',
    id: Tools.threejs,
    link: 'https://threejs.org/',
    isFeatured: false,
  },
  {
    title: 'GraphQL',
    icon: '/tools/graphql.svg',
    id: Tools.graphql,
    link: 'https://graphql.org/',
    isFeatured: false,
  },
  {
    title: 'MongoDB',
    icon: '/tools/mongodb.svg',
    id: Tools.mongodb,
    link: 'https://www.mongodb.com/',
    isFeatured: false,
  },
  {
    title: 'Zustand',
    icon: '/tools/zustand.svg',
    id: Tools.zustand,
    link: 'https://zustand.surge.sh/',
    isFeatured: true,
  },
  {
    title: 'Framer Motion',
    icon: '/tools/framer-motion.svg',
    id: Tools.framermotion,
    link: 'https://www.framer.com/motion/',
    isFeatured: true,
  },
];

export const socials = [
  {
    title: 'GitHub',
    icon: '/socials/github.svg',
    link: 'https://github.com/frbarbre',
  },
  {
    title: 'LinkedIn',
    icon: '/socials/linkedin.svg',
    link: 'https://www.linkedin.com/in/frbarbre/',
  },
  {
    title: 'Frontend Mentor',
    icon: '/socials/frontendmentor.svg',
    link: 'https://www.frontendmentor.io/profile/frbarbre',
  },
];
