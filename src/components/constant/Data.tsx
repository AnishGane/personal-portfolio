import type { LanguageType, NavItem, ProjectItemProps, Skills, SocialLinkProp } from '@/types';
import ReactLogo from '../icons/ReactLogo';
import MongoDB from '../icons/MongoDB';
import Vercel from '../icons/Vercel';
import NodeJS from '../icons/NodeJS';
import TailwindCSS from '../icons/TaiwindCSS';
import ExpessJS from '../icons/ExpressJS';
import MotionLogo from '../icons/MotionLogo';
import ReactRouter from '../icons/ReactRouter';
import JavaScript from '../icons/JavaScript';

import TSLogo from '@/components/icons/TSLogo';
import NextLogo from '@/components/icons/NextLogo';
import Bun from '@/components/icons/Bun';
import Postgress from '@/components/icons/Postgress';

// react-icons
import { FaInstagram } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { PiLinkedinLogo } from 'react-icons/pi';
import { IoMailOutline } from 'react-icons/io5';

export const navList: NavItem[] = [
  { id: 1, label: 'Portfolio', path: '/' },
  { id: 2, label: 'Projects', path: '/projects' },
];

export const LanguageItem: LanguageType[] = [
  {
    id: 1,
    icon: <TSLogo />,
    languageName: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    id: 2,
    icon: <ReactLogo />,
    languageName: 'React',
    href: 'https://react.dev/',
  },
  {
    id: 3,
    icon: <NextLogo />,
    languageName: 'Next.js',
    href: 'https://nextjs.org/',
  },
  {
    id: 4,
    icon: <Bun />,
    languageName: 'Bun',
    href: 'https://bun.com/',
  },
  {
    id: 5,
    icon: <Postgress />,
    languageName: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
  },
];

export const SocialLinkItem: SocialLinkProp[] = [
  {
    id: 1,
    icon: <RiTwitterXFill />,
    label: 'X',
    href: 'https://www.google.com',
  },
  {
    id: 2,
    icon: <FaInstagram />,
    label: 'Instagram',
    href: 'https://www.google.com',
  },
  {
    id: 3,
    icon: <FiGithub />,
    label: 'Github',
    href: 'https://www.google.com',
  },
  {
    id: 4,
    icon: <PiLinkedinLogo />,
    label: 'Linkedin',
    href: 'https://www.google.com',
  },
  {
    id: 5,
    icon: <IoMailOutline />,
    label: 'Email',
    href: 'https://www.google.com',
  },
];

