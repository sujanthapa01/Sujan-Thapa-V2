import  useAuthenticatedFetch from '../Hooks/AuthHook'

const Dashboard = () => {
  const { data, loading, error } = useAuthenticatedFetch('http://localhost:7000/protected-route');
  try{
    console.log('reponse data',data)
  }catch(error){
    console.error(error)
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : (
        <div>
          <h2>Data from server:</h2>
          <pre>{JSON.stringify(data.user.name)}</pre>
        </div>
      )}
    </div>
  );
};

export default Dashboard;