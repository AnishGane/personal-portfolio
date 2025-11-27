import type { JSX } from 'react/jsx-runtime';

export type SocialLinkProp = {
  id: number;
  icon: JSX.Element;
  label: string;
  href?: string;
};

export type LanguageType = {
  id: number;
  icon: JSX.Element;
  languageName: string;
  href: string;
};

export type NavItem = {
  id: number;
  label: string;
  path: string;
};

export const navList: NavItem[] = [
  { id: 1, label: 'Portfolio', path: '/' },
  { id: 2, label: 'Projects', path: '/projects' },
  { id: 3, label: 'Blog', path: '/blog' },
];

export type HeadingProps = {
  subHeading: string;
  heading: string;
};

export type ProjectItemProps = {
  id: number;
  image: string;
  name: string;
  url: string;
  repoLink: string;
  description: string;
  status: string;
  techonologies: {
    icon: JSX.Element;
    label: string;
  }[];
};

export type Skills = {
  id: number;
  icon: JSX.Element;
  label: string;
};

export type ContributionDay = {
  contributionCount: number;
  date: string;
  color: string;
};

export type Week = {
  contributionDays: ContributionDay[];
};

export type GitHubResponse = {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: Week[];
        totalContributions: number;
      };
    };
  };
};

export type MonthLabel = { month: number; label: string; date: string } | null;
