import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { State, Wine } from "../../redux/reducer";
import { StarOutlined } from "@ant-design/icons";
import { Article } from "./ProfileContainer";

type Order = {
  orderDate: string;
  address: string;
  total: number;
  paymentMethod: string;
  items: string[];
};

export default function ShoppingOrder({
  orderDate,
  address,
  total,
  paymentMethod,
  items,
}: Order) {
  const date = new Date(orderDate).toUTCString();

  const wines = useSelector((state: State) => state.allWines);
  const [itemsBought, setItemsBought] = useState<Wine[]>([]);

  useEffect(() => {
    setItemsBought([...wines].filter((wine) => items.includes(wine._id)));
  }, [wines]);

  return (
    <Article>
      <header>
        <p className="header-text">Purchased on {date}</p>
        <p className="header-text">Order sent to {address}</p>
      </header>
      <p className="details-heading">Order details:</p>
      <div>
        {itemsBought.length > 0 &&
          itemsBought.map((item) => (
            <figure className="purchase-detail" key={item._id}>
              <div className="img-container">
                <img
                  className="purchase-img"
                  src={item.images[0]}
                  alt={item.name}
                />
              </div>
              <div className="purchase-info">
                <div className="item-rating">
                  <span>{item.name}</span>
                  <span>
                    {item.rating} / 5 <StarOutlined />{" "}
                  </span>
                </div>
                <span>{item.brand}</span>
                <span>{item.price} USD</span>
              </div>
            </figure>
          ))}
        <footer className="purchase-footer">
          <span>Total of {total} USD</span>
          <span>Paid through {paymentMethod}</span>
        </footer>
        <hr />
      </div>
    </Article>
  );
}
