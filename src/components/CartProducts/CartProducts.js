import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getItemsStorage,
  getTotalItems,
  getTotalPrice,
} from "../../redux/action-creators";
import { Wrapper } from "./CartProductsStyle";
import CartItem from "./CartItem";

const CartProducts = () => {
  const Items = useSelector((state) => state.itemsStorage);
  const [total, setTotal] = useState(Items.length);
  const [totalMoney, setTotalMoney] = useState(
    Items.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  );
  let dispatch = useDispatch();
  const clearItem = (_id) => {
    let algo = Items.filter((item) => item._id !== _id);
    let addItemStorage = JSON.stringify(algo);
    localStorage.setItem("item", addItemStorage);
    dispatch(getItemsStorage());
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {Items.length > 0 && (
        <div>
          <span style={{ marginRight: "1rem" }}>Items: {total}</span>
          <span>Total: {totalMoney}</span>
        </div>
      )}

      {Items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {Items.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              _id={item._id}
              name={item.name}
              img={item.img}
              price={item.price}
              clearItem={clearItem}
              total={total}
              setTotal={setTotal}
              totalMoney={totalMoney}
              setTotalMoney={setTotalMoney}
            />
          ))}
        </div>
      )}
      {Items.length > 0 && (
        <Link
          onClick={() => {
            dispatch(getTotalItems(total));
            dispatch(getTotalPrice(totalMoney));
          }}
          className="checkout"
          to="/cart/checkout"
        >
          Checkout
        </Link>
      )}
    </Wrapper>
  );
};

export default CartProducts;
