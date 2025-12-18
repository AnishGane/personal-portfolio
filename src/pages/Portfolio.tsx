import { FileUser, Send } from 'lucide-react';

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
import { SocialLinkItem } from '@/components/constant/Data';

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
            <Send size={16} className="transform-all rotate-15 duration-200 group-hover:rotate-0" />
          }
          text="Get in touch"
          href="/contact"
          variant="primary"
          className="group"
        />
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

      <Quote
        quote='"The best way to predict the future is to create it."'
        source="Abraham Lincoln"
      />
    </section>
  );
};

export default Portfolio;
