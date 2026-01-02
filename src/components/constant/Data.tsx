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
import { Github, Instagram, Mail } from 'lucide-react';

// react-icons
import { RiTwitterXFill } from 'react-icons/ri';
import { PiLinkedinLogo } from 'react-icons/pi';
import NextLogo from '../icons/NextLogo';

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
    icon: <TailwindCSS />,
    languageName: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
  },
  {
    id: 4,
    icon: <MongoDB />,
    languageName: 'MongoDB',
    href: 'https://www.mongodb.com/',
  },
  {
    id: 5,
    icon: <NextLogo />,
    languageName: 'Next.js',
    href: 'https://nextjs.org/',
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
    icon: <Instagram />,
    label: 'Instagram',
    href: 'https://www.google.com',
  },
  {
    id: 3,
    icon: <Github />,
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
    icon: <Mail />,
    label: 'Email',
    href: 'https://www.google.com',
  },
];

export const ProjectItem: ProjectItemProps[] = [
  {
    id: 1,
    name: 'Expense Tracker',
    subName: 'Expense Tracker: Track Your Expenses Effortlessly',
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
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <TailwindCSS />,
        label: 'TailwindCSS',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        label: 'Hot Toast',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <MongoDB />,
        label: 'MongoDB',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <NodeJS />,
        label: 'Node.js',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <ExpessJS />,
        label: 'Express.js',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <Vercel />,
        label: 'Vercel',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
    ],
    timeline: '2 months',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly. It allows you to record, analyze, and visualize your expenses and income through clean, interactive charts and an intuitive user interface.',
      Features: [
        'Search and access notes by year or semester (1st–4th year)',
        'Share notes and study resources with friends',
        'Practice with interactive flashcards for active recall',
        'Attempt quizzes to test conceptual understanding',
        'Access previous year questions (PYQs) with answers',
        'One-shot revision material for last-minute preparation',
        'Handwritten topper notes from high-performing students',
        'AI-powered study assistant (coming soon)',
        'Video-based learning materials for better clarity',
      ],
      ProblemStatement: [
        'Professors often do not share structured notes with students',
        'Topper notes are usually inaccessible to the majority of students',
        'Study materials are scattered across multiple platforms and formats',
        'Switching between different notes breaks consistency in examples and explanations',
        'PDF-based notes limit customization and reading comfort',
      ],
      FuturePlan: [
        'Improve the CMS system to make it more efficient and scalable.',
        'Add AI Study Assistant',
        'Scale it to enterprise level.',
      ],
    },
  },
  {
    id: 2,
    name: 'Himalayan Institute Website',
    subName: 'Himalayan Institute Website: Himalayan Educational Group Service Pvt. Ltd.',
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
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <TailwindCSS />,
        label: 'TailwindCSS',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <ReactRouter />,
        label: 'React-router',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <MotionLogo />,
        label: 'Motion',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
      {
        icon: <Vercel />,
        label: 'Vercel',
        techDescription: 'A Popular JavaScript library for building user interfaces.',
      },
    ],
    timeline: '2 months',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly. It allows you to record, analyze, and visualize your expenses and income through clean, interactive charts and an intuitive user interface.',
      Features: [
        'Search and access notes by year or semester (1st–4th year)',
        'Share notes and study resources with friends',
        'Practice with interactive flashcards for active recall',
        'Attempt quizzes to test conceptual understanding',
        'Access previous year questions (PYQs) with answers',
        'One-shot revision material for last-minute preparation',
        'Handwritten topper notes from high-performing students',
        'AI-powered study assistant (coming soon)',
        'Video-based learning materials for better clarity',
      ],
      ProblemStatement: [
        'Professors often do not share structured notes with students',
        'Topper notes are usually inaccessible to the majority of students',
        'Study materials are scattered across multiple platforms and formats',
        'Switching between different notes breaks consistency in examples and explanations',
        'PDF-based notes limit customization and reading comfort',
      ],
      FuturePlan: [
        ' Improve the CMS system to make it more efficient and scalable.',
        'Add AI Study Assistant',
        'Scale it to enterprise level.',
      ],
    },
  },
  {
    id: 3,
    name: 'SoftStitch Ecommerce',
    subName: 'SoftStitch Ecommerce: A full-stack e-commerce platform',
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
        icon: <ExpessJS />,
        label: 'Express.js',
      },
      {
        icon: <MotionLogo />,
        label: 'Motion',
      },
    ],
    timeline: '2 months',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly. It allows you to record, analyze, and visualize your expenses and income through clean, interactive charts and an intuitive user interface.',
      Features: [
        'Search and access notes by year or semester (1st–4th year)',
        'Share notes and study resources with friends',
        'Practice with interactive flashcards for active recall',
        'Attempt quizzes to test conceptual understanding',
        'Access previous year questions (PYQs) with answers',
        'One-shot revision material for last-minute preparation',
        'Handwritten topper notes from high-performing students',
        'AI-powered study assistant (coming soon)',
        'Video-based learning materials for better clarity',
      ],
      ProblemStatement: [
        'Professors often do not share structured notes with students',
        'Topper notes are usually inaccessible to the majority of students',
        'Study materials are scattered across multiple platforms and formats',
        'Switching between different notes breaks consistency in examples and explanations',
        'PDF-based notes limit customization and reading comfort',
      ],
      FuturePlan: [
        ' Improve the CMS system to make it more efficient and scalable.',
        'Add AI Study Assistant',
        'Scale it to enterprise level.',
      ],
    },
  },
  {
    id: 4,
    name: 'AI Background Removal',
    subName: 'AI Background Removal: Remove Background from Image using AI',
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
    timeline: '2 months',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly. It allows you to record, analyze, and visualize your expenses and income through clean, interactive charts and an intuitive user interface.',
      Features: [
        'Search and access notes by year or semester (1st–4th year)',
        'Share notes and study resources with friends',
        'Practice with interactive flashcards for active recall',
        'Attempt quizzes to test conceptual understanding',
        'Access previous year questions (PYQs) with answers',
        'One-shot revision material for last-minute preparation',
        'Handwritten topper notes from high-performing students',
        'AI-powered study assistant (coming soon)',
        'Video-based learning materials for better clarity',
      ],
      ProblemStatement: [
        'Professors often do not share structured notes with students',
        'Topper notes are usually inaccessible to the majority of students',
        'Study materials are scattered across multiple platforms and formats',
        'Switching between different notes breaks consistency in examples and explanations',
        'PDF-based notes limit customization and reading comfort',
      ],
      FuturePlan: [
        ' Improve the CMS system to make it more efficient and scalable.',
        'Add AI Study Assistant',
        'Scale it to enterprise level.',
      ],
    },
  },
  {
    id: 5,
    name: 'AI Image Enhancer',
    subName: 'AI Image Enhancer: Enhance Image using AI',
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
    timeline: '2 months',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly. It allows you to record, analyze, and visualize your expenses and income through clean, interactive charts and an intuitive user interface.',
      Features: [
        'Search and access notes by year or semester (1st–4th year)',
        'Share notes and study resources with friends',
        'Practice with interactive flashcards for active recall',
        'Attempt quizzes to test conceptual understanding',
        'Access previous year questions (PYQs) with answers',
        'One-shot revision material for last-minute preparation',
        'Handwritten topper notes from high-performing students',
        'AI-powered study assistant (coming soon)',
        'Video-based learning materials for better clarity',
      ],
      ProblemStatement: [
        'Professors often do not share structured notes with students',
        'Topper notes are usually inaccessible to the majority of students',
        'Study materials are scattered across multiple platforms and formats',
        'Switching between different notes breaks consistency in examples and explanations',
        'PDF-based notes limit customization and reading comfort',
      ],
      FuturePlan: [
        ' Improve the CMS system to make it more efficient and scalable.',
        'Add AI Study Assistant',
        'Scale it to enterprise level.',
      ],
    },
  },
  {
    id: 6,
    name: 'Smart Inventory & Sales Management System',
    subName: 'SISMS: Manage Inventory and Sales',
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
    timeline: '2 months',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly. It allows you to record, analyze, and visualize your expenses and income through clean, interactive charts and an intuitive user interface.',
      Features: [
        'Search and access notes by year or semester (1st–4th year)',
        'Share notes and study resources with friends',
        'Practice with interactive flashcards for active recall',
        'Attempt quizzes to test conceptual understanding',
        'Access previous year questions (PYQs) with answers',
        'One-shot revision material for last-minute preparation',
        'Handwritten topper notes from high-performing students',
        'AI-powered study assistant (coming soon)',
        'Video-based learning materials for better clarity',
      ],
      ProblemStatement: [
        'Professors often do not share structured notes with students',
        'Topper notes are usually inaccessible to the majority of students',
        'Study materials are scattered across multiple platforms and formats',
        'Switching between different notes breaks consistency in examples and explanations',
        'PDF-based notes limit customization and reading comfort',
      ],
      FuturePlan: [
        ' Improve the CMS system to make it more efficient and scalable.',
        'Add AI Study Assistant',
        'Scale it to enterprise level.',
      ],
    },
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
