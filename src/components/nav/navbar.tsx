import { useState, useEffect } from "react";
import { NavbarStyled } from "./NavbarStyled";
import { BurguerButtonStyled } from "./BurguerButtonStyled";
import logo from "../../images/logo.svg";
import BurguerButton from "./BurguerButton";
import {
  ShoppingCartOutlined,
  IdcardOutlined,
  UserOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getWines, openCart } from "../../redux/action-creators";
import DarkMode from "../dark-mode/darkmode";
import { State } from "../../redux/reducer";

const Navbar = () => {
  let dispatch: Dispatch<any> = useDispatch();

  const [clicked, setClicked] = useState(false);
  const [token, setToken] = useState("");
  const User = useSelector((state: State) => state.user);
  const TotalItemsCart = useSelector((state: State) => state.totalItems);

  useEffect(() => {
    if (token?.length === 0 && localStorage.getItem("token"))
      setToken(localStorage.getItem("token") || "");
  }, []);

  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <NavbarStyled>
      <div>
        <img className={"logo"} src={logo} alt="ws" />
        <Link onClick={() => dispatch(getWines())} className={"link"} to="/">
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
          <li onClick={() => dispatch(getWines())}>
            <Link className={"link line"} to="/home/products">
              Shop
            </Link>
          </li>
          
          <li className="cart">
            {TotalItemsCart > 0 && (
              <span className="items-amount">{TotalItemsCart}</span>
            )}
            <ShoppingCartOutlined
              className={"link line"}
              onClick={() => {
                dispatch(openCart());
              }}
            />
          </li>
          <li>
            <Link to="/wishlist">
              <TagOutlined className="link line" />
            </Link>
          </li>
          <li>
            <Link className={"link line"} to="/login">
              <UserOutlined />
            </Link>
          </li>
          <li onClick={() => dispatch(getWines())}>
            <Link className={"link line"} to={`/user/${User.name}/profile`}>
              <img
                className="user-photo"
                src={
                  User.avatar && User.avatar.length > 0
                    ? User.avatar[0]
                    : "https://static.vecteezy.com/system/resources/previews/002/732/063/original/full-glass-of-red-wine-icon-illustration-free-vector.jpg"
                }
                alt=""
              />
            </Link>
          </li>
          {token && User.isAdmin === "yes" && (
            <li>
              <Link className={"link line"} to="/admin">
                <IdcardOutlined />
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <DarkMode />
      <div className="burguer">
        <BurguerButton clicked={clicked} handleClick={handleClicked} />
      </div>
      <BurguerButtonStyled
        className={`initial ${clicked ? " active" : ""}`}
      ></BurguerButtonStyled>
    </NavbarStyled>
  );
};

export default Navbar;
