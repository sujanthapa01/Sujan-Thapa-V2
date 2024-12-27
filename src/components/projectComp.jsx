import useFetchGithubRepos from '@/lib/githubApi/github';
import { handleLanguageBadgeColor } from '@/helpers/languagebadgeui';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import { Badge } from '@/components/ui/badge';
import { useMemo } from 'react';

const ProjectComp = ({ maxProjects }) => {
  const { repos, loading } = useFetchGithubRepos('sujanthapa01');
  const limitedProjects = useMemo(() => repos.slice(0, maxProjects), [repos, maxProjects]);
  const { badgeColor } = handleLanguageBadgeColor();

  if (!repos.length && !loading) {
    return <p className="text-center">No projects to display at the moment.</p>;
  }

  return (
    <div>
      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {Array.from({ length: maxProjects }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-transparent border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
            >
              <Skeleton circle={true} height={40} width={40} />
              <Skeleton height={20} width="60%" className="my-3" />
              <Skeleton count={2} height={20} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">

          {limitedProjects.map((repo) => {
            const colors = badgeColor[repo.language?.toLowerCase()] || {
              textColor: 'text-gray-500 dark:text-gray-300',
              bgColor: 'bg-gray-100 dark:bg-gray-800',
            };
            return <ProjectCard key={repo.id} repo={repo} colors={colors} />;
          })}

          {limitedProjects.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              className="rounded-lg border border-slate-200 dark:border-slate-800  dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
            >
              <div className="flex flex-col h-full">
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                      <img
                        alt={repo.name}
                        loading="lazy"
                        width="48"
                        height="48"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full"
                        src={repo.owner.avatar_url}
                        style={{ color: 'transparent' }}
                      />
                    </div>
                  </div>
                </div>
                <h1 className="text-lg font-aspekta font-[650] mb-1">{repo.name}</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{repo.description}</p>
                <div className="flex gap-2 mt-4">
  {repo.language && (
    <div>
      <Badge variant="default" className="text-blue-500 font-normal dark:text-black">
        {repo.language}
      </Badge>
    </div>
  )}
  {repo.open_issues_count? (
    <div>
      <Badge variant="default" className="pr-[4px] text-blue-500 font-normal dark:text-black">
        <span>Issues</span>
        <div className="bg-red-500 text-white px-[5px] rounded-full ml-[8px] ">
          {repo.open_issues_count}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ repo, colors }) => {
  return (
    <a
      href={repo.html_url}
      className="rounded-lg border flex flex-col border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between bg-slate-500 pl-5 pr-5 rounded-t-lg bg-img">
          <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full">
            <img
              alt={repo.name || 'Repository avatar'}
              loading="lazy"
              width="100px"
              height="100px"
              decoding="async"
              className="rounded-full"
              src={repo.owner.avatar_url}
            />
          </div>
        </div>
        <div className="pr-5 pl-5 pb-5 pt-4">
          <h1 className="text-lg font-aspekta font-[650] mb-1">{repo.name}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{repo.description}</p>
          <div className="flex gap-2 mt-4">
            {repo.language && (
              <Badge
                variant="default"
                className={`${colors.textColor} ${colors.bgColor} font-normal px-2 py-[0px]`}
              >
                {repo.language}
              </Badge>
            )}
            {repo.open_issues_count ? (
              <Badge
                variant="default"
                className="pr-[4px] py-[0px] bg-gray-50 text-blue-500 font-normal dark:text-black"
              >
                <span>Issues</span>
                <div className="bg-red-500 text-white px-[5px] rounded-full ml-[8px]">
                  {repo.open_issues_count}
                </div>
              </Badge>
            ) : null}
          </div>
        </div>
      </div>
      <div className="text-sky-500 flex justify-end p-4">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
          <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
        </svg>
      </div>
    </a>
  );
};

ProjectComp.propTypes = {
  maxProjects: PropTypes.number.isRequired,
};

ProjectCard.propTypes = {
  repo: PropTypes.shape({
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
    language: PropTypes.string,
    open_issues_count: PropTypes.number,
  }).isRequired,
  colors: PropTypes.shape({
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
  }).isRequired,
};

export default ProjectComp;
