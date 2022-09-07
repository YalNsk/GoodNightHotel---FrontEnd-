import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Pays = () => {
  const [data, setdata] = useState([]);
  const [selectedRadio, setselectedRadio] = useState(0);

  const radios = ["Italie", "France", "Espagne", "Portugal", "Suisse"];
  console.log(selectedRadio);

  //   const url = "https://api.thecatapi.com/v1/images/search?limit=9";
  const url = "http://localhost:8580/api/hotel/";

  //   appel à l'api
  useEffect(() => {
    axios.get(url).then((res) => setdata(res.data));
  }, []);

  console.log(data[0]);

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

      <ul className="containerChats">
        {data
          //   .filter((element) => element.pays[0].includes(selectedRadio))
          .map((element, index) => (
            <>
              <Card />
              <h2>{element.adresse.country}</h2>
              <p>{element.name}</p>
            </>
          ))}
      </ul>
      <div className="container-Card">{/* <Card /> */}</div>
    </div>
  );
};

export default Pays;
