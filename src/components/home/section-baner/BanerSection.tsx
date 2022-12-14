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
import { useDispatch } from "react-redux";
import { filterByQuery } from "../../../redux/action-creators";
import { Dispatch } from "redux";

const BanerSection = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const handleClick = (e: React.BaseSyntheticEvent) => {
    const target = e.target.innerHTML;
    dispatch(filterByQuery(`type=${target.toLowerCase()}&isActive=true`));
  };

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
          <ul onClick={(e) => handleClick(e)} className="wine-types">
            <li className="wine-type">
              <Link className="wine-link" to="/home/products">
                RED
              </Link>
            </li>
            <li className="wine-type">
              <Link className="wine-link" to="/home/products">
                WHITE
              </Link>
            </li>
            <li className="wine-type">
              <Link className="wine-link" to="/home/products">
                ROSE
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
        <Link className="no-style" to="/WineClubp">
          <ButtonSubscribe className="sub-btn">SUBSCRIBE</ButtonSubscribe>
        </Link>
      </div>
    </SectionStyled>
  );
};

export default BanerSection;
