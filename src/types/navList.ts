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
