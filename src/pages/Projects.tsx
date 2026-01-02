import ProjectCard from '@/components/Projects/ProjectCard';
import Quote from '@/components/Quote';
import { ProjectItem } from '@/components/constant/Data';
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filterProjects, setFilterProjects] = useState(ProjectItem);
  const [activeStatus, setActiveStatus] = useState<string | null>(null);

  const totalProjects = ProjectItem.length;
  const workingCount = useMemo(
    () => ProjectItem.filter((item) => item.status === 'Working').length,
    []
  );
  const buildingCount = useMemo(
    () => ProjectItem.filter((item) => item.status === 'Building').length,
    []
  );

  const showProjects = (status: string) => {
    if (status === activeStatus) {
      setFilterProjects(ProjectItem);
      setActiveStatus(null);
      return;
    }

    const fp = ProjectItem.filter((item) => item.status === status);
    setFilterProjects(fp);
    setActiveStatus(status);
  };

  const clearFilter = () => {
    setFilterProjects(ProjectItem);
    setActiveStatus(null);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="min-h-screen"
    >
      <div className="font-tooltip relative">
        <div className="my-10 text-center">
          <h1 className="text-neutral-8 text-[2.6rem] font-medium tracking-tight">Projects</h1>
          <p className="text-neutral-6">
            All the projects that I have worked on with different technologies.
          </p>
        </div>

        <div className="mt-4 mb-6 border-t border-black/20 pt-8 dark:border-white/20">
          <div className="flex items-center justify-between">
            <p className="text-neutral-8 font-semibold">Filter by Status</p>
            {activeStatus != null && (
              <p
                onClick={clearFilter}
                className="text-neutral-6 cursor-pointer text-xs hover:underline"
              >
                Clear filter
              </p>
            )}
          </div>

          <div className="mt-2.5 mb-5 flex items-center gap-2">
            {/* Working */}
            <button
              onClick={() => showProjects('Working')}
              className={`border-neutral-6 cursor-pointer rounded-sm border px-1.5 py-0.5 text-[10px] ${
                activeStatus === 'Working'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-neutral-8 bg-white dark:bg-black'
              } `}
            >
              Working ({workingCount})
            </button>

            {/* Building */}
            <button
              onClick={() => showProjects('Building')}
              className={`border-neutral-6 cursor-pointer rounded-sm border px-1.5 py-0.5 text-[10px] ${
                activeStatus === 'Building'
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-neutral-8 bg-white dark:bg-black'
              } `}
            >
              Building ({buildingCount})
            </button>
          </div>

          <h1 className="text-neutral-8 text-[1.28rem] font-semibold">
            All Projects ({totalProjects})
          </h1>

          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <AnimatePresence mode="wait">
              {filterProjects.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25, filter: 'blur(15px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <ProjectCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <Quote
          quote='"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."'
          source="Martin Fowler"
        />
      </div>
    </motion.div>
  );
};

export default Projects;
