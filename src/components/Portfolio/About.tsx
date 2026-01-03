import TechnologyList from '../TechnologyList';
import { MySkills } from '../constant/Data';

const About = () => {
  return (
    <div className="font-tooltip mt-3 mb-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
      <div className="size-52 shrink-0 overflow-hidden rounded-xl">
        <img src="/Images/GhibliImage.png" alt="My Image" className="h-full w-full object-cover" />
      </div>

      <div>
        <h2 className="text-neutral-8 mb-1.5 text-3xl font-bold">Anish Gane</h2>
        <p className="text-justify text-gray-500">
          I'm a MERN Stack web developer and a Bachelors in Computer Application student, I love
          building projects to sharpen my skills. I'm specialized in building responsive and
          user-friendly web apps.
        </p>
        <span className="mt-8 mb-2 inline-block font-bold text-gray-500/80">Skills</span>
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
