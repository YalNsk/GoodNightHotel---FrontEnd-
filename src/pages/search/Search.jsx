import React from "react";
import CriteresRecherche from "../../components/Criteres/CriteresRecherche";
import Nav from "../../components/navigation/Nav";
import Pays from "../../components/pays/Pays";

const Search = (props) => {
  return (
    <div>
      <Nav />
      <h2>Choisissez votre destination</h2>
      <Pays />
      <br />
      <CriteresRecherche />
    </div>
  );
};

export default Search;
