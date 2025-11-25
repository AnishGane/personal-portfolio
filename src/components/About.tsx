import TechnologyList from './TechnologyList';
import { MySkills } from './constant/Data';

const About = () => {
  return (
    <div className="my-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
      <div className="size-44 shrink-0 overflow-hidden rounded-xl">
        <img src="/Images/GhibliImage.png" alt="My Image" className="h-full w-full object-cover" />
      </div>

      <div>
        <h2>Anish Gane</h2>
        <p>
          I'm a Full Stack web developer and Open Source Contributor, I love building products to
          solve real-world problems. I'm specialized in building MVP's.
        </p>
        <span>Skills</span>
        <div className="flex flex-wrap gap-1">
          {MySkills.map((item) => (
            <TechnologyList key={item.id} tech={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
