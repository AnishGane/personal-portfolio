import type { LanguageType, SocialLinkProp } from "@/types";

// react-icons
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { PiLinkedinLogo } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";

import { FileUser, Send } from "lucide-react";

import TSLogo from "@/components/icons/TSLogo";
import ReactLogo from "@/components/icons/ReactLogo";
import NextLogo from "@/components/icons/NextLogo";
import Bun from "@/components/icons/Bun";
import Postgress from "@/components/icons/Postgress";
import ProfileImage from "@/components/Portfolio/ProfileImage";
import MyDescription from "@/components/Portfolio/MyDescription";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";

export const LanguageItem: LanguageType[] = [
  {
    id: 1,
    icon: <TSLogo />,
    languageName: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    id: 2,
    icon: <ReactLogo />,
    languageName: "React",
    href: "https://react.dev/",
  },
  {
    id: 3,
    icon: <NextLogo />,
    languageName: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    id: 4,
    icon: <Bun />,
    languageName: "Bun",
    href: "https://bun.com/",
  },
  {
    id: 5,
    icon: <Postgress />,
    languageName: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
];

const SocialLinkItem: SocialLinkProp[] = [
  {
    id: 1,
    icon: <RiTwitterXFill />,
    label: "X",
    href: "https://www.google.com",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    label: "instagram",
    href: "https://www.google.com",
  },
  {
    id: 3,
    icon: <FiGithub />,
    label: "Github",
    href: "https://www.google.com",
  },
  {
    id: 4,
    icon: <PiLinkedinLogo />,
    label: "Linkedin",
    href: "https://www.google.com",
  },
  {
    id: 5,
    icon: <IoMailOutline />,
    label: "Email",
    href: "https://www.google.com",
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
      <div className="flex items-center gap-4 mt-8">
        <Button
          icon={
            <FileUser
              size={18}
              className="rotate-15 hover:rotate-0 transform-all duration-200"
            />
          }
          href="/resume.pdf"
          text="Resume / CV"
          variant="secondary"
        />

        <Button
          icon={
            <Send
              size={16}
              className="rotate-15 hover:rotate-0 transform-all duration-200"
            />
          }
          text="Get in touch"
          variant="primary"
        />
      </div>

      {/* Social Links with tooltip */}
      <div className="flex items-center gap-3 mt-8">
        {SocialLinkItem.map((item) => (
          <SocialLinks
            id={item.id}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>

      {/* Projects */}
      <div className="mt-16">
        <p className="text-gray-500 text-sm tracking-tighter">Featured</p>
        <h2 className="text-2xl font-bold text-neutral-8 font-tooltip">
          Projects
        </h2>
      </div>
    </section>
  );
};

export default Portfolio;
