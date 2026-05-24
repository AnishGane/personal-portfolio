import { cloneElement } from 'react';
import type { SocialLinkProp } from '@/types';
import LinkToolTip from '../ToolTips/LinkToolTip';

const SocialLinks = ({ icon, label, href }: SocialLinkProp) => {
  const sizedIcon = cloneElement(icon, { size: 22 });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group font-tooltip relative bg-black/90 dark:bg-white/90 rounded-lg p-1.5 ring-1 ring-neutral-400"
      aria-label={label}
    >
      {/* Icon */}
      <div className="text-white dark:text-black">{sizedIcon}</div>

      {/* Tooltip */}
      <LinkToolTip label={label} />
    </a>
  );
};

export default SocialLinks;
