import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/GoodNightHotel.png";

const Nav = () => {
  return (
    <div className="navi">
      <Link className="logo" to="/">
        <img src={logo} alt="" />
      </Link>

      <ul className="pages">
        <NavLink
          className={(nav) => (nav.isActive ? "active" : "")}
          to="/admin"
        >
          <li>Admin</li>
        </NavLink>

        <NavLink
          className={(nav) => (nav.isActive ? "active" : "")}
          to="/login"
        >
          <li>Se connecter</li>
        </NavLink>

        <NavLink
          className={(nav) => (nav.isActive ? "active" : "")}
          to="/reservation"
        >
          <li>Réservation</li>
        </NavLink>
        <NavLink
          className={(nav) => (nav.isActive ? "active" : "")}
          to="/search"
        >
          <li>Recherche</li>
        </NavLink>
      </ul>

      {/* <SearchBar placeholder="Recherche pays" /> */}

      {/* <div className="containerButton">
        <button type="button">S'inscrire</button>
        <button type="button">Se connecter</button>
      </div> */}
    </div>
  );
};

export default Nav;
