import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Card from "../../card/Card";
import { Section } from "./Section";
import { State } from "../../../redux/reducer";
import {
  getTopRatedWines,
  getWines,
  getWishlist,
  showLoginModal,
} from "../../../redux/action-creators";
import LoginModal from "../../login-modal/LoginModal";
import { useNavigate } from "react-router-dom";
import Loading from "../../loading/Loading";
import WishlistModal from "../../wishlist/WishlistModal";
// import loading from "../../images/wine-loading.gif";

export default function TopRated() {
  const Products = useSelector((state: State) => state.allWines);
  const topWines = useSelector((state: State) => state.topRatedWines);
  const loginModal = useSelector((state: State) => state.loginModal);
  const wishlist = useSelector((state: State) => state.wishList);
  const [token, setToken] = useState<string | null>("");
  const [addedToWishlist, setAddedToWishlist] = useState<boolean>(false);
  const [itemAddedToWishlist, setItemAddedToWishlist] = useState<string>("");
  // const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (wishlist.length === 0) dispatch(getWishlist());
    if (Products.length === 0) dispatch(getWines());
    dispatch(getTopRatedWines());
    if (token?.length === 0 && localStorage.getItem("token"))
      setToken(localStorage.getItem("token"));
  }, [Products, token]);

  const handleLogin = () => {
    navigate("/login");
    dispatch(showLoginModal());
  };

  return (
    <Section>
      <h2 className="secondary-heading">Top rated</h2>
      <div className="cards-container">
        {topWines.length === 0 ? (
          <Loading />
        ) : (
          topWines.map((item) => (
            <Card
              key={item._id}
              _id={item._id}
              name={item.name}
              descriptions={item.description}
              img={item.images[0]}
              price={item.price}
              rating={item.rating}
              dispatch={dispatch}
              token={token}
              setAddedToWishlist={setAddedToWishlist}
              setItemAddedToWishlist={setItemAddedToWishlist}
            />
          ))
        )}
        {loginModal && <LoginModal handleLogin={handleLogin} />}
        {addedToWishlist && (
          <WishlistModal
            name={
              Products.find((wine) => wine._id === itemAddedToWishlist)?.name
            }
            img={
              Products.find((wine) => wine._id === itemAddedToWishlist)
                ?.images[0]
            }
            setAddedToWishlist={setAddedToWishlist}
          />
        )}
      </div>
    </Section>
  );
}
