import React from "react";
import { useEffect, useState } from "react";
import { fetchTrekDetails } from "./Api";

const TrekDetails = ({trek_id}) => {
  const [trekDetails, setTrekDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrekDetails((trek_id))
      .then((trek) => setTrekDetails(trek))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);



//   async function onTrekSelected(trek) {
//     setSelectedTrek(trek);
//     setSelectedTrekDetails([]);

//     setSelectedTrekDetails(
//       await fetchTrekDetails(trek.trek_id)
//     );
//   }

  return (
    <div>
        
      <div className="details-cover-bg">
        {loading ? (
          <p>Chargement en cours ...</p>
        ) : (
            
          <>
            <h1 className="details-cover-title">Titre de la rando</h1>
            <div className="details-title">Infos sur le trek :</div>
            <div className="details-description">
              Un trke sur 4 jours, entre la France et l'Espagne, a faire
              en bivouac
            </div>
            <div className="details-container">
              <span className="details-infos">
                <ul>
                  <li>Région / Pays</li>
                  <li>temps</li>
                  <li>nombre km</li>
                  <li>difficulté</li>
                </ul>
              </span>
              <span className="details-map">
                <img
                  src="https://www.komar.de/fr/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-050_worldmap_neu_ma_1.jpg"
                  alt=""
                />
              </span>
            </div>
            <div className="details-link">
              <a href="https://www.visorando.com/randonnee-de-cailhol-vers-saint-jean-de-minervois-/">
                Lien vers Visorando
              </a>
            </div>
            {trekDetails.map((treks) => (
            <>
              <div className="details-photos-container">
                <div className="details-photos">
                  <img
                    src={treks.pic_link}
                    className="card-pic"
                    alt={treks.title}
                  />
                </div>
              </div>
            </>
            ))}
           
          </>
        )}
      </div>
    </div>
  );
};

export default TrekDetails;
