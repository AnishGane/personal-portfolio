import type { SVGProps } from 'react';
const ShadcnLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="none"
      className="stroke-black dark:stroke-white"
      strokeWidth="25"
      strokeLinecap="round"
      d="M208 128l-80 80M192 40L40 192"
    />
  </svg>
);

export default ShadcnLogo;
