import { NavLink, Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { navList } from './constant/Data';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="font-own sticky top-0 z-50 mt-4 px-3 py-4 backdrop-blur-sm transition-colors duration-300">
      <nav className="flex items-center justify-between">
        <Link to={'/'}>
          <img
            src={theme === 'dark' ? '/Images/AG_white.svg' : '/Images/AG.svg'}
            alt="svg Logo"
            className="h-8 cursor-pointer transition-transform duration-200 hover:scale-95"
            loading="lazy"
          />
        </Link>

        <ul className="flex flex-wrap items-center gap-4 text-[15px] font-semibold tracking-wide capitalize">
          {navList.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) =>
                  `${isActive
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
            onClick={toggleTheme}
            className="group cursor-pointer rounded-lg border-none transition-all outline-none"
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
