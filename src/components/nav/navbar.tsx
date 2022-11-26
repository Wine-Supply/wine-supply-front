import {useState} from "react";
import { NavbarStyled } from "./NavbarStyled";
import {BurguerButtonStyled} from "./BurguerButtonStyled";
import logo from './logo.svg';
import BurguerButton from './BurguerButton';
import {
  ShoppingCartOutlined, 
  SearchOutlined, 
  UserOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom"

//

export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClicked =() => {
    setClicked(!clicked)
  }
  return (
    <NavbarStyled>
      <div>
        <img className={'logo'} src={logo} alt="ws" />
        <h2>WINES SUPPLY</h2>
      </div>
      <nav className={`links ${clicked ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="http://localhost:3000/WineClubp" className={'link'} onClick={handleClicked}>
              The Club
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/home/products" className={'link'} onClick={handleClicked}>
              Shop
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/home/products" className={'link'} onClick={handleClicked}>
              <ShoppingCartOutlined />
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/admin" className={'link'} onClick={handleClicked}>
              <UserOutlined />
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/home" className={'link'} onClick={handleClicked}>
              <SearchOutlined />
            </a>
          </li>     
        </ul>
      </nav>
      <div className='burguer'>
        <BurguerButton clicked={clicked} handleClick={handleClicked} />
      </div>
      <BurguerButtonStyled className={`initial ${clicked ? ' active' : ''}`}></BurguerButtonStyled>
    </NavbarStyled>
  );
}