export const ProjectItem: ProjectItemProps[] = [
  {
    id: 1,
    name: 'Expense Tracker',
    image: '/Images/Project1_Image.png',
    url: 'https://expense-tracker-frontend-sigma-eight.vercel.app/login',
    repoLink: 'https://github.com/AnishGane/expense-tracker',
    description:
      'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly. It allows you to record, analyze, and visualize your expenses and income through clean, interactive charts and an intuitive user interface.',
    status: 'Working',
    techonologies: [
      {
        icon: <ReactLogo />,
        label: 'React',
      },
      {
        icon: <MongoDB />,
        label: 'MongoDB',
      },
      {
        icon: <Vercel />,
        label: 'Vercel',
      },
      {
        icon: <NodeJS />,
        label: 'Node.js',
      },
      {
        icon: <TailwindCSS />,
        label: 'TailwindCSS',
      },
      {
        icon: <ExpessJS />,
        label: 'Express.js',
      },
    ],
  },
  {
    id: 2,
    name: 'Himalayan Institute Website',
    image: '/Images/Project1_Image.png',
    url: 'https://himalayan-edu-pvt-ltd.vercel.app/',
    repoLink: 'https://github.com/AnishGane/Himalayan-Edu-Pvt.-Ltd',
    description:
      'Himalayan Educational Group Service Pvt. Ltd. is a premier Japanese language learning institute based in Nepal, dedicated to providing high-quality education, cultural exchange, and skill development for students aspiring to study, work, or build their careers in Japan.',
    status: 'Building',
    techonologies: [
      {
        icon: <ReactLogo />,
        label: 'React',
      },

      {
        icon: <Vercel />,
        label: 'Vercel',
      },
      {
        icon: <TailwindCSS />,
        label: 'TailwindCSS',
      },
      {
        icon: <ReactRouter />,
        label: 'react-router',
      },
      {
        icon: <MotionLogo />,
        label: 'Motion',
      },
    ],
  },
  {
    id: 3,
    name: 'SoftStitch Ecommerce',
    image: '/Images/Project1_Image.png',
    url: 'https://himalayan-edu-pvt-ltd.vercel.app/',
    repoLink: 'https://github.com/AnishGane/SoftStitch---Ecommerce',
    description:
      'A full-stack e-commerce platform built with React, Node.js,express, and MongoDB, featuring user authentication, product management, shopping cart functionality, and integrated payment gateways.',
    status: 'Working',
    techonologies: [
      {
        icon: <ReactLogo />,
        label: 'React',
      },
      {
        icon: <MongoDB />,
        label: 'React',
      },
      {
        icon: <Vercel />,
        label: 'Vercel',
      },
      {
        icon: <NodeJS />,
        label: 'NodeJS',
      },
      {
        icon: <ExpessJS />,
        label: 'Express.js',
      },
      {
        icon: <MotionLogo />,
        label: 'Motion',
      },
    ],
  },
  {
    id: 4,
    name: 'AI Background Removal',
    image: '/Images/Project1_Image.png',
    url: 'https://ai-background-removal.onrender.com/',
    repoLink: 'https://github.com/AnishGane/AI-Background-Removal',
    description:
      'This web application allows users to easily remove backgrounds from images using AI technology. Built with React and integrated with a powerful image processing API, this tool provides a simple and intuitive interface for background removal tasks.',
    status: 'Working',
    techonologies: [
      {
        icon: <ReactLogo />,
        label: 'React',
      },
      {
        icon: <TailwindCSS />,
        label: 'TailwindCSS',
      },
    ],
  },
  {
    id: 5,
    name: 'AI Image Enhancer',
    image: '/Images/Project1_Image.png',
    url: 'https://ai-image-enhancer-1oli.onrender.com/',
    repoLink: 'https://github.com/AnishGane/AI-Image-Enhancer',
    description:
      'This web application allows users to easily enhance image using AI technology. Built with React and integrated with a powerful image processing API, this tool provides a simple and intuitive interface for enhancing images related tasks.',
    status: 'Working',
    techonologies: [
      {
        icon: <ReactLogo />,
        label: 'React',
      },
      {
        icon: <TailwindCSS />,
        label: 'TailwindCSS',
      },
    ],
  },
  {
    id: 6,
    name: 'Smart Inventory & Sales Management System',
    image: '/Images/Project1_Image.png',
    url: 'https://ai-image-enhancer-1oli.onrender.com/',
    repoLink: 'https://github.com/AnishGane/AI-Image-Enhancer',
    description:
      'This web application allows users to easily enhance image using AI technology. Built with React and integrated with a powerful image processing API, this tool provides a simple and intuitive interface for enhancing images related tasks.',
    status: 'Building',
    techonologies: [
      {
        icon: <ReactLogo />,
        label: 'React',
      },
      {
        icon: <TailwindCSS />,
        label: 'TailwindCSS',
      },
    ],
  },
];

export const MySkills: Skills[] = [
  { id: 1, icon: <ReactLogo />, label: 'react' },
  {
    id: 2,
    icon: <MongoDB />,
    label: 'mongodb',
  },
  {
    id: 3,
    icon: <JavaScript />,
    label: 'javascript',
  },
  {
    id: 4,
    icon: <TSLogo />,
    label: 'typescript',
  },
  {
    id: 5,
    icon: <TailwindCSS />,
    label: 'TailwindCSS',
  },
  {
    id: 6,
    icon: <NodeJS />,
    label: 'nodejs',
  },
  {
    id: 7,
    icon: <ExpessJS />,
    label: 'express.js',
  },
];
