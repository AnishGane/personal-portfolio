import type { LanguageType } from "@/types";
import { Link } from "react-router-dom";

const LanguageDiv = ({
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
      className="flex items-center gap-1.5"
    >
      <span
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px inset",
        }}
        className="flex items-center justify-center gap-1 border border-dashed bg-gray-200/55 dark:bg-white/15 border-neutral-600 dark:border-neutral-300 rounded-md px-2 py-1"
      >
        {item.icon}
        <span className="text-xs font-bold">{item.languageName}</span>
      </span>
      {!isLast && !isSecondLast && (
        <span className="whitespace-pre text-neutral-6">, </span>
      )}
      {isSecondLast && (
        <span className="whitespace-pre text-neutral-6"> and </span>
      )}
    </Link>
  );
};

export default LanguageDiv;
