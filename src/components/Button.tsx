import type { JSX } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  icon?: JSX.Element;
  text: string;
  variant?: 'primary' | 'secondary';
  href?: string;
  download?: boolean;
};

const Button = ({ icon, text, href, variant = 'secondary', download = false }: ButtonProps) => {
  const base =
    'px-4 py-[8px] rounded-lg flex group items-center text-[13px] font-medium font-tooltip gap-2 tracking-wide transition-colors duration-200 shadow-sm border';

  const variants = {
    primary:
      'bg-black text-white border-neutral-800 cursor-pointer dark:bg-neutral-200 dark:text-black dark:border-neutral-300',
    secondary:
      'bg-white text-black border-neutral-300 hover:bg-gray-200/80 dark:hover:bg-white/15 dark:bg-white/10 dark:text-white dark:border-neutral-700',
  };

  const content = (
    <span
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset',
      }}
      className={`${base} ${variants[variant]} `}
    >
      <span className="transform-all rotate-15 duration-200 group-hover:rotate-0">{icon}</span>
      <span>{text}</span>
    </span>
  );

  // CASE 1: Download file
  if (download && href) {
    return (
      <a href={href} download className="inline-block cursor-default">
        {content}
      </a>
    );
  }

  // CASE 2: Normal navigation inside React app
  if (href) {
    return (
      <Link to={href} className="inline-block cursor-pointer">
        {content}
      </Link>
    );
  }
};

export default Button;
