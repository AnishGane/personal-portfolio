import type { JSX } from 'react/jsx-dev-runtime';
import LinkToolTip from './LinkToolTip';
import { cloneElement } from 'react';

const TechnologyList = ({ tech }: { tech: { icon: JSX.Element; label: string } }) => {
  return (
    <div key={tech.label} className="group relative flex size-6 items-center justify-center">
      {/* Tooltip */}
      <LinkToolTip label={tech.label} />

      {/* Icon */}
      <button className="cursor-pointer transition-transform duration-200 group-hover:scale-120">
        {cloneElement(tech.icon, { width: 22, height: 22 })}
      </button>
    </div>
  );
};

export default TechnologyList;
