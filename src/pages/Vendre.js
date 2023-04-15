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
  /*
  useEffect(() => {
    fetch("../vente.json")
      .then((res) => res.json())
      .then((jeux) => setData(jeux))
      .catch((error) => console.error(error));
    console.log(data);
  }, []); */
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
