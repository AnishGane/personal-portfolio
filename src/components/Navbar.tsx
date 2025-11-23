import { NavLink, Link } from "react-router-dom";
import { navList } from "@/types";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 font-own mt-4 py-4 px-3 backdrop-blur-sm transition-colors duration-300">
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

        <ul className="flex flex-wrap items-center gap-4 text-[15px] font-semibold capitalize tracking-wide">
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
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset",
            }}
            onClick={toggleTheme}
            className="group ml-2 p-2 border border-btn-border hover:ring-2 hover:bg-theme-hover hover:ring-neutral-6 rounded-lg cursor-pointer transition-all"
          >
            {theme === "dark" ? (
              <Sun
                color="#ffffff"
                size={18}
                className="transition-transform duration-300 group-hover:rotate-8"
              />
            ) : (
              <Moon
                color="#000000"
                size={18}
                className="transition-transform duration-300 group-hover:rotate-8"
              />
            )}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
