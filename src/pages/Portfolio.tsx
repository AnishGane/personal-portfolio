import { FileUser, Mail, Send } from 'lucide-react';

import ProfileImage from '@/components/Portfolio/ProfileImage';
import MyDescription from '@/components/Portfolio/MyDescription';
import Button from '@/components/Button';
import SocialLinks from '@/components/Portfolio/SocialLinks';
import Heading from '@/components/Portfolio/Heading';
import Project from '@/components/Projects/Project';
import About from '@/components/Portfolio/About';
import GitHubActivity from '@/components/Portfolio/GitHubActivity';
import BookaCall from '@/components/Portfolio/BookaCall';
import Quote from '@/components/Quote';
import { SocialLinkItem } from '@/components/constant/Data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const pageTransition = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -25 },
};
const Portfolio = () => {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="min-h-screen"
    >
      <section className="mt-10">
        {/* Profile Image */}
        <ProfileImage />

        {/* Description about me */}
        <MyDescription />

        {/* Button Component */}
        <div className="mt-6 flex items-center gap-4">
          <Button
            icon={
              <FileUser
                size={18}
                className="transform-all rotate-15 duration-200 group-hover:rotate-0"
              />
            }
            href="/resume.pdf"
            text="Resume / CV"
            variant="secondary"
            download={true}
            className="group"
          />

          <Button
            icon={
              <Send
                size={16}
                className="transform-all rotate-15 duration-200 group-hover:rotate-0"
              />
            }
            text="Get in touch"
            href="/contact-me"
            variant="primary"
            className="group"
          />
        </div>

        {/* Social Links with tooltip */}
        <div className="mt-8 flex items-center gap-3">
          {SocialLinkItem.map((item) => (
            <SocialLinks
              key={item.id}
              id={item.id}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
          <Link to={'/contact-me'}>
            <Mail size={25} className="text-neutral-6 hover:text-neutral-8 cursor-pointer" />
          </Link>
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

        <Quote
          quote='"Programs must be written for people to read, and only incidentally for machines to execute."'
          source="Harold Abelson"
        />
      </section>
    </motion.div>
  );
};

export default Portfolio;
