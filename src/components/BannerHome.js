import React from "react";
import bannerHome from "../asset/imgBannerHome.avif";

import "../style/BannerHome.scss";

const BannerHome = ({ children }) => {
  return (
    <>
      <div className="bannerHome">
        <img src={bannerHome} alt="bannière" />
        {children}
      </div>
    </>
  );
};

export default BannerHome;
