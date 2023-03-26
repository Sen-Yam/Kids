import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../style/Header.scss";
import logo from "../asset/logo.jpg";

const Header = () => {
  return (
    <header className="navigation">
      <div className="containerHeder">
        <Link to="/" aria-label="accueil">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <nav className="containerNav">
          <div className="containerLink">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/"
            >
              <li> Accueil</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/jouets"
            >
              <li>Jouets</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/promos"
            >
              <li>Promotions</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link link-actif" : "link"
              }
              end
              to="/contact"
            >
              <li>Contact </li>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
