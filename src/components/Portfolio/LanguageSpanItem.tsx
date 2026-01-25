import type { LanguageType } from "@/types";
import { Link } from "react-router-dom";
import { cloneElement } from "react";

const LanguageSpanItem = ({
  item,
  idx,
  totalCount,
}: {
  item: LanguageType;
  idx: number;
  totalCount: number;
}) => {
  const isLast = idx === totalCount - 1;
  const isSecondLast = idx === totalCount - 2;

  return (
    <Link
      to={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center space-y-1.5 gap-1.5 align-middle"
    >
      <span
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 2px inset, rgba(0, 0, 0, 0.05) 0px 2px 4px inset",
        }}
        className="inline-flex items-center gap-1 border border-dashed
                 bg-gray-200/55 dark:bg-white/15
                 border-neutral-600 dark:border-neutral-300
                 rounded-md px-2 py-1"
      >
        <span className="w-5 h-5 flex items-center justify-center">
          {cloneElement(item.icon, { width: 18, height: 18 })}
        </span>

        <span className="text-xs font-bold whitespace-nowrap">
          {item.languageName}
        </span>
      </span>

      {!isLast && !isSecondLast && <span className="pr-1">, </span>}
      {isSecondLast && <span className="px-1"> and  </span>}
    </Link>

  );
};

export default LanguageSpanItem;
