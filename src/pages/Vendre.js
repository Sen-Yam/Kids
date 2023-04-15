import React, { useState, useEffect } from "react";
import BannerJouets from "../components/BannerJouets";
import "../style/Jouets.css";
import {products} from "../Vente"
const Vendre = () => {
  document.title = "jouets!";
 
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products)
},);

  return (
    <div className="jouet">
      <BannerJouets />
      <h1 className="jouetTitle">Les articles jouets par tranche d'age</h1>
      <p className="jouetText">Des joués pour vos enfants</p>
      <div className="jeux" >
    
      {data &&
        data.map((item, k) =><div className="element" key={k}>
          <p>{item.prix}</p>
          <img className="img"   src={item.image} alt="voiture" />


        </div>)  }

     </div>
     </div>
  );
};

export default Vendre;
