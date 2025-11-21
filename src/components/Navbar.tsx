import { NavLink, Link } from "react-router-dom";
import { navList } from "@/types";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 font-own py-4 px-3 backdrop-blur-sm transition-colors duration-300">
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {theme === "dark" ? (
          <Link to="/">
            <img
              src="/Images/AG_white.svg"
              alt="svg Logo"
              className="h-8 cursor-pointer"
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src="/Images/AG.svg"
              alt="svg white Logo"
              className="h-8 cursor-pointer"
            />
          </Link>
        )}

        <ul className="flex flex-wrap items-center gap-4 text-[15px] font-semibold capitalize tracking-wide text-neutral-700 dark:text-neutral-300">
          {navList.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-neutral-900 dark:text-white font-ownBold"
                      : "text-neutral-500 dark:text-neutral-400"
                  } transition-colors duration-300`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-lg border cursor-pointer border-neutral-300 dark:border-neutral-700 hover:shadow-[inset_0_0_8px_rgba(0,0,0,0.2)] dark:hover:shadow-[inset_0_0_8px_rgba(255,255,255,0.2)] transition-all"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
