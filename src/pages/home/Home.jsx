import React from "react";
import Nav from "../../components/navigation/Nav";
import Voyage4 from "../../assets/img/voyage04.jpg";

const Home = () => {
  return (
    <div>
      <Nav />
      <img style={{ width: "100vw" }} src={Voyage4} alt="" />
    </div>
  );
};

export default Home;
