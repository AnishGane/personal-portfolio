import type { JSX } from "react";

type ButtonProps = {
  icon: JSX.Element;
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
};

const Button = ({ icon, text, href, variant = "secondary" }: ButtonProps) => {
  const base =
    "px-4 py-[10.5px] rounded-lg  flex items-center text-[13px] font-medium font-tooltip gap-2 tracking-wide transition-colors duration-200 shadow-sm border";

  const variants = {
    primary:
      "bg-black text-white border-neutral-800 cursor-pointer dark:bg-neutral-200 dark:text-black dark:border-neutral-300",
    secondary:
      "bg-white text-black border-neutral-300 hover:bg-gray-200/80 dark:hover:bg-white/15 dark:bg-white/10 dark:text-white dark:border-neutral-700",
  };

  return (
    <a href={href} download>
      <button
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset",
        }}
        className={` ${base} ${variants[variant]}`}
      >
        {icon}
        <span>{text}</span>
      </button>
    </a>
  );
};

export default Button;
