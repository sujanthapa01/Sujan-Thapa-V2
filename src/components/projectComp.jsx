import React, { Component, useEffect, useState } from "react";

function ProjectComp({ maxProjects }) {
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.error("Error caught by error boundary:", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <div>Something went wrong.</div>;
      }

      return this.props.children;
    }
  }

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('githubRepos');
    if (cachedData) {
      setRepos(JSON.parse(cachedData));
      setLoading(false);
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/sujanthapa01/repos');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      setRepos(json);
      setLoading(false);
      localStorage.setItem('githubRepos', JSON.stringify(json));
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const limitedProjects = repos.slice(0, maxProjects);

  return (
    <div>
      <ErrorBoundary>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
            {limitedProjects.map(repo => (
              <a
                key={repo.id}
                href={repo.html_url}
                className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
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
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <h1 className="text-lg font-aspekta font-[650] mb-1">{repo.name}</h1>
                  <div > </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    {repo.description}
                  </p>

                </div>
                <div className="text-sky-500 flex justify-end">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                  >
                    <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
}

export default ProjectComp;
