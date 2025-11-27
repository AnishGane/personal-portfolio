import { NavLink, Link } from 'react-router-dom';
import { navList } from '@/types';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="font-own sticky top-0 z-50 mt-4 px-3 py-4 backdrop-blur-sm transition-colors duration-300">
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {theme === 'dark' ? (
          <Link to="/">
            <img
              src="/Images/AG_white.svg"
              alt="svg Logo"
              className="h-8 cursor-pointer transition-transform duration-200 hover:scale-95"
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src="/Images/AG.svg"
              alt="svg white Logo"
              className="h-8 cursor-pointer transition-transform duration-200 hover:scale-95"
            />
          </Link>
        )}

        <ul className="flex flex-wrap items-center gap-4 text-[15px] font-semibold tracking-wide capitalize">
          {navList.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'font-ownBold text-neutral-900 dark:text-white'
                      : 'text-neutral-500 dark:text-neutral-400'
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
                'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset',
            }}
            onClick={toggleTheme}
            className="group border-btn-border hover:bg-theme-hover hover:ring-neutral-6 ml-2 cursor-pointer rounded-lg border p-2 transition-all hover:ring-2"
          >
            {theme === 'dark' ? (
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
