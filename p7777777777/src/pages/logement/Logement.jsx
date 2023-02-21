

import './logement.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collaspe';
import Carousel from "../../components/carousel/Carousel"
import greyStar from '../../assets/etoile.png';
import redStar from '../../assets/etoile2.png';
import data from '../../data/data'



export default function Logement() {
  const { id } = useParams();
  
  const [dataLoaded, setDataLoaded] = useState(false);
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const property = data.find((property) => property.id === id);
    if (property) {
      setPropertyData(property);
      setDataLoaded(true);
    } else {
      window.location.href = '/404/id:'; // Redirige vers la page d'erreur 404
    }
  }, [id, history]);

  if (!dataLoaded) {
    return <div>Chargement en cours...</div>;
  }

  const { title, location, tags, host, rating, description, equipments, pictures } = propertyData;
  const { name, picture } = host;
  const [firstName, lastName] = name.split(' ');


  return (
    <>
      <Header />
      <Carousel imageSlider={pictures} />
      <main className="Logement">
        <div className="Logement_contenu">
          <div className="Logement_contenu_description">
            <h1>{title}</h1>
            <p>{location}</p>
            <div>
              {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="Logement_contenu_infos">
            <div>
              <div className="Logement_contenu_infos_nom">
                <span>{firstName}</span>
                <span>{lastName}</span>
              </div>
              <img src={picture} alt={`... (${name})`} />
            </div>

            <div className="etoile">
         {Array.from({ length: 5 }, (_, index) => (
                <img
                  key={index}
                  src={index < rating ? redStar : greyStar}
                  alt={`${index < rating ? 'Red' : 'Grey'} star`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="Logement_collapse">
          <div className="Logement_collapse_item">
            <Collapse title="description" content={description} />
          </div>
          <div className="Logement_collapse_item">
            <Collapse title="Équipements" content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

