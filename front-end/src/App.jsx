import React from "react";import "./App";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState,useEffect } from "react";

import TrekCard from "./TrekCard";
import TrekDetails from "./TrekDetails";
import { fetchTrekDetails} from "./Api";
import { fetchTreks } from "./Api";

function App() {
  const [trekDetails, setTrekDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTrek, setSelectedTrek] = useState();
  const [selectedTrekDetails, setSelectedTrekDetails] = useState(
    []
  );

  // useEffect(() => {
  //   fetchTrekDetails((treks))
  //     .then((trek) => setTrekDetails(trek))
  //     .catch((e) => console.log(e))
  //     .finally(() => setLoading(false));
  // }, []);



  useEffect(() => {
    fetchTreks()
      .then((trek) => setTrekDetails(trek))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  console.log(trekDetails);

  async function onTrekSelected(treks) {
    setSelectedTrek(treks);
    setSelectedTrekDetails([]);

    setSelectedTrekDetails(
      await fetchTrekDetails(treks.id)
    );
  }

  console.log(selectedTrekDetails);

  return (
    <><div className="App">
    <div className="card-container">
      <>
      {selectedTrek && (
        <TrekDetails
          {...selectedTrek}
          details={selectedTrekDetails}
          onClose={() => setSelectedTrek()} />

      )}</></div>



          <div className="cover-bg">
            <h1 className="cover-title">Les Monts Bleus</h1>
          </div>
          <div className="all-treks">Tous les treks</div>
          <div className="card-container">
          {trekDetails && (
          <div className="trekcards-container-bis">
      {" "}
      {trekDetails.map((treks) => (
     <TrekCard
      key={treks.id}
      {...treks}
              onClick={() => onTrekSelected(treks) }
            />))}

    </div>)}</div>
      
    
    <>
        <Router>
          <Routes>
            <Route exact path="/api/treks/:trekId" element={<TrekDetails />} />
          </Routes>
        </Router>
      </>
    
      
      </div>
      </>
  );
}

export default App;
