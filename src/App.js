import "./index.css";
import React, { useEffect, useState } from "react";
function App() {
  const [fetchedCaptain, setCaptainName] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiQU5HRUxPVEFYIiwidmVyc2lvbiI6InYyIiwicmVzZXRfZGF0ZSI6IjIwMjMtMDctMjkiLCJpYXQiOjE2OTExMzcxMzEsInN1YiI6ImFnZW50LXRva2VuIn0.EvMJOtAfd74YNGG2GISfYfowLK-FuCfOO65u65uVpLBGm7LiYMWg5xrJlsJQMCvB9jUF6hrMndOjKHfhybralN853-BOniSdQTMzNDYnKwKyLyBz_19mngDdOT1yDFSjFWwtbq6_imWtvSQxzzCywEGLFG9PxaAunFsud2348AdcLNnNMi7NMRPoiGgw5lgHnvfpTE-oqJdMtYRT6w42FFaVWZ2U1BfwpjwEF3J64T0bfO0HutnnH8sxhoEx1NMTVwSCw5DJumnqGpRktRW1D_WvupQ7dZd13DM9lLi2dUTDlYPTlC7foS-WERemFBDbxO0m2iLRnH5lMYU8SY1L8Q",
      },
    };
    fetch("https://api.spacetraders.io/v2/my/agent", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((response) => {
        const fetchedData = response.results;
        console.log(fetchedData);
      })
      .catch((err) => console.error(err));
  }, [fetchedData, fetchedCaptain]);

  return (
    <div>
      <Dashboard
        fetchedCaptain={fetchedCaptain}
        fetchedData={fetchedData}
        setCaptainName={setCaptainName}
      />
    </div>
  );
}

function Dashboard({ fetchedData, fetchedCaptain }) {
  const helloCaptainName = fetchedCaptain;

  return <div>{`<p>Hello ${fetchedCaptain}</p>`}</div>;
}
export default App;
