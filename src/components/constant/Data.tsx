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
    href: 'https://x.com/TDE_6Ani9',
  },
  {
    id: 2,
    icon: <Instagram />,
    label: 'Instagram',
    href: 'https://www.instagram.com/anish.gane/',
  },
  {
    id: 3,
    icon: <Github />,
    label: 'Github',
    href: 'https://github.com/AnishGane',
  },
  {
    id: 4,
    icon: <PiLinkedinLogo />,
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/anish-gane-1b5644253/',
  },
  {
    id: 5,
    icon: <Mail />,
    label: 'Email',
    href: 'mailto:anishgane10@gmail.com',
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
      'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly.',
    status: 'Working',
    technologies: [
      {
        category: 'Frontend',
        stack: [
          {
            icon: <ReactLogo />,
            label: 'React',
            techDescription:
              'A popular JavaScript library for building component-based user interfaces.',
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
            techDescription:
              'A utility-first CSS framework for rapidly building custom user interfaces.',
          },
          {
            label: 'React Hot Toast',
            techDescription:
              'A lightweight React notification library for displaying toast messages.',
          },
          {
            label: 'Recharts',
            techDescription: 'A composable charting library built on React for data visualization.',
          },
          {
            label: 'Emoji React Picker',
            techDescription:
              'A reusable React component that allows users to select and insert emojis.',
          },
        ],
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <NodeJS />,
            label: 'Node.js',
            techDescription:
              'A JavaScript runtime environment that executes code outside the browser.',
          },
          {
            icon: <ExpessJS />,
            label: 'Express.js',
            techDescription: 'A fast, minimalist web framework for building APIs with Node.js.',
          },
          {
            icon: <MongoDB />,
            label: 'MongoDB',
            techDescription:
              'A NoSQL document-oriented database for storing and managing application data.',
          },
          {
            label: 'Cloudinary & Multer',
            techDescription:
              'A cloud-based media management service for storing and serving images and files.',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
            techDescription:
              'A cloud platform for deploying and hosting frontend and full-stack applications.',
          },
        ],
      },
    ],
    timeline: '1 month',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview: 'Expense Tracker helps users manage expenses with charts, reports, and insights',
      Features: [
        'User Authentication (Register/Login)',
        'Categorized Expense Tracking',
        'Monthly and Category-wise Analysis',
        'Expense Forecast using Simple Linear Regression',
        'Download reports in Excel and PDF',
        'User Profile',
        'Insight Overview of Expense',
      ],
      ProblemStatement: [
        'Managing expenses manually is difficult and time-consuming',
        'Tracking income and expenses consistently is challenging',
        'Users need a simple and intuitive solution',
      ],
      FuturePlan: [
        'Improve the CMS system',
        'Add AI-powered financial insights',
        'Scale to enterprise level',
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
    status: 'Working',
    technologies: [
      {
        category: 'Frontend',
        stack: [
          {
            icon: <ReactLogo />,
            label: 'React',
            techDescription:
              'A popular JavaScript library for building component-based user interfaces.',
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
            techDescription:
              'A utility-first CSS framework for rapidly building custom user interfaces.',
          },
          {
            icon: <MotionLogo />,
            label: 'Motion',
            techDescription: 'A motion library for React that provides animation capabilities.',
          },
          {
            icon: <ReactRouter />,
            label: 'React Router',
            techDescription: 'A library for declarative routing in React.',
          },
          {
            label: 'Imgix',
            techDescription:
              'A cloud-based media management service for storing and serving images and files.',
          },
          {
            label: 'EmailJS',
            techDescription: 'A JavaScript library for sending emails using SMTP.',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
            techDescription:
              'A cloud platform for deploying and hosting frontend and full-stack applications.',
          },
        ],
      },
    ],
    timeline: '2 months',
    Role: 'Frontend',
    Team: 'Solo',
    itemData: {
      Overview:
        'Himalayan Educational Group Service Pvt. Ltd. is a leading Japanese language and training institute in Nepal, committed to preparing students for academic and professional opportunities in Japan. This website is built for visibility and user-friendliness for all the japanese learners that want an interactive learning experience',
      ProblemStatement:
        'This website is built for visibility and user-friendliness for all the japanese learners that want an interactive learning experience',

      FuturePlan: [
        'Expand Course Offerings and Certifications',
        'Enhance Digital & Blended Learning Platforms',
        'Improve Marketing and Brand Visibility',
      ],
    },
  },
  {
    id: 3,
    name: 'SoftStitch Ecommerce',
    subName: 'SoftStitch Ecommerce: A full-stack e-commerce platform',
    image: '/Images/Project1_Image.png',
    url: 'https://soft-stitch-ecommerce.vercel.app/',
    repoLink: 'https://github.com/AnishGane/SoftStitch---Ecommerce',
    description:
      'A full-stack e-commerce platform built with React, Node.js,express, and MongoDB, featuring user authentication, product management, shopping cart functionality, and integrated payment gateways.',
    status: 'Working',
    technologies: [
      {
        category: 'Frontend',
        stack: [
          {
            icon: <ReactLogo />,
            label: 'React',
            techDescription:
              'A popular JavaScript library for building component-based user interfaces.',
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
            techDescription:
              'A utility-first CSS framework for rapidly building custom user interfaces.',
          },
          {
            label: 'React Hot Toast',
            techDescription:
              'A lightweight React notification library for displaying toast messages.',
          },
          {
            icon: <ReactRouter />,
            label: 'React Router',
            techDescription: 'A library for declarative routing in React.',
          },
          {
            label: 'Motion',
            techDescription: 'A motion library for React that provides animation capabilities.',
          },
          {
            label: 'Axios',
            techDescription: 'A promise-based HTTP client for making HTTP requests in JavaScript.',
          },
        ],
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <NodeJS />,
            label: 'Node.js',
            techDescription:
              'A JavaScript runtime environment that executes code outside the browser.',
          },
          {
            icon: <ExpessJS />,
            label: 'Express.js',
            techDescription: 'A fast, minimalist web framework for building APIs with Node.js.',
          },
          {
            icon: <MongoDB />,
            label: 'MongoDB',
            techDescription:
              'A NoSQL document-oriented database for storing and managing application data.',
          },
          {
            label: 'Cloudinary & Multer',
            techDescription:
              'A cloud-based media management service for storing and serving images and files.',
          },
          {
            label: 'Bcrypt',
            techDescription:
              'A library for securely hashing passwords and salts in Node.js applications.',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
            techDescription:
              'A cloud platform for deploying and hosting frontend and full-stack applications.',
          },
        ],
      },
    ],
    timeline: '36 days',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'Expense Tracker is a modern React-powered web application designed to help you manage your personal finances effortlessly. It allows you to record, analyze, and visualize your expenses and income through clean, interactive charts and an intuitive user interface.',
      Features: [
        'User Authentication, secure login/signup with JWT',
        'Browse products with search and filtering',
        'Shopping Cart, add/remove items with size selection',
        'Order Management, place orders and track order history',
        'Payment Integration, COD & eSewa(now in localhost only)',
        '(Admin) Product Management, add, edit, and delete products',
        '(Admin) Order Management, view and update order status',
        '(Admin) User Management, Monitor user activities',
        '(Admin) Image Upload, Cloudinary integration for product images',
      ],
      ProblemStatement: [
        'Learn and demonstrate real-world full-stack skills using a modern JavaScript stack',
        'Implement essential e-commerce features end-to-end',
        'To learn how to deploy full-stack apps on Vercel',
      ],
      FuturePlan: [
        'Advanced product filtering & search',
        'Product reviews & ratings',
        'Multiple payment gateway support',
        'Invoice & receipt generation',
        'Enhanced authentication & security',
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
    technologies: [
      {
        category: 'Frontend',
        stack: [
          {
            icon: <ReactLogo />,
            label: 'React',
            techDescription:
              'A popular JavaScript library for building component-based user interfaces.',
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
            techDescription:
              'A utility-first CSS framework for rapidly building custom user interfaces.',
          },
          {
            label: 'Axios',
            techDescription: 'A promise-based HTTP client for making HTTP requests in JavaScript.',
          },
          {
            label: 'PicWish API',
            techDescription:
              'An image processing API that allows users to remove backgrounds from images.',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            label: 'Render',
            techDescription:
              'A cloud platform for deploying and hosting frontend and full-stack applications.',
          },
        ],
      },
    ],
    timeline: '4 days',
    Role: 'Frontend',
    Team: 'Solo',
    itemData: {
      Overview:
        'A web application allows users to easily remove backgrounds from images using AI technology.',
      Features: [
        'Simple Upload Interface: Drag and drop or click to upload images',
        'Real-time Processing: See the original and processed images side by side',
        'AI-Powered: Leverages advanced AI segmentation for accurate background removal',
      ],
      ProblemStatement: [
        'I want my own web application that allows users to easily remove backgrounds from images using AI technology & also learn how to use PicWish API.',
      ],
      FuturePlan: [
        'Make it more user-friendly',
        'Add more features',
        'Scale it to enterprise level',
      ],
    },
  },
  {
    id: 5,
    name: 'Smart Inventory & Sales Management System',
    subName: 'SISMS: Manage Inventory and Sales',
    image: '/Images/Project1_Image.png',
    url: 'https://ai-image-enhancer-1oli.onrender.com/',
    repoLink: 'https://github.com/AnishGane/AI-Image-Enhancer',
    description:
      'This web application allows users to easily enhance image using AI technology. Built with React and integrated with a powerful image processing API, this tool provides a simple and intuitive interface for enhancing images related tasks.',
    status: 'Building',
    technologies: [
      {
        category: 'Frontend',
        stack: [
          {
            icon: <ReactLogo />,
            label: 'React',
            techDescription:
              'A popular JavaScript library for building component-based user interfaces.',
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
            techDescription:
              'A utility-first CSS framework for rapidly building custom user interfaces.',
          },
          {
            label: 'React Hot Toast',
            techDescription:
              'A lightweight React notification library for displaying toast messages.',
          },
          {
            label: 'Recharts',
            techDescription: 'A composable charting library built on React for data visualization.',
          },
          {
            label: 'Emoji React Picker',
            techDescription:
              'A reusable React component that allows users to select and insert emojis.',
          },
        ],
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <NodeJS />,
            label: 'Node.js',
            techDescription:
              'A JavaScript runtime environment that executes code outside the browser.',
          },
          {
            icon: <ExpessJS />,
            label: 'Express.js',
            techDescription: 'A fast, minimalist web framework for building APIs with Node.js.',
          },
          {
            icon: <MongoDB />,
            label: 'MongoDB',
            techDescription:
              'A NoSQL document-oriented database for storing and managing application data.',
          },
          {
            label: 'Cloudinary & Multer',
            techDescription:
              'A cloud-based media management service for storing and serving images and files.',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
            techDescription:
              'A cloud platform for deploying and hosting frontend and full-stack applications.',
          },
        ],
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
    icon: <TailwindCSS />,
    label: 'TailwindCSS',
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
    icon: <NextLogo />,
    label: 'next.js',
  },
  {
    id: 6,
    icon: <MongoDB />,
    label: 'mongodb',
  },
  {
    id: 7,
    icon: <NodeJS />,
    label: 'nodejs',
  },
  {
    id: 8,
    icon: <ExpessJS />,
    label: 'express.js',
  },
];
