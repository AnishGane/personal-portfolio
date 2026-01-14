import Button from '@/components/Button';
import { ProjectItem } from '@/components/constant/Data';
import { WebsiteDemo } from '@/components/icons/all-icons';
import type { ProjectItemProps } from '@/types';
import { slugify } from '@/utils/helper';
import { Github, Undo2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [projectContent, setProjectContent] = useState<ProjectItemProps | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<ProjectItemProps[]>([]);

  useEffect(() => {
    if (!name) return;

    const project = ProjectItem.find((item: ProjectItemProps) => slugify(item.name) === name);
    setProjectContent(project ?? null);

    const related = ProjectItem.filter(
      (item) => item.Role === project?.Role && item.name !== project?.name
    );
    setRelatedProjects(related);
  }, [name]);

  if (!projectContent) {
    return <div className="mt-14">Project not found</div>;
  }

  const allTechStack = projectContent?.technologies?.flatMap((category) => category.stack) ?? [];
  const visibleTech = allTechStack.slice(0, 3);
  const remainingTechCount = allTechStack.length - visibleTech.length;

  const currentIndex = ProjectItem.findIndex((item) => item.name === projectContent.name);

  const prevProject = currentIndex > 0 ? ProjectItem[currentIndex - 1] : null;

  const nextProject = currentIndex < ProjectItem.length - 1 ? ProjectItem[currentIndex + 1] : null;

  return (
    <div className="mt-4 md:mt-10">
      <Button
        text="Back to Projects"
        icon={<Undo2 size={18} />}
        href="/projects"
        variant="secondary"
      />

      <div className="text-neutral-8 font-tooltip mt-8 md:mt-14">
        <img
          src="/Images/First.jpg"
          alt={projectContent.name}
          className="h-[460px] w-full rounded-lg object-cover"
          loading='lazy'
        />

        <div className="mt-4 flex items-center gap-4 md:mt-8">
          <span className="rounded-md bg-black px-1.5 py-[3px] text-xs font-medium text-white md:text-sm dark:bg-white dark:text-black">
            {projectContent.status === 'Working' ? 'Completed' : projectContent.status}
          </span>

          <div className="flex items-center gap-2">
            {visibleTech.map((tech, index) => (
              <TechSpan key={index + 1} item={tech.label} />
            ))}

            {remainingTechCount > 0 && <TechSpan item={`+${remainingTechCount} more`} />}
          </div>
        </div>

        <h1 className="my-4 text-3xl font-medium md:text-5xl">{projectContent.name}</h1>
        <p className="text-neutral-6 text-sm leading-[23px] tracking-wide md:text-base md:leading-6.5">
          {projectContent.description}
        </p>

        <div className="ring-neutral-6/30 my-4 grid w-full grid-cols-4 justify-items-start rounded-xl bg-neutral-300/10 p-4 text-left text-sm shadow-md ring-1">
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-medium text-neutral-500 dark:text-neutral-400">Timeline</h5>
            <p className="text-neutral-8">{projectContent.timeline}</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-medium text-neutral-500 dark:text-neutral-400">Role</h5>
            <p className="text-neutral-8">{projectContent.Role}</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-medium text-neutral-500 dark:text-neutral-400">Team</h5>
            <p className="text-neutral-8">{projectContent.Team}</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-medium text-neutral-500 dark:text-neutral-400">Status</h5>
            <p className="mt-px rounded-md bg-black px-1.5 py-[3px] text-xs font-medium text-white dark:bg-white dark:text-black">
              {projectContent.status === 'Working' ? 'Completed' : projectContent.status}
            </p>
          </div>
        </div>

        <div className="my-5 flex items-center gap-4">
          <Button
            icon={<WebsiteDemo className="size-[18px] text-white/80 dark:text-black/80" />}
            text="Live Demo"
            variant="primary"
            target="_blank"
            href={projectContent.url}
          />
          <Button
            icon={<Github className="size-[18px] text-black/80 dark:text-white/80" />}
            text="Source Code"
            variant="secondary"
            target="_blank"
            href={projectContent.repoLink}
          />
        </div>

        <hr className="border-px border-neutral-6/40 my-7 w-full" />

        <div className="tracking-wide">
          <div className="mb-6 text-[26px] leading-8.5 font-semibold md:mb-8 md:text-[34px] md:leading-10">
            <AppendHashtag leftOffset={24}>
              <h2>{projectContent.subName}</h2>
            </AppendHashtag>
          </div>

          <div className="mb-8">
            <AppendHashtag NoOfHash={2} className="mb-1.5 text-2xl font-medium md:mb-5 md:text-3xl">
              <h3>Overview</h3>
            </AppendHashtag>
            <p className="text-neutral-6 text-sm leading-6 font-light md:text-[15px]">
              {projectContent.itemData.Overview}
            </p>
          </div>

          {projectContent.itemData.Features && projectContent?.itemData?.Features.length > 0 && (
            <>
              <div className="mb-8">
                <AppendHashtag
                  NoOfHash={2}
                  className="mb-1.5 text-2xl font-medium md:mb-5 md:text-3xl"
                >
                  <h3>Features</h3>
                </AppendHashtag>
                <ul className="mx-10 list-disc">
                  {projectContent.itemData.Features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          <div className="mb-8">
            <AppendHashtag NoOfHash={2} className="mb-1.5 text-2xl font-medium md:mb-5 md:text-3xl">
              <h3>Why I Built This</h3>
            </AppendHashtag>

            {Array.isArray(projectContent.itemData.ProblemStatement) &&
            projectContent.itemData.ProblemStatement.length > 1 ? (
              <ul className="mx-10 list-disc">
                {projectContent.itemData.ProblemStatement.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-neutral-6 text-[15px] leading-6 font-light">
                {projectContent.itemData.ProblemStatement}
              </p>
            )}
          </div>

          <div className="mb-8">
            <AppendHashtag NoOfHash={2} className="mb-1 text-2xl font-medium md:mb-3 md:text-3xl">
              <h3>Tech Stack</h3>
            </AppendHashtag>

            {projectContent.technologies.map((category, index) => (
              <div key={index} className="mb-4 ml-4">
                {/* Category title */}
                <AppendHashtag NoOfHash={3} leftOffset={34}>
                  <h4 className="text-lg font-medium">{category.category}</h4>
                </AppendHashtag>

                {/* Stack items */}
                <ul className="mx-10 list-inside list-disc">
                  {category.stack.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <span>{tech.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <AppendHashtag NoOfHash={2} className="mb-1.5 text-2xl font-medium md:mb-5 md:text-3xl">
              <h3>Future Plans</h3>
            </AppendHashtag>
            <ul className="mx-10 list-disc">
              {projectContent.itemData.FuturePlan.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {/* Previous Project */}
            {prevProject ? (
              <Button
                fullWidth
                variant="secondary"
                text={` ${prevProject.name}`}
                href={`/projects/${slugify(prevProject.name)}`}
                className="justify-start"
                label="Previous Project"
              />
            ) : (
              <span />
            )}

            {/* Next Project */}
            {nextProject && (
              <Button
                variant="secondary"
                text={`${nextProject.name}`}
                href={`/projects/${slugify(nextProject.name)}`}
                className="justify-end text-right"
                label="Next Project"
              />
            )}
          </div>

          <hr className="border-px border-neutral-6/40 my-10 w-full" />

          <div>
            <h2 className="mb-1.5 text-xl font-medium md:mb-5 md:text-2xl">Related Projects</h2>
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedProjects.length > 0 ? (
                relatedProjects.slice(0, 2).map((item) => (
                  <Link
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                      })
                    }
                    to={`/projects/${slugify(item.name)}`}
                    key={item.id}
                    className="rounded-xl border border-neutral-400/40 p-4"
                  >
                    <div className="mb-4 flex flex-col items-start justify-between gap-1.5 md:flex-row md:items-center">
                      <h4 className="text-xl leading-6.5 font-medium">{item.name}</h4>
                      <span
                        className={`${item.status === 'Working' ? 'bg-[#E5FAEE] dark:bg-[#15291D]' : 'bg-[#FEE9EA] dark:bg-[#2E191A]'} rounded-md px-1.5 py-1 text-[11px]`}
                      >
                        {item.status === 'Working' ? 'Completed' : item.status}
                      </span>
                    </div>
                    <p className="text-neutral-6 line-clamp-3 text-xs leading-4.5">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      {visibleTech.map((item) => (
                        <TechSpan key={item.label} item={item.label} />
                      ))}
                      {remainingTechCount > 0 && (
                        <TechSpan key={remainingTechCount} item={`+${remainingTechCount} more`} />
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-neutral-6 col-span-3">No related projects</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const TechSpan = ({ item }: { item: string }) => {
  return (
    <span className="ring-neutral-6/40 rounded-md px-1.5 py-0.5 text-[10px] tracking-wide ring-1 md:text-xs">
      {item}
    </span>
  );
};

const AppendHashtag = ({
  children,
  className = '',
  NoOfHash = 1,
  leftOffset,
}: {
  children: React.ReactNode;
  className?: string;
  NoOfHash?: number;
  leftOffset?: number;
}) => {
  return (
    <div className={`group relative flex w-fit items-start focus-within:outline-none ${className}`}>
      <span
        aria-hidden="true"
        style={{ left: `-${leftOffset ?? 40}px` }}
        className={`absolute font-bold text-neutral-400 opacity-0 transition-all duration-200 ease-in-out select-none group-focus-within:opacity-100 group-hover:opacity-100`}
      >
        {'#'.repeat(NoOfHash)}
      </span>
      {children}
    </div>
  );
};

export default ProjectDetails;
