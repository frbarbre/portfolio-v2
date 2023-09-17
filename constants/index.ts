import { Catagory, ProjectType, Tools } from "@/types";
import homeNav from "../public/images/nav-home.png";
import contactNav from "../public/images/nav-contact.png";
import worksNav from "../public/images/nav-works.png";
import aboutNav from "../public/images/nav-about.png";
import about1 from "../public/images/about1.png";
import about2 from "../public/images/about2.png";
import about3 from "../public/images/about3.png";

export const navLinks = [
  {
    title: {
      en: "Home",
      da: "Hjem",
    },
    path: "",
    image: homeNav,
  },
  {
    title: {
      en: "Contact",
      da: "Kontakt",
    },
    path: "contact",
    image: contactNav,
  },
  {
    title: {
      en: "Works",
      da: "Projekter",
    },
    path: "works",
    image: worksNav,
  },
  {
    title: {
      en: "About",
      da: "Om Mig",
    },
    path: "about",
    image: aboutNav,
  },
];

export const skillsText = {
  en: "I am Frederik Barbré, a profoundly enthusiastic web developer. \n\n I derive immense joy from crafting distinctive and captivating designs and then bringing them to life through development. My proficiency spans across a broad spectrum of industry-standard JavaScript frontend technologies:",

  da: "Jeg hedder Frederik Barbré, og jeg er en en dybt engageret webudvikler. \n\n Jeg finder stor glæde ved at skabe distinkte og fængslende design og derefter bringe dem til live gennem kodning. Min ekspertise strækker sig over en bred vifte af JavaScript frontend-teknologier:",
};

export const skills = [
  {
    title: "Next.JS",
    icon: "/tools/next.svg",
    id: Tools.next,
    link: "https://nextjs.org/",
    isFeatured: true,
  },
  {
    title: "React",
    icon: "/tools/react.svg",
    id: Tools.react,
    link: "https://reactjs.org/",
    isFeatured: true,
  },
  {
    title: "Svelte",
    icon: "/tools/svelte.svg",
    id: Tools.svelte,
    link: "https://svelte.dev/",
    isFeatured: true,
  },
  {
    title: "Astro",
    icon: "/tools/astro.svg",
    id: Tools.astro,
    link: "https://astro.build/",
    isFeatured: true,
  },
  {
    title: "TypeScript",
    icon: "/tools/typescript.svg",
    id: Tools.typescript,
    link: "https://www.typescriptlang.org/",
    isFeatured: true,
  },
  {
    title: "JavaScript",
    icon: "/tools/javascript.svg",
    id: Tools.javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    isFeatured: false,
  },
  {
    title: "Clerk",
    icon: "/tools/clerk.svg",
    id: Tools.clerk,
    link: "https://clerk.dev/",
    isFeatured: false,
  },
  {
    title: "Tailwind CSS",
    icon: "/tools/tailwind.svg",
    id: Tools.tailwind,
    link: "https://tailwindcss.com/",
    isFeatured: true,
  },
  {
    title: "Sass",
    icon: "/tools/scss.svg",
    id: Tools.scss,
    link: "https://sass-lang.com/",
    isFeatured: false,
  },
  {
    title: "GSAP",
    icon: "/tools/gsap.svg",
    id: Tools.gsap,
    link: "https://greensock.com/gsap/",
    isFeatured: false,
  },
  {
    title: "Three.js",
    icon: "/tools/three.svg",
    id: Tools.threejs,
    link: "https://threejs.org/",
    isFeatured: false,
  },
  {
    title: "GraphQL",
    icon: "/tools/graphql.svg",
    id: Tools.graphql,
    link: "https://graphql.org/",
    isFeatured: false,
  },
  {
    title: "MongoDB",
    icon: "/tools/mongodb.svg",
    id: Tools.mongodb,
    link: "https://www.mongodb.com/",
    isFeatured: false,
  },
  {
    title: "Zustand",
    icon: "/tools/zustand.svg",
    id: Tools.zustand,
    link: "https://zustand.surge.sh/",
    isFeatured: true,
  },
  {
    title: "Framer Motion",
    icon: "/tools/framer-motion.svg",
    id: Tools.framermotion,
    link: "https://www.framer.com/motion/",
    isFeatured: true,
  },
];

export const socials = [
  {
    title: "GitHub",
    icon: "/socials/github.png",
    link: "https://github.com/frbarbre",
  },
  {
    title: "Frontend Mentor",
    icon: "/socials/frontendmentor.svg",
    link: "https://www.frontendmentor.io/profile/frbarbre",
  },
  {
    title: "LinkedIn",
    icon: "/socials/linkedin.svg",
    link: "https://www.linkedin.com/in/frbarbre/",
  },
];

