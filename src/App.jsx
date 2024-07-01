import { useEffect, useState } from 'react'
import './App.css'
import DriversCard from './DriversCard';
import NavBar from './NavBar';

function App() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  fetch("https://api.openf1.org/v1/drivers?session_key=latest")
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    return res.json();
  })
  .then(data => {
    setData(data);
    setLoading(false);
  })
  .catch(error => {
    setError(error);
    setLoading(false);
  })
}, [])

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
if (data.length === 0) return <p>No data available</p>;

  return (
    <>
      <NavBar />
      <h1>Drivers</h1>
      <div className='driver-card-container'>
        {data.map((driver) => (
          <DriversCard key={driver.driver_id} data={driver}/>
        ))}
      </div>

    </>
  )
}

export default App
