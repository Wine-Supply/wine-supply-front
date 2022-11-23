import React from "react";
import { Link } from "react-router-dom";
import { SectionStyled } from "./SectionStyled";
import baner1 from "../../images/banner1.png";
import baner2 from "../../images/banner2.png";

const BanerSection = () => {
  return (
    <SectionStyled>
      <div className="baner-container explore-baner">
        <img
          className="section-img explore-img"
          src={baner1}
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
        <img className="section-img" src={baner2} alt="Bottles of wine" />
      </div>
    </SectionStyled>
  );
};

export default BanerSection;
