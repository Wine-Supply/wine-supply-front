import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../../redux/action-creators";
import { State, Wine } from "../../redux/reducer";
import CarritoFull from "../carritoFull/CarritoFull";
import Footer from "../Footer/Footer";
import Navbar from "../nav/navbar";
import { ListContainer } from "./ListContainer";
import WishlistCard from "./WishlistCard";

export default function Wishlist() {
  const wishlist = useSelector((state: State) => state.wishList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlist());
  }, []);

  const emptyWishlist = () => {
    localStorage.setItem("wishlist", JSON.stringify([]));
    dispatch(getWishlist());
  };

  // const addAllToCart = () => {
  //   const current = JSON.parse(localStorage.getItem("item") ?? "[]");
  //   const wishlistWithStringImg = wishlist.map((item: Wine) => ({
  //     ...item,
  //     img: item.images[0],
  //   }));
  //   let notRepeated: Wine[] = [];
  //   const idArray = current.map((item: Wine) => item._id);
  //   wishlistWithStringImg.forEach((listItem) => {
  //     if (!idArray.includes(listItem._id)) notRepeated.push(listItem);
  //   });
  //  /*  localStorage.setItem("item", JSON.stringify([...current, ...notRepeated]));
  //   dispatch(getItemsStorage()); */
  // };

  return (
    <>
      <Navbar />
      <CarritoFull />
      <ListContainer>
        {
          <>
            <header className="wishlist-header">
              <h2 className="wishlist-title">Welcome to your wishlist!</h2>
              <p className="header-text">
                Select the items that you want to buy or remove those that don't
                interest you anymore.
              </p>
              {wishlist.length === 0 && (
                <p className="no-items-text">No items added yet.</p>
              )}
            </header>
            {wishlist.length > 0 && (
              <div className="btn-container">
                <button className="empty-btn" onClick={emptyWishlist}>
                  Empty wishlist
                </button>
              </div>
            )}

            {wishlist.map((item: Wine) => (
              <WishlistCard
                key={item._id}
                _id={item._id}
                name={item.name}
                img={item.images[0]}
                descriptions={item.description}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </>
        }
      </ListContainer>
      <Footer />
    </>
  );
}
