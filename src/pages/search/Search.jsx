import React from "react";
import CriteresRecherche from "../../components/Criteres/CriteresRecherche";
import Nav from "../../components/navigation/Nav";
import Pays from "../../components/pays/Pays";

const Search = (props) => {
  return (
    <div>
      <Nav />
      <br />
      <h2>Choisissez votre destination</h2>
      <Pays />
      <br />
      <h2>Affinez votre choix</h2>
      <br />
      <CriteresRecherche />
    </div>
  );
};

export default Search;
