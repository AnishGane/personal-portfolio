import type { JSX } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  icon?: JSX.Element;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;

  href?: string;
  target?: string;
  download?: boolean;

  className?: string;
  label?: string;
};

const Button = ({
  text,
  icon,
  variant = 'secondary',
  fullWidth = false,

  href,
  target,
  download = false,

  className = '',
  label,
}: ButtonProps) => {
  const base =
    'px-4 py-[8px] rounded-lg flex items-center gap-2 text-[13px] font-medium font-tooltip tracking-wide transition-colors duration-200 shadow-sm border';

  const variants = {
    primary:
      'bg-black text-white border-neutral-800 dark:bg-neutral-200 dark:text-black dark:border-neutral-300',
    secondary:
      'bg-white text-black border-neutral-300 hover:bg-gray-200/80 dark:bg-white/10 dark:text-white dark:border-neutral-700 dark:hover:bg-white/15',
  };

  const width = fullWidth ? 'w-full justify-center' : 'inline-flex';

  const classes = `${base} ${variants[variant]} ${width}  ${className}`;

  // -------- BUTTON CONTENT (no wrapper) --------
  const content = (
    <>
      {icon && <span>{icon}</span>}
      {label ? (
        <div className="flex flex-col gap-[2px]">
          <span className='text-neutral-6 text-xs'>{label}</span>
          <span className='font-medium text-base'>{text}</span>
        </div>
      ) : (
        <span className="font-normal">{text}</span>
      )}
    </>
  );

  // -------- DOWNLOAD / EXTERNAL --------
  if (href && download) {
    return (
      <a href={href} download className={classes}>
        {content}
      </a>
    );
  }

  // -------- INTERNAL NAVIGATION --------
  if (href) {
    return (
      <Link to={href} target={target} className={classes}>
        {content}
      </Link>
    );
  }
};

export default Button;
