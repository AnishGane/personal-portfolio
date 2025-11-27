import ProjectCard from './ProjectCard';
import { ProjectItem } from '../constant/Data';
import Button from '../Button';

const Project = () => {
  return (
    <div className="mt-4 mb-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {ProjectItem.slice(0, 4).map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8 flex w-full items-center justify-center">
        <Button text="See More Projects" href="/projects" variant="secondary" />
      </div>
    </div>
  );
};

export default Project;
