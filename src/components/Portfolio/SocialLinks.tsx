import { cloneElement } from 'react';
import type { SocialLinkProp } from '@/types';
import LinkToolTip from '../ToolTips/LinkToolTip';

const SocialLinks = ({ icon, label, href }: SocialLinkProp) => {
  const sizedIcon = cloneElement(icon, { size: 25 });

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group font-tooltip relative"
      >
        {/* Icon */}
        <div className="text-neutral-6 hover:text-neutral-8 cursor-pointer">{sizedIcon}</div>

        {/* Tooltip */}
        <LinkToolTip label={label} />
      </a>
    </>
  );
};

export default SocialLinks;
