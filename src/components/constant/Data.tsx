import type { LanguageType, NavItem, ProjectItemProps, Skills, SocialLinkProp } from '@/types';
import { Github, Instagram } from 'lucide-react';

// react-icons
import { RiTwitterXFill } from 'react-icons/ri';
import { PiLinkedinLogo } from 'react-icons/pi';
import {
  BetterAuthLogo,
  Clerk,
  Drizzle,
  ExpessJS,
  JavaScript,
  MongoDB,
  MotionLogo,
  NeonDB,
  NextLogo,
  NodeJS,
  NuqsLogo,
  ReactLogo,
  ReactRouter,
  ResendLogo,
  ShadcnLogo,
  TSLogo,
  TailwindCSS,
  Vercel,
  ZodLogo,
} from '../icons/all-icons';

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
    icon: <TailwindCSS />,
    languageName: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
  },
  {
    id: 5,
    icon: <MongoDB />,
    languageName: 'MongoDB',
    href: 'https://www.mongodb.com/',
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
];

export const ProjectItem: ProjectItemProps[] = [
  {
    id: 1,
    name: 'NoteForge',
    subName: 'NoteForge: Your Personal Notebook App',
    image: '/Images/Project1_Image.png',
    url: 'https://noteforge-chi.vercel.app/',
    repoLink: 'https://github.com/AnishGane/Noteforge',
    description:
      'NoteForge is a web application that allows users to create, organize their notes and notebooks. It provides a simple and intuitive interface for personal note-taking and task management.',
    status: 'Working',
    technologies: [
      {
        category: 'Frontend',
        stack: [
          {
            icon: <ReactLogo />,
            label: 'React',
          },
          {
            icon: <NextLogo />,
            label: 'Next.js',
          },
          {
            icon: <TSLogo />,
            label: 'TypeScript',
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
          },
          {
            label: 'Sooner',
          },
          {
            icon: <ShadcnLogo />,
            label: 'Shadcn (UI Library)',
          },
          {
            icon: <NuqsLogo />,
            label: 'Nuqs (URL query state management)',
          },
          {
            icon: <MotionLogo />,
            label: 'Motion',
          },
          {
            label: 'Tiptap (Rich Text Editor)',
          },
        ],
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <BetterAuthLogo />,
            label: 'BetterAuth',
          },
          {
            icon: <ZodLogo />,
            label: 'Zod',
          },
          {
            icon: <ResendLogo />,
            label: 'Resend',
          },
          {
            icon: <MongoDB />,
            label: 'MongoDB',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
          },
        ],
      },
    ],
    timeline: '12 days',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'NoteForge is a web application that allows users to create, organize their notes and notebooks. It provides a simple and intuitive interface for personal note-taking and task management.',
      Features: [
        'Secure User Authentication using Better Auth',
        'User can add notebooks and the notes inside them using Tiptap',
        'User can create, update, and delete notebooks and notes',
        'Search the Notebook and Notes with the help of Nuqs',
      ],
      ProblemStatement:
        'As a desired of learning Next.js 16 and Better Auth, I have created this project for better implementation of Better Auth Session and email verification and much more features with the help of Next.js 16.',
      FuturePlan: [
        'Improve the UI/UX and add more features',
        'Add SSO and social login',
        'Implement and fix more features of TipTap',
      ],
    },
  },
  {
    id: 2,
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
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
          },
          {
            label: 'React Hot Toast',
          },
          {
            label: 'Recharts',
          },
          {
            label: 'Emoji React Picker',
          },
        ],
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <NodeJS />,
            label: 'Node.js',
          },
          {
            icon: <ExpessJS />,
            label: 'Express.js',
          },
          {
            icon: <MongoDB />,
            label: 'MongoDB',
          },
          {
            label: 'Cloudinary & Multer',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
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
    id: 3,
    name: 'LaunchShare',
    subName: 'LaunchShare: Your One-Stop platform for Launches',
    image: '/Images/Project1_Image.png',
    url: 'https://launch-share.vercel.app/',
    repoLink: 'https://github.com/AnishGane/LaunchShare',
    description:
      'LaunchShare is a community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.',
    status: 'Working',
    technologies: [
      {
        category: 'Frontend',
        stack: [
          {
            icon: <NextLogo />,
            label: 'Next.js',
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
          },
          {
            icon: <TSLogo />,
            label: 'TypeScript',
          }
        ],
      },
      {
        category: "Database",
        stack: [
          {
            icon: <Drizzle />,
            label: 'drizzle ORM',
          },
          {
            icon: <NeonDB />,
            label: 'NeonDB',
          }
        ]
      },
      {
        category: "Authentication",
        stack: [
          {
            icon: <Clerk />,
            label: 'Clerk',
          }
        ]
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
          },
        ],
      },
    ],
    timeline: '4 days',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback with proper user authentication & managementsupported by clerk with their own organization feature.',
      ProblemStatement:
        'To provide a platform for developers and startups to showcase their work and receive feedback from a community of like-minded individuals.',
      FuturePlan: [
        'Expand the LaunchShare community',
        'Add new features',
        'Improve Marketing and Brand Visibility',
      ],
    },
  },
  {
    id: 4,
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
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
          },
          {
            label: 'React Hot Toast',
          },
          {
            icon: <ReactRouter />,
            label: 'React Router',
          },
          {
            label: 'Motion',
          },
          {
            label: 'Axios',
          },
        ],
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <NodeJS />,
            label: 'Node.js',
          },
          {
            icon: <ExpessJS />,
            label: 'Express.js',
          },
          {
            icon: <MongoDB />,
            label: 'MongoDB',
          },
          {
            label: 'Cloudinary & Multer',
          },
          {
            label: 'Bcrypt',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
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
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
          },
          {
            label: 'React Hot Toast',
          },
          {
            label: 'Recharts',
          },
          {
            label: 'Emoji React Picker',
          },
        ],
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <NodeJS />,
            label: 'Node.js',
          },
          {
            icon: <ExpessJS />,
            label: 'Express.js',
          },
          {
            icon: <MongoDB />,
            label: 'MongoDB',
          },
          {
            label: 'Cloudinary & Multer',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Vercel />,
            label: 'Vercel',
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
