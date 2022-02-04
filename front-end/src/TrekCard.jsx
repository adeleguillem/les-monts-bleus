import React from "react";
import { useEffect, useState } from "react";
import { fetchTreks } from "./Api";

const TrekCard = () => {
  const [trekDetails, setTrekDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTreks()
      .then((trek) => setTrekDetails(trek))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="big-container">
        <div className="card-main-container">
          {loading ? (
            <p>Chargement en cours ...</p>
          ) : (
            trekDetails.map((treks) => (
              <>
                <div className="card-thi-container">
                  <div className="card-pic-container">
                    <img
                      src={treks.cover_pic}
                      className="card-pic"
                      alt={treks.name}
                    />
                  </div>
                  <h1 className="card-title">{treks.name}</h1>
                  <div className="card-tags-container">
                    <div className="card-location">
                      {treks.location} | {treks.country}
                    </div>
                    <div>
                      {treks.time} {treks.time_details}
                    </div><div className="card-difficulty">{treks.drop} km</div>
                    <div className="card-tags">
                      {treks.difficulty < 3 ? (
                        <span className="card-difficulty">Facile</span>
                      ) : treks.difficulty > 6 ? (
                        <span className="card-difficulty">Difficile</span>
                      ) : (
                        <span className="card-difficulty">Intermédiaire</span>
                      )}
                     
                      
                    </div>
                  </div>
                </div>
              </>
            ))
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default TrekCard;
