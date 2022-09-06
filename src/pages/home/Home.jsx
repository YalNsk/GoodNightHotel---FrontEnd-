import React from "react";
import Nav from "../../components/navigation/Nav";
import Voyage1 from "../../assets/img/voyage01.jpg";

const Home = () => {
  return (
    <div>
      <Nav />
      <img style={{ width: "100vw" }} src={Voyage1} alt="" />
    </div>
  );
};

export default Home;
