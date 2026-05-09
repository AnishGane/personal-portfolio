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
  Git,
  JavaScript,
  MongoDB,
  MotionLogo,
  NeonDB,
  NextLogo,
  NodeJS,
  NuqsLogo,
  Postgresql,
  ReactLogo,
  ReactRouter,
  Redux,
  Render,
  ResendLogo,
  ShadcnLogo,
  Supabase,
  TSLogo,
  TailwindCSS,
  Vercel,
  ZodLogo,
  Zustand,
} from '../icons/all-icons';

export const navList: NavItem[] = [
  { id: 1, label: 'Portfolio', path: '/' },
  { id: 2, label: 'Projects', path: '/projects' },
];

export const LanguageItem: LanguageType[] = [
  {
    id: 1,
    icon: <ReactLogo />,
    languageName: 'React',
    href: 'https://react.dev/',
  },
  {
    id: 2,
    icon: <TSLogo />,
    languageName: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    id: 3,
    icon: <TailwindCSS />,
    languageName: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
  },
  {
    id: 4,
    icon: <NextLogo />,
    languageName: 'Nextjs',
    href: 'https://nextjs.org/',
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
    image: '/Images/NoteForge.webp',
    mobile_image: '/Images/NoteForge_mobile.webp',
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
            label: 'Nextjs',
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
        'As a desired of learning Nextjs 16 and Better Auth, I have created this project for better implementation of Better Auth Session and email verification and much more features with the help of Nextjs 16.',
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
    image: '/Images/ExpenseTracker.webp',
    mobile_image: '/Images/ExpenseTracker_mobile.webp',
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
    name: 'FitTrack',
    subName: 'FitTrack: Track Your Fitness Effortlessly',
    image: "/Images/FitTrack.webp",
    mobile_image: "/Images/FitTrack_mobile.webp",
    url: 'https://fit-track-tau-smoky.vercel.app/',
    repoLink: 'https://github.com/AnishGane/FitTrack',
    description:
      'FitTrack is a full-stack application for tracking and measuring daily fitness that helps you to be in perfect shape, all fit and fine by putting out your weekly goals and help in achieving them.',
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
            icon: <ShadcnLogo />,
            label: "Shadcn (UI Library)",
          },
          {
            icon: <NextLogo />,
            label: 'Nextjs 16',
          },
          {
            icon: <TailwindCSS />,
            label: 'Tailwind CSS',
          },
          {
            icon: <TSLogo />,
            label: 'TypeScript',
          },
        ],
      },
      {
        category: 'State Management',
        stack: [
          {
            icon: <Zustand />,
            label: 'Zustand',
          }
        ]
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <NeonDB />,
            label: 'NeonDB',
          },
          {
            icon: <Drizzle />,
            label: 'Drizzle ORM',
          },
          {
            icon: <Postgresql />,
            label: 'PostgreSQL',
          }
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
        'FitTrack is a comprehensive full-stack application designed to help users track and measure their daily fitness activities. It enables users to set personalized weekly fitness goals, monitor their progress, and stay motivated throughout their journey. The intuitive interface allows for input and visualization of workouts, habits, and metrics, ensuring users have actionable insights to stay in perfect shape. FitTrack’s goal is to provide an all-in-one fitness companion to support users in achieving a healthy and well-balanced lifestyle.',
      Features: [
        'User authentication (Email/Password + Google SSO)',
        'Secure login using OAuth 2.0',
        'Streak and workout recommendation based on muscle groups',
        "Set and update the goals per week for workouts and habits",
        'Dark/Light mode',
        'Save and Unsave workouts',
        'Edit, Delete, View your workout details, & Create your own workout',
        "Fitness Tracking with KPIs of your workouts, Weekly volume(last 12 weeks) charts, Muscle Balance(by workout count) indicator, Activity heatmap of last 365 days, Personal Bests workouts per exercise, and a Exercise Progress line chart of your workouts",

      ],
      ProblemStatement: [
        'Tracking fitness progress manually is cumbersome and often inaccurate.',
        'Users struggle to maintain consistency and motivation without actionable insights.',
        'Difficulty in setting, monitoring, and achieving personalized fitness goals.',
      ],
      FuturePlan: [
        'Introduce real-time fitness tracking features.',
        'Integrate personalized analytics and recommendations.',
        'Expand platform for group and community challenges.',
      ],
    },
  },
  {
    id: 4,
    name: 'URL Shortner',
    subName: 'Snip - A URL shortner application for shortening long urls.',
    image: "/Images/Snip.webp ",
    mobile_image: '/Images/Snip_mobile.webp',
    url: 'https://urlshortner-lzyy.onrender.com/',
    repoLink: 'https://github.com/AnishGane/URLShortner.git',
    description:
      'Snip is a simple and efficient URL shortener application that enables users to quickly convert long, cumbersome web addresses into easily shareable short links. The app features a clean and user-friendly interface for generating, managing, and tracking shortened URLs. Designed for convenience, Snip helps users keep their links tidy, improve sharing flexibility, and monitor basic usage analytics. Whether for personal or business use, Snip streamlines the process of URL sharing without hassle.',
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
            icon: <ShadcnLogo />,
            label: 'Shadcn'
          },
          {
            label: 'Sonner'
          },
          {
            label: 'React Hook Form'
          },
          {
            label: 'Tanstack React Query'
          },
          {
            label: 'Zod'
          }
        ],
      },
      {
        category: 'Backend',
        stack: [
          {
            icon: <Supabase />,
            label: 'Supabase',
          },
        ],
      },
      {
        category: 'Deployment',
        stack: [
          {
            icon: <Render />,
            label: 'Render',
          },
        ],
      },
    ],
    timeline: '2 weeks',
    Role: 'Full Stack',
    Team: 'Solo',
    itemData: {
      Overview:
        'URL Shortner is a user-friendly web application that allows users to easily create and manage shortened URLs, making it convenient to share and track links for personal or business use.',
      Features: [
        'User Authentication powered by Supabase Auth',
        'Instantly shorten any valid URL',
        'Real-time preview of the shortened URL as you type',
        'QR code generated for each url',
        'Create, Edit, Delete, Download the QR code',
        'One-click copy for any short URL',
        'Track the clicks per url & Location and Devices of clicked url',
        'Mobile-first, works on all screen sizes',
        'Dark/Light mode support',
        'All shortened URLs are checked for safety, with clear warnings for potentially unsafe links',
        ' Share the url links to others'
      ],
      ProblemStatement: [
        'To get Good knowledge about Supabase, Supabase auth & Supabase storage',
        'To know how the Supabase Real-time subscription works',
        'To learn how to deploy full-stack apps on Render',
      ],
      FuturePlan: [
        'Add support for bulk URL shortening and management',
        'Enable users to customize the slug/alias of their shortened URLs',
        'Enhance security with phishing & spam detection on submitted URLs',
        'Add social sharing options and integrations',
      ],
    },
  },
  {
    id: 5,
    name: 'LaunchShare',
    subName: 'LaunchShare: Your One-Stop platform for Launches',
    image: '/Images/LaunchShare.webp',
    mobile_image: '/Images/LaunchShare_mobile.webp',
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
            label: 'Nextjs',
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
            label: 'Drizzle ORM',
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
    id: 6,
    name: 'SoftStitch Ecommerce',
    subName: 'SoftStitch Ecommerce: A full-stack e-commerce platform',
    image: '/Images/SoftStitch.webp',
    mobile_image: '/Images/SoftStitch_mobile.webp',
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
];

export const MySkills: Skills[] = [
  {
    id: 1,
    icon: <ReactLogo />,
    label: 'React'
  },
  {
    id: 2,
    icon: <TailwindCSS />,
    label: 'TailwindCSS',
  },
  {
    id: 3,
    icon: <JavaScript />,
    label: 'JavaScript',
  },
  {
    id: 4,
    icon: <TSLogo />,
    label: 'TypeScript',
  },
  {
    id: 5,
    icon: <NextLogo />,
    label: 'Nextjs',
  },
  {
    id: 6,
    icon: <MongoDB />,
    label: 'Mongodb',
  },
  {
    id: 7,
    icon: <NodeJS />,
    label: 'Nodejs',
  },
  {
    id: 8,
    icon: <ExpessJS />,
    label: 'Express',
  },
  {
    id: 9,
    icon: <Redux />,
    label: 'Redux'
  },
  {
    id: 10,
    icon: <Git />,
    label: "Git"
  }
];


