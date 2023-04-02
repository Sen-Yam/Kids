import React from "react";
import BannerJouets from "../components/BannerJouets";
import "../style/Jouets.scss";
const Jouets = () => {
  return (
    <div className="jouet">
      <BannerJouets />
      <h1 className="jouetTitle">Les articles jouets par tranche d'age</h1>
      <p className="jouetText">
        Des très beau joués pour vos enfants à des prix très abordables
      </p>
    </div>
  );
};

export default Jouets;
