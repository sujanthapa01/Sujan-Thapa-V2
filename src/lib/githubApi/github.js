import { useState, useEffect } from 'react';

const useFetchGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(`${username}_githubRepos`);
        if (cachedData) {
          setRepos(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await fetch(`https://api.github.com/users/${username}/repos`);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const json = await response.json();
          setRepos(json);
          localStorage.setItem(`${username}_githubRepos`, JSON.stringify(json));
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { repos, loading, error };
};

export default useFetchGithubRepos;
