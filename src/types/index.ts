import type { JSX } from "react/jsx-runtime";

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
  { id: 1, label: "Portfolio", path: "/" },
  { id: 2, label: "Projects", path: "/projects" },
  { id: 3, label: "Blog", path: "/blog" },
];
