import { LanguageItem } from "@/pages/Portfolio";
import LanguageSpanItem from "../LanguageSpanItem";

const MyDescription = () => {
  return (
    <div className="flex font-tooltip flex-col  gap-3 mt-8 tracking-wider font-medium">
      <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-linear-to-b from-gray-600 via-gray-700 to-gray-800 dark:from-gray-300 dark:via-gray-200 dark:to-gray-100 bg-clip-text">
        Hi, I'm Anish —
        <span className="text-neutral-400/80"> A MERN Stack Developer.</span>
      </h1>

      <div className="flex flex-wrap mt-4 whitespace-pre-wrap items-center gap-2 text-neutral-6">
        <span>I build interactive web apps using</span>
        {LanguageItem.map((item, idx) => (
          <LanguageSpanItem
            key={item.id + item.languageName}
            item={item}
            idx={idx}
            totalCount={LanguageItem.length}
          />
        ))}
        <span>. With a focus on</span>
        <strong>UI</strong>
        <span>design. Enthusiastic about</span>
        <span>
          <strong>Three.js </strong>, driven by a
        </span>
        <span>eye for design.</span>
      </div>
    </div>
  );
};

export default MyDescription;
