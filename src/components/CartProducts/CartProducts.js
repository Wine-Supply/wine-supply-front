import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper } from "./CartProductsStyle";
import CartItem from "./CartItem";
import { addItemsCartDataBase, handleEmptyCart } from "../../redux/action-creators";

const CartProducts = () => {
  const Items = useSelector((state) => state.itemsStorage);
  const TotalItemsCart = useSelector((state) => state.totalItems);
  const TotalPriceMoney = useSelector((state) => state.totalPrice);
  const [allItemToCart, setAllItemsToCart] = useState([])
  const dispatch = useDispatch()

    useEffect(() => {
      setAllItemsToCart(Items)
    }, [Items.length])

    useEffect(() =>{
      return ()=>{addItemsCartDataBase(Items)}
    })

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {allItemToCart.length > 0 && (
        <div className="cart-info">
          <span>Items: {TotalItemsCart}</span>
          <span>Total: ${TotalPriceMoney.toString().substring(0, 5)}</span>
          <button onClick={()=>{dispatch(handleEmptyCart())}} className="empty-btn">
            Empty cart
          </button>
        </div>
      )}

      {allItemToCart.length === 0 ? (
        <p className="no-items">No items in cart.</p>
      ) : (
        <div>
          {allItemToCart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              _id={item._id}
              name={item.name}
              img={item.img}
              price={item.price}
              cuantity={item.cuantity}
            />
          ))}
        </div>
      )}
      {allItemToCart.length > 0 && (
        <Link
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
