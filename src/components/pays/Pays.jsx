import { useState } from "react";
import Card from "../Card/Card";
// import axios from "axios";

const Pays = () => {
  //   const [data, setdata] = useState([]);
  const [selectedRadio, setselectedRadio] = useState();

  const radios = ["Italie", "France", "Espagne", "Portugal", "Suisse"];
  console.log(selectedRadio);

  //appel à l'api
  //   useEffect(() => {
  //     axios.get("").then((res) => setdata(res.data));
  //   }, []);

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

      {/* <ul>
        {data
          .filter((element) => element.pays[0].includes(selectedRadio))
          .map((pays, index) => (
            <Card key={index} pays={pays} />
          ))}
      </ul> */}
      <div className="container-Card">{/* <Card /> */}</div>
    </div>
  );
};

export default Pays;
