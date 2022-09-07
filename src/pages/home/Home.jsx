import React from "react";
import Nav from "../../components/navigation/Nav";
import Voyage4 from "../../assets/img/voyage04.jpg";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="accroche">
        <h3 className="desti">5 destinations</h3>
        <h3 className="etoiles">
          5 étoiles <span>★★★★★</span>
        </h3>
        <h3 className="dev">5 développeurs Web</h3>
      </div>
      <img
        className="photoFond"
        style={{ width: "100vw" }}
        src={Voyage4}
        alt=""
      />
    </div>
  );
};

export default Home;
