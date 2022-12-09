import { useState } from "react";
import { Link } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import { addStorageItem } from "../catalogo/CatalogueProducts";
import { CardContainer, CardInformation } from "./CardStyle";
import { ButtonAddToCart } from "../utils/utils";
import { showLoginModal } from "../../redux/action-creators";
import { useDispatch } from "react-redux";
import { CheckOutlined } from "@ant-design/icons";

interface CardProps {
  _id: string;
  name: string;
  img: string;
  descriptions: string;
  price: number;
  rating: number;
  addStorageItem?: any;
  token?: string | null;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch?: Dispatch<any>;
}

const Card: React.FC<CardProps> = ({
  _id,
  name,
  img,
  descriptions,
  price,
  rating,
  token,
}) => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleAddItemToCart = () => {
    if (token?.length === 0) {
      dispatch(showLoginModal());
    } else {
      addStorageItem(_id, name, img, descriptions, price, rating, dispatch!);
      setAddedToCart(true);
      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    }
  };

  return (
    <CardContainer>
      <Link to={`/home/products/detail/${_id}`}>
        <div className="imageMain">
          <img src={img} alt={name} />
        </div>
      </Link>
      <CardInformation>
        <div className="rankingStyle">
          <p>{rating}/5</p>
        </div>

        <h2>{name}</h2>

        <div className="descriptionStyle">
          <span>Description</span>
          <p>{descriptions.substring(0, 45)}...</p>
        </div>

        <div className="cardFooter">
          <p>${price}</p>
          <ButtonAddToCart
            style={{ transform: "scale(0.8)" }}
            onClick={handleAddItemToCart}
          >
            add to cart
          </ButtonAddToCart>
          <CheckOutlined
            className={`added-to-cart ${addedToCart && "active"}`}
          />
        </div>
      </CardInformation>
    </CardContainer>
  );
};

export default Card;
