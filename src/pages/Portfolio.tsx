import type { LanguageType, SocialLinkProp } from '@/types';

// react-icons
import { FaInstagram } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { PiLinkedinLogo } from 'react-icons/pi';
import { IoMailOutline } from 'react-icons/io5';

import { FileUser, Send } from 'lucide-react';

import TSLogo from '@/components/icons/TSLogo';
import ReactLogo from '@/components/icons/ReactLogo';
import NextLogo from '@/components/icons/NextLogo';
import Bun from '@/components/icons/Bun';
import Postgress from '@/components/icons/Postgress';
import ProfileImage from '@/components/Portfolio/ProfileImage';
import MyDescription from '@/components/Portfolio/MyDescription';
import Button from '@/components/Button';
import SocialLinks from '@/components/SocialLinks';
import Heading from '@/components/Portfolio/Heading';
import Project from '@/components/Projects/Project';
import About from '@/components/About';
import GitHubActivity from '@/components/Portfolio/GitHubActivity';
import BookaCall from '@/components/Portfolio/BookaCall';
import Quote from '@/components/Quote';

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

const SocialLinkItem: SocialLinkProp[] = [
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

const Portfolio = () => {
  return (
    <section className="mt-10">
      {/* Profile Image */}
      <ProfileImage />

      {/* Description about me */}
      <MyDescription />

      {/* Button Component */}
      <div className="mt-6 flex items-center gap-4">
        <Button
          icon={<FileUser size={18} />}
          href="/resume.pdf"
          text="Resume / CV"
          variant="secondary"
          download={true}
        />

        <Button icon={<Send size={16} />} text="Get in touch" href="/contact" variant="primary" />
      </div>

      {/* Social Links with tooltip */}
      <div className="mt-8 flex items-center gap-3">
        {SocialLinkItem.map((item) => (
          <SocialLinks id={item.id} icon={item.icon} label={item.label} href={item.href} />
        ))}
      </div>

      {/* Projects */}
      <div className="mt-14">
        <Heading subHeading="Featured" heading="Projects" />

        <Project />
      </div>

      {/* About ME */}
      <div className="mt-14">
        <Heading subHeading="About" heading="Me" />

        <About />
      </div>

      <div className="mt-14">
        <Heading subHeading="Featured" heading="Github Activity" />
        <GitHubActivity username={'AnishGane'} />
      </div>

      <BookaCall />

      <Quote quote='"The best way to predict the future is to create it."' source='Abraham Lincoln'/>
    </section>
  );
};

export default Portfolio;
