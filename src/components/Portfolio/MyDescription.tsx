import LanguageSpanItem from '../LanguageSpanItem';
import { LanguageItem } from '../constant/Data';

const MyDescription = () => {
  return (
    <div className="font-tooltip mt-6 flex flex-col gap-3 font-medium tracking-wider">
      <h1 className="bg-linear-to-b from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-3xl font-medium text-transparent sm:text-4xl dark:from-gray-300 dark:via-gray-200 dark:to-gray-100">
        Hi, I'm Anish —<span className="text-neutral-400/80"> A MERN Stack Developer.</span>
      </h1>

      <div className="text-neutral-6 mt-2 flex flex-wrap items-center gap-2 whitespace-pre-wrap">
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
