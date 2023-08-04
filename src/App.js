import './index.css';
import React, { useEffect, useState } from 'react';
import './register';

function App() {
  const [authorization, setAuthorization] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [captainName, setCaptainName] = useState('');
  const [credits, setCredits] = useState(0);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: '',
      },
    };
    fetch('https://api.spacetraders.io/v2/my/agent', options)
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data;
        setCaptainName(fetchedData.data.symbol);
        setLocation(fetchedData.data.headquarters);
        setCredits(fetchedData.data.credits);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="game-container">
      <div id="dashboard" className="dashboard">
        <Dashboard
          captainName={captainName}
          fetchedData={fetchedData}
          credits={credits}
          location={location}
        />
        {/* <Register /> */}
      </div>
    </div>
  );
}

function Dashboard({ captainName, fetchedData, location, credits }) {
  return (
    <div>
      <h2>Hello Captain {captainName} </h2>
      <p>
        You are actually in the sector {location} and you have {credits} credits
        available.
      </p>
    </div>
  );
}

export default App;
