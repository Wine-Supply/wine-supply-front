import React from "react";
import { Link } from "react-router-dom";
import { SectionStyled } from "./SectionStyled";
import { ButtonSubscribe } from "../../utils/utils";
import baner1 from "../../../images/banner1.png";
import baner2 from "../../../images/banner2.png";
import baner1b from "../../../images/banner1-light.png";
import baner2b from "../../../images/banner2-light.png";
import baner1c from "../../../images/banner1-neutro.png";
import baner2c from "../../../images/banner2-neutro.png";

const BanerSection = () => {
  return (
    <SectionStyled>
      <div className="baner-container explore-baner">
        <img
          className="section-img explore-img"
          src={baner1c}
          //src={baner1b}
          alt="Wine bottle pouring into a glass"
        />
        <div className="explore-baner-info">
          <h1 className="main-heading">EXPLORE OUR WINES</h1>
          <ul className="wine-types">
            <li className="wine-type">
              <Link className="wine-link" to="">
                RED
              </Link>
            </li>
            <li className="wine-type">
              <Link className="wine-link" to="">
                WHITE
              </Link>
            </li>
            <li className="wine-type">
              <Link className="wine-link" to="">
                SPARKLING
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="baner-container club-baner">
        <img 
          className="section-img" 
          src={baner2c}
          //src={baner2b}
          alt="Bottles of wine" 
        />
        <ButtonSubscribe className="sub-btn"><Link className="no-style" to="/WineClubp">SUBSCRIBE</Link></ButtonSubscribe>
      </div>
    </SectionStyled>
  );
};

export default BanerSection;
