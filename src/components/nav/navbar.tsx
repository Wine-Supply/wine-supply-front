import { useState } from "react";
import { NavbarStyled } from "./NavbarStyled";
import { BurguerButtonStyled } from "./BurguerButtonStyled";
import logo from "../../images/logo.svg";
import BurguerButton from "./BurguerButton";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

//

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <NavbarStyled>
      <div>
        <img className={"logo"} src={logo} alt="ws" />
        <Link className={"link"} to="/">
          <h2>WINES SUPPLY</h2>
        </Link>
      </div>
      <nav className={`links ${clicked ? "active" : ""}`}>
        <ul>
          <li>
            <Link className={"link"} to="/WineClubp">
              The Club
            </Link>
          </li>
          <li>
            <Link className={"link"} to="/home/products">
              Shop
            </Link>
          </li>
          <li>
            <Link className={"link"} to="/home/products">
              <ShoppingCartOutlined />
            </Link>
          </li>
          <li>
            <Link className={"link"} to="/admin">
              <UserOutlined />
            </Link>
          </li>

          <li>
            <Link className={"link"} to="/home/products">
              <SearchOutlined />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClicked} />
      </div>
      <BurguerButtonStyled
        className={`initial ${clicked ? " active" : ""}`}
      ></BurguerButtonStyled>
    </NavbarStyled>
  );
}
