import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";
const Header = () => {
  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavour" />
          <h1 className="app__header-h1">The key to find dining</h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            Consectetur adipisicing elit. Accusantium corrupti, vitae cum ipsa
            totam ex illo at! Ipsa incidunt, repellendus laudantium iste non
            accusamus
          </p>
          <button type="button" className="custom__button">
            Explode Menu
          </button>
        </div>

        <div className="app__wrapper_img">
          <img src={images.welcome} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
