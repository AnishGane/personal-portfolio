import type { JSX } from 'react/jsx-dev-runtime';
import LinkToolTip from './LinkToolTip';
import { cloneElement } from 'react';
type TechnologyListProps = {
  label: string;
  icon?: JSX.Element;
};

const TechnologyList = ({ icon, label }: TechnologyListProps) => {
  return (
    <div key={label} className="group relative flex size-6 items-center justify-center bg-red-400">
      {/* Tooltip */}
      <LinkToolTip label={label} />

      {/* Icon */}
      {icon && (
        <button className="cursor-pointer transition-transform duration-200 group-hover:scale-120">
          {icon && cloneElement(icon, { width: 22, height: 22 })}
        </button>
      )}
    </div>
  );
};

export default TechnologyList;
