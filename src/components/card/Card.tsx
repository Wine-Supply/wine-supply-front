import { useState } from "react";
import { Link } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import { addStorageItem } from "../catalogo/CatalogueProducts";
import { CardContainer, CardInformation } from "./CardStyle";
import { ButtonAddToCart } from "../utils/utils";
import {
  addToWishlist,
  getWishlist,
  showLoginModal,
} from "../../redux/action-creators";
import { useDispatch, useSelector } from "react-redux";
import { CheckOutlined, TagOutlined } from "@ant-design/icons";
import { State } from "../../redux/reducer";

export interface CardProps {
  _id: string;
  name: string;
  img: string;
  descriptions: string;
  price: number;
  rating: number;
  setAddedToWishlist?: React.Dispatch<React.SetStateAction<boolean>>;
  setItemAddedToWishlist?: React.Dispatch<React.SetStateAction<string>>;
  addStorageItem?: any;
  token?: string | null;
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
  setAddedToWishlist,
  setItemAddedToWishlist,
}) => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const wines = useSelector((state: State) => state.allWines);
  const wishlist = useSelector((state: State) => state.wishList);
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

  const handleAddToWishlist = () => {
    const alreadyInList = wishlist.some((item) => item._id === _id);
    if (token?.length === 0) dispatch(showLoginModal());
    else if (alreadyInList) return;
    else {
      addToWishlist(_id, wines);
      dispatch(getWishlist());
      setItemAddedToWishlist!(_id);
      setAddedToWishlist!(true);
    }
  };

  return (
    <CardContainer>
      <TagOutlined onClick={handleAddToWishlist} className="wishlist" />
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
