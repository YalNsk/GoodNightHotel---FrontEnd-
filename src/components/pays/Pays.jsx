import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Pays = () => {
  const [data, setdata] = useState([]);
  const [selectedRadio, setselectedRadio] = useState();

  const radios = ["Pays-Bas", "Belgique", "Allemagne", "Italie", "France"];
  console.log(selectedRadio);

  const url = "http://localhost:8580/api/hotel/";

  //   appel à l'api
  useEffect(() => {
    axios.get(url).then((res) => setdata(res.data));
  }, []);

  return (
    <div className="lesPays">
      <ul className="radio-container">
        {radios.map((pays) => (
          <li>
            <input
              type="radio"
              id={pays}
              name="paysRadio"
              checked={pays === selectedRadio}
              onChange={(e) => setselectedRadio(e.target.id)}
            />
            <label htmlFor={pays}>{pays}</label>
          </li>
        ))}
      </ul>

      {selectedRadio && (
        <button className="allPays" onClick={() => setselectedRadio("")}>
          Voir tous les pays
        </button>
      )}

      <ul className="containerHotel">
        {data
          .filter((element) => element.adresse.country.includes(selectedRadio))
          .map((element, index) => (
            <>
              <Card key={index} element={element} />
            </>
          ))}
      </ul>
    </div>
  );
};

export default Pays;