export const aboutParagraphs = [
  {
    en: {
      title: "",
      text: "My name is Frederik Barbré, and I am an immensely passionate web designer and frontend developer. \n\nMy love for design has been a constant thread in my life. I distinctly recall the moment I first delved into Adobe Illustrator, discovering the boundless possibilities that lay right before me. \n\nThroughout my educational journey, creativity and ambition have consistently been my focal points. I initially pursued studies in game development before redirecting my path toward the realm of web design. The experience of creating games has endowed me with valuable insights into user behavior, knowledge that continues to underpin my work to this day.",
    },
    da: {
      title: "",
      text: "Mit navn er Frederik Barbré, og jeg er en utroligt passioneret webdesigner og frontend-udvikler. \n\nMin kærlighed til design har været en konstant tråd i mit liv. Jeg husker tydeligt det øjeblik, hvor jeg første gang dykkede ned i Adobe Illustrator og opdagede de uendelige muligheder, der lå lige foran mig. \n\nGennem min uddannelsesrejse har kreativitet og ambition konstant været mine fokuspunkter. Jeg begyndte først at studere spiludvikling, før jeg ændrede kurs og gik ind i webdesignens verden. Erfaringen med at skabe spil har forsynet mig med værdifulde indsigter i brugeradfærd, viden der fortsat er grundlaget for mit arbejde den dag i dag.",
    },
    isReverse: false,
    image: about1,
  },
  {
    en: {
      title: "My Passions",
      text: "From the moment I was introduced to HTML & CSS, a profound affection took hold of me. I yearned to absorb every ounce of knowledge, acquaint myself with each intricate detail, and construct the most captivating websites that my imagination could conjure. \n\nSince that day, my pace hasn't wavered. I invest multiple hours daily, with a significant portion of my focus directed toward mastering React with Next.js and TypeScript. However, my enthusiasm for learning remains as fervent as ever. I eagerly anticipate the challenges that lie ahead in a professional setting.",
    },
    da: {
      title: "Mine Passioner",
      text: "Fra det øjeblik, jeg blev introduceret til HTML & CSS, tog en dybfølt kærlighed fat i mig. Jeg længtes efter at opsuge hver eneste smule viden, stifte bekendtskab med hver eneste komplekse detalje og skabe de mest fængslende hjemmesider, som min fantasi kunne fremkalde. \n\nSiden den dag har mit tempo ikke vaklet. Jeg investerer flere timer dagligt, hvor en betydelig del af min fokus er rettet mod at mestre React med Next.js og TypeScript. Dog forbliver min entusiasme for læring lige så brændende som altid. Jeg ser ivrigt frem til de udfordringer, der venter mig i en professionel sammenhæng.",
    },
    isReverse: true,
    image: about2,
  },
  {
    en: {
      title: "Strong Social Skills",
      text: "As a frontend developer, my technical skills and creative abilities are complemented by my strong social competencies. I believe that digital development is about people as much as it is about code. I thrive in collaboration and cultivate a positive working environment.\n\nMy ability to understand users' needs and convey complex technical concepts makes me a bridge between technical and non-technical team members. I prioritize building strong relationships and fostering open communication.\n\nI strive to create digital solutions deeply rooted in users' real needs and desires. My social skills are essential for crafting meaningful digital experiences and sustainable collaborations.",
    },
    da: {
      title: "Stærke sociale kompetencer",
      text: "Som frontend-udvikler er mine tekniske færdigheder og kreative evner suppleret af mine stærke sociale kompetencer. Jeg tror på, at digital udvikling handler om mennesker såvel som kode. Jeg trives i samarbejde og skaber et positivt arbejdsmiljø.\n\nMin evne til at forstå brugernes behov og formidle komplekse tekniske koncepter gør mig til en brobygger mellem teknikere og ikke-teknikere. Jeg prioriterer stærke relationer og åben kommunikation.\n\nJeg stræber efter at skabe digitale løsninger, der er forankret i brugernes virkelige behov og ønsker. Mine sociale kompetencer er afgørende for at skabe meningsfulde digitale oplevelser og bæredygtige samarbejder.",
    },
    isRevese: false,
    image: about3,
  },
];

export const filtersData = [
  {
    title: {
      en: "Type",
      da: "Type",
    },
    choices: [
      {
        id: ProjectType.Development,
        en: "Development",
        da: "Udvikling",
      },
      {
        id: ProjectType.DesignDevelopment,
        en: "Design & Development",
        da: "Design & Udvikling",
      },
    ],
  },
  {
    title: {
      en: "Catagory",
      da: "Kategori",
    },
    choices: [
      {
        id: Catagory.Frontend,
        en: "Frontend",
        da: "Frontend",
      },
      {
        id: Catagory.Fullstack,
        en: "Fullstack",
        da: "Fullstack",
      },
    ],
  },
  {
    title: {
      en: "Tools",
      da: "Værktøjer",
    },
    choices: [
      {
        id: Tools.react,
        en: "React",
        da: "React",
      },
      {
        id: Tools.next,
        en: "Next.JS",
        da: "Next.JS",
      },
      {
        id: Tools.tailwind,
        en: "Tailwind CSS",
        da: "Tailwind CSS",
      },
      {
        id: Tools.typescript,
        en: "TypeScript",
        da: "TypeScript",
      },
      {
        id: Tools.javascript,
        en: "JavaScript",
        da: "JavaScript",
      },
      {
        id: Tools.svelte,
        en: "Svelte",
        da: "Svelte",
      },
      {
        id: Tools.astro,
        en: "Astro",
        da: "Astro",
      },
      {
        id: Tools.zustand,
        en: "Zustand",
        da: "Zustand",
      },
      {
        id: Tools.framermotion,
        en: "Framer Motion",
        da: "Framer Motion",
      },
      {
        id: Tools.gsap,
        en: "GSAP",
        da: "GSAP",
      },
      {
        id: Tools.mongodb,
        en: "MongoDB",
        da: "MongoDB",
      },
      {
        id: Tools.graphql,
        en: "GraphQL",
        da: "GraphQL",
      },
      {
        id: Tools.threejs,
        en: "Three.js",
        da: "Three.js",
      },
      {
        id: Tools.scss,
        en: "Sass",
        da: "Sass",
      },
      {
        id: Tools.clerk,
        en: "Clerk",
        da: "Clerk",
      },
    ],
  },
];
