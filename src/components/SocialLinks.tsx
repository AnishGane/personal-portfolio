import { cloneElement } from "react";
import type { SocialLinkProp } from "@/types";
import LinkToolTip from "./LinkToolTip";

const SocialLinks = ({ icon, label, href }: SocialLinkProp) => {
  const sizedIcon = cloneElement(icon, { size: 25 });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group font-tooltip"
    >
      {/* Icon */}
      <div className="cursor-pointer text-neutral-6 hover:text-neutral-8">
        {sizedIcon}
      </div>

      {/* Tooltip */}
      <LinkToolTip label={label} />
    </a>
  );
};

export default SocialLinks;
