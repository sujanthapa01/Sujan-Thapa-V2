// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import  useAuthenticatedFetch from '../Hooks/AuthHook'

const Dashboard = () => {
  const { data, loading, error } = useAuthenticatedFetch('http://localhost:7000/protected-route');
console.log(data)
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : (
        <div>
          <h2>Data from server:</h2>
          <pre>{JSON.stringify(data. null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;