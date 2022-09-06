import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
  return (
    <div className="navi">
      <NavLink className="logo" to="/">
        <h1>Logo</h1>
      </NavLink>

      <ul className="pages">
        <NavLink
          className={(nav) => (nav.isActive ? "active" : "")}
          to="/admin"
        >
          <li>Admin</li>
        </NavLink>

        <NavLink
          className={(nav) => (nav.isActive ? "active" : "")}
          to="/loginRegister"
        >
          <li>Se connecter</li>
        </NavLink>

        <NavLink
          className={(nav) => (nav.isActive ? "active" : "")}
          to="/reservation"
        >
          <li>Réservation</li>
        </NavLink>
      </ul>

      <SearchBar placeholder="Recherche pays" />

      {/* <div className="containerButton">
        <button type="button">S'inscrire</button>
        <button type="button">Se connecter</button>
      </div> */}
    </div>
  );
};

export default Nav;
