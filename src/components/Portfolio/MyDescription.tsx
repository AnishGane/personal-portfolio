import LanguageSpanItem from './LanguageSpanItem';
import { LanguageItem } from '../constant/Data';

const MyDescription = () => {
  return (
    <div className="font-tooltip mt-2 sm:mt-6 flex flex-col gap-4 font-medium tracking-wider">

      <div className="mt-3 font-normal text-neutral-6 text-sm sm:text-base leading-7 sm:leading-8">
        <span>I build interactive web apps using </span>

        {LanguageItem.map((item, idx) => (
          <LanguageSpanItem
            key={item.id + item.languageName}
            item={item}
            idx={idx}
            totalCount={LanguageItem.length}
          />
        ))}

        <span> & more . With a focus on </span>
        <strong>UI</strong>
        <span> design, </span>
        <strong>clean</strong>
        <span> and </span>
        <strong>modern</strong>
        <span>
          {" "}
          looking websites, driven by a drive to create innovative and user-friendly
          web apps.
        </span>
      </div>

    </div>
  );
};

export default MyDescription;
