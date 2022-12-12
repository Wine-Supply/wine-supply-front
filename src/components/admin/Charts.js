import { useState } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart'

const UserData = [
  {
    id: 1,
    year: 2018,
    userGain: 280,
    userLost: 50.
  },
  {
    id: 2,
    year: 2019,
    userGain: 480,
    userLost: 100.
  },
  {
    id: 3,
    year: 2020,
    userGain: 980,
    userLost: 350.
  },
  {
    id: 4,
    year: 2021,
    userGain: 1080,
    userLost: 250.
  },
  {
    id: 5,
    year: 2022,
    userGain: 1280,
    userLost: 550.
  },
  
]

function Charts() {
  const[userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
      label: 'Users Gain',
      data: UserData.map((data) => data.userLost),
      backgroundColor:['#7A000D','#474540'],
      borderColor:'black',
      borderWidth: '2',
    },
  ],});

  return (
    <div>
      <div style= {{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style= {{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default Charts;