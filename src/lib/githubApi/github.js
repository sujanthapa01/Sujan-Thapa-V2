import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchGithubData = (username, type = 'repos') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cacheKey = `${username}_github${type === 'repos' ? 'Repos' : 'Profile'}`;
        const cachedData = localStorage.getItem(cacheKey);

        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const url =
            type === 'repos'
              ? `https://api.github.com/users/${username}/repos`
              : `https://api.github.com/users/${username}`;

          const response = await axios.get(url);

          setData(response.data);
          localStorage.setItem(cacheKey, JSON.stringify(response.data));
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [username, type]);

  return { data, loading, error };
};

export default useFetchGithubData;
