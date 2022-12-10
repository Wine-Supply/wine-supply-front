import { CardProps } from "../card/Card";
import { CardContainer } from "./ListContainer";
import { StarFilled, CheckOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWishlist } from "../../redux/action-creators";
import { addStorageItem } from "../catalogo/CatalogueProducts";

export default function WishlistCard({
  _id,
  name,
  img,
  descriptions,
  price,
  rating,
  token,
}: CardProps) {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleRemove = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") ?? "[]");
    const newWishlist = [...wishlist].filter((item) => item._id !== _id);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    dispatch(getWishlist());
  };

  const handleAddItemToCart = () => {
    addStorageItem(_id, name, img, descriptions, price, rating, dispatch!);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <CardContainer>
      <div>
        <img className="card-img" src={img} alt={`${name}`} />
      </div>
      <div>
        <header className="card-header">
          <span className="card-name">{name}</span>
          <div className="card-info">
            <span>${price}</span>
            <span className="rating-span">
              {rating} / 5 <StarFilled className="rating" />{" "}
            </span>
          </div>
        </header>
        <p className="card-description">{descriptions}</p>
        <footer className="card-btns">
          <button onClick={handleAddItemToCart} className="add-btn">
            Add to cart
            <CheckOutlined
              className={`added-to-cart ${addedToCart && "active"}`}
            />
          </button>
          <button onClick={handleRemove} className="remove-btn">
            Remove
          </button>
        </footer>
      </div>
    </CardContainer>
  );
}
