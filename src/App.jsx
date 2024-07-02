import { useEffect, useState } from 'react'
import './App.css'
import DriversCard from './DriversCard';
import NavBar from './NavBar';

function App() {
  let [driversData, setDriversData] = useState([]);
  let [driversData2, setDriversData2] = useState([]);
  let [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://ergast.com/api/f1/current/driverStandings.json');
        const response2 = await fetch ('https://api.openf1.org/v1/drivers?session_key=latest');
        let driversInfo = await response.json();
        let driversInfo2 = await response2.json();
        // console.log(driversInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        setDriversData(driversInfo.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        setDriversData2(driversInfo2)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
    }

  }
  fetchData();
}, [])




if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
if (driversData.length === 0) return <p>No data available</p>;

  return (
    <>
      <NavBar />
      <h1>Drivers</h1>
      <div className='driver-card-container'>
          <DriversCard data={driversData} data2={driversData2}/>
      </div>

    </>
  )
}

export default App
