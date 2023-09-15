export interface Project {
  acf: Acf;
}

export interface Acf {
  title: string;
  isFeatured: boolean;
  tools: string[];
  color: string;
  images: Image[];
  prefix: string;
  slug: string;
  year: string;
  liveurl: string;
  giturl: string;
  description: Description;
  type: ProjectType;
  catagory: Catagory;
  arrowcolor: Arrowcolor;
  ischallenge: boolean;
  createdat: string;
  challengeurl?: string;
}

export enum Tools {
  react = 'react',
  next = 'next.js',
  tailwind = 'tailwindcss',
  typescript = 'typescript',
  javascript = 'javascript',
  svelte = 'svelte',
  astro = 'astro',
  zustand = 'zustand',
  framermotion = 'framermotion',
  gsap = 'gsap',
  mongodb = 'mongodb',
  graphql = 'graphql',
  threejs = 'three.js',
  scss = 'scss',
  clerk = 'clerk',
}

export enum Arrowcolor {
  Black = 'black',
  White = 'white',
}

export enum Catagory {
  Frontend = 'frontend',
  Fullstack = 'fullstack',
}

export interface Description {
  da: string;
  en: string;
}

export enum Image {
  The1PNG = '-1.png',
  The2PNG = '-2.png',
  The3PNG = '-3.png',
  The4PNG = '-4.png',
  The5PNG = '-5.png',
  The6PNG = '-6.png',
}

export enum ProjectType {
  DesignDevelopment = 'design&development',
  Development = 'development',
}

export interface ErrorType {
  name: string | number;
  message: {
    da: string;
    en: string;
  };
}

export interface FormType {
  name: string;
  email: string;
  message: string;
}

export interface FilterSearchParams {
  filter: string[];
}