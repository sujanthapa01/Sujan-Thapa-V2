import useFetchGithubRepos from '@/lib/githubApi/github';
import PropTypes from 'prop-types';
import { handleLanguageBadgeColor } from '@/helpers/languagebadgeui';
import ProjectCard from './projectCard';
import Skeleton from 'react-loading-skeleton';

const ProjectComp = ({ maxProjects }) => {
  const { repos, loading } = useFetchGithubRepos("sujanthapa01");
  const limitedProjects = repos.slice(0, maxProjects);
  const { badgeColor } = handleLanguageBadgeColor();

  return (
    <div>
      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
          {Array.from({ length: maxProjects }, (_, index) => (
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
              textColor: "text-gray-500 dark:text-gray-300",
              bgColor: "bg-gray-100 dark:bg-gray-800",
            };

            return <ProjectCard key={repo.id} repo={repo} colors={colors} />;
          })}
        </div>
      )}
    </div>
  );
};

ProjectComp.propTypes = {
  maxProjects: PropTypes.number.isRequired,
};

export default ProjectComp;
