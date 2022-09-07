import { useEffect, useState } from "react";
import axios from "axios";

const Pays = () => {
  const [data, setdata] = useState([]);
  const [currentPage, setcurrentPage] = useState();
  const [selectedRadio, setselectedRadio] = useState(0);

  const radios = ["Italie", "France", "Espagne", "Portugal", "Suisse"];
  console.log(selectedRadio);

  //   const url = "https://api.thecatapi.com/v1/images/search?limit=9";
  const url =
    "https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=beng&api_key=live_UIPyUr8ihcOxA4mjkzGFRyD7qitvWaUzQh6vqc8MS6H7MWjo44cdMmw74pUCRCAu'";

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
            <img
              className="pictureChat"
              key={index}
              //   style={{ height: "300px" }}
              src={element.url}
              alt="chat"
            />
          ))}
      </ul>
      <div className="container-Card">{/* <Card /> */}</div>
    </div>
  );
};

export default Pays;
