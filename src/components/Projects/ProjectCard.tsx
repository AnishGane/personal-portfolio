import type { ProjectItemProps } from '@/types';

import { FiGithub } from 'react-icons/fi';
import WebsiteDemo from '../icons/WebsiteDemo';
import LinkToolTip from '../ToolTips/LinkToolTip';
import { ArrowRight } from 'lucide-react';
import TechnologyList from '../TechnologyList';
import { Link } from 'react-router-dom';
import { slugify } from '@/utils/helper';

const ProjectCard = ({ item }: { item: ProjectItemProps }) => {
  const nameSlug = slugify(item.name);
  return (
    <div
      key={item.id}
      className="ring-neutral-6/15 font-tooltip rounded-xl bg-white shadow-md ring-1 dark:bg-neutral-800"
    >
      <img src="/Images/demo3.png" alt={item.name} className="w-full rounded-t-xl" />
      

      <div className="project_content rounded-b-xl p-[17px] pt-6 hover:bg-neutral-200/30 dark:hover:bg-neutral-900/40">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-tooltip line-clamp-1 text-lg font-bold text-neutral-900 dark:text-neutral-100">
            {item.name}
          </h3>
          <div className="flex items-center gap-2.5">
            {/* Live Demo of Website */}
            {item.status === 'Working' && (
              <div className="group relative flex items-center justify-center">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto"
                >
                  <span>
                    <WebsiteDemo className="text-neutral-6 size-6" />
                  </span>
                </a>

                <LinkToolTip label="Live Demo" />
              </div>
            )}

            {/* GitHub Repository Link */}
            <div className="group relative flex items-center justify-center">
              <a
                href={item.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto"
              >
                <FiGithub className="text-neutral-6 size-5" />
              </a>

              <LinkToolTip label="GitHub Repo" />
            </div>
          </div>
        </div>
        <p className="text-neutral-6 mt-3 line-clamp-3 text-sm text-balance">{item.description}</p>
        <p className="text-neutral-6 mt-3 text-sm font-medium tracking-[0.01em]">Technologies</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          {item.techonologies
            .filter((tech) => tech.icon)
            .map((tech) => (
              <TechnologyList key={tech.label} icon={tech.icon} label={tech.label} />
            ))}
        </div>

        <div className="mt-4 mb-2 flex items-center justify-between tracking-tight">
          <div
            className={`${
              item.status === 'Building'
                ? 'bg-[#FEE9EA] dark:bg-[#2E191A]'
                : 'bg-[#E5FAEE] dark:bg-[#15291D]'
            } text-neutral-8 font-tooltip flex items-center justify-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold`}
          >
            <span
              className={`size-[7px] rounded-full ${
                item.status === 'Building' ? 'bg-red-700' : 'bg-green-700'
              }`}
            ></span>
            <p>{item.status === 'Building' ? 'Building' : 'Fully Functional'}</p>
          </div>
          <p className="group hover:text-neutral-6 flex cursor-pointer items-center justify-center gap-1 text-[13px] font-semibold text-neutral-400">
            <Link to={`/projects/${nameSlug}`}>
              View Details
              <hr className="h-px w-0 transition-all duration-200 ease-in-out group-hover:w-full" />
            </Link>
            <div>
              <ArrowRight size={18} />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
