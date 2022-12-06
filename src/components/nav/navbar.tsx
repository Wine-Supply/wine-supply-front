import { useState } from "react";
import { NavbarStyled } from "./NavbarStyled";
import { BurguerButtonStyled } from "./BurguerButtonStyled";
import logo from "../../images/logo.svg";
import BurguerButton from "./BurguerButton";
import {
  ShoppingCartOutlined,
  IdcardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { openCart } from "../../redux/action-creators";
import DarkMode from "../dark-mode/darkmode";

const Navbar= () =>{
  let dispatch:Dispatch<any> = useDispatch()

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
            <Link className={"link line"} to="/WineClubp">
              The Club
            </Link>
          </li>
          <li>
            <Link className={"link line"} to="/home/products">
              Shop
            </Link>
          </li>
          <li>
            <div className={"link line"} onClick={()=>{dispatch(openCart())}}>
              <ShoppingCartOutlined />
            </div>
          </li>
          <li>
            <Link className={"link line"} to="/login">
              <UserOutlined />
            </Link>
          </li>
          <li>
            <Link className={"link line"} to="/admin">
            <IdcardOutlined />
            </Link>
          </li>
        </ul>
      </nav>
      <DarkMode/>
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClicked} />
      </div>
      <BurguerButtonStyled
        className={`initial ${clicked ? " active" : ""}`}
      ></BurguerButtonStyled>
    </NavbarStyled>
  );
}

export default Navbar