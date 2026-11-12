import TechnologyList from '../TechnologyList';
import { MySkills } from '../constant/Data';

const About = () => {
  return (
    <div className="font-tooltip mt-3 mb-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
      <div className="size-52 shrink-0 overflow-hidden rounded-md  group">
        <img src="/Images/Profilepic.webp" alt="My Image"
          loading='lazy'
          className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
          draggable="false"
        />
      </div>

      <div className='border-neutral-6 border px-6 py-2 rounded-md relative overflow-hidden'>
        <div className='size-32 bg-black dark:bg-white absolute -bottom-16 -right-20 rotate-45'></div>
        <h2 className="text-neutral-8 mb-1.5 text-3xl font-bold">Anish Gane</h2>
        <p className="text-justify text-gray-700 dark:text-gray-300">
          I'm a MERN Stack web developer and a Bachelors in Computer Application student, I love
          building projects to sharpen my skills. I'm specialized in building responsive and
          user-friendly web apps.
        </p>
        <span className="mt-6 mb-2.5 inline-block font-bold text-gray-600 dark:text-gray-300">My Skills</span>
        <div className="flex flex-wrap gap-2">
          {MySkills.map((item) => (
            <TechnologyList key={item.id} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
