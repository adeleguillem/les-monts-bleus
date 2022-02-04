import React from "react";
import "./App";
import "./App.css";
import TrekCard from "./TrekCard";



function App() {


  return (

    
    <div className="App">
      <div className="cover-bg">
        <h1 className="cover-title">Les Monts Bleus</h1>
      </div>
      <div className="all-treks">Tous les treks</div>
      <div className="trekcards-container">
          {" "}
          <TrekCard />
        </div>
        </div>
  );
}

export default App;
