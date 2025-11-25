import type { ProjectItemProps } from '@/types';

import { FiGithub } from 'react-icons/fi';
import WebsiteDemo from '../icons/WebsiteDemo';
import LinkToolTip from '../LinkToolTip';
import { cloneElement } from 'react';
import { ArrowRight } from 'lucide-react';
import TechnologyList from '../TechnologyList';

const ProjectCard = ({ item }: { item: ProjectItemProps }) => {
  return (
    <div
      key={item.id}
      className="ring-neutral-6/10 font-tooltip rounded-xl bg-white shadow-md ring-1 dark:bg-neutral-800"
    >
      <img src={item.image} alt={item.name} className="w-full rounded-t-xl" />
      <div className="project_content rounded-b-xl p-[17px] pt-8 hover:bg-neutral-100/45 dark:hover:bg-neutral-900/40">
        <div className="flex items-center justify-between">
          <h3 className="font-tooltip text-lg font-bold text-neutral-900 dark:text-neutral-100">
            {item.name}
          </h3>
          <div className="flex items-center gap-2.5">
            {/* Live Demo of Website */}
            {item.status != 'Building' && (
              <div className="group relative flex items-center justify-center">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto"
                >
                  <span>
                    <WebsiteDemo />
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
        <p className="text-neutral-6 mt-3 text-sm tracking-[0.01em]">Technologies</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          {item.techonologies.map((tech) => (
            <TechnologyList key={tech.label} tech={tech} />
          ))}
        </div>

        <div className="mt-4 mb-2 flex items-center justify-between tracking-tight">
          <div
            className={`${
              item.status === 'Building'
                ? 'bg-[#FEE9EA] dark:bg-[#2E191A]'
                : 'bg-[#E5FAEE] dark:bg-[#15291D]'
            } text-neutral-8 font-tooltip flex items-center justify-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold`}
          >
            <span
              className={`size-[7px] rounded-full ${
                item.status === 'Building' ? 'bg-red-700' : 'bg-green-700'
              }`}
            ></span>
            <p>{item.status}</p>
          </div>
          <p className="group hover:text-neutral-6 flex cursor-pointer items-center justify-center gap-1 text-[13px] font-semibold text-neutral-400">
            <div>
              View Details
              <hr className="h-px w-0 transition-all duration-200 ease-in-out group-hover:w-full" />
            </div>
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
