import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  addItemsStorage,
  getTotalItems,
  getTotalPrice,
  getWines,
  getWishlist,
  showLoginModal,
} from "../../redux/action-creators";
import Filter from "../filter/Filter";
import Card from "../card/Card";
import { CatalogoContainer, TitleCategory } from "./CatalogoStyle";
import { State } from "../../redux/reducer/index";
import Navbar from "../nav/navbar";
import Footer from "../Footer/Footer";
import CarritoFull from "../carritoFull/CarritoFull";
import { useNavigate } from "react-router-dom";
import LoginModal from "../login-modal/LoginModal";
import Loading from "../loading/Loading";
import Banner from "../payment-banner/Banner";
import WishlistModal from "../wishlist/WishlistModal";

export const addStorageItem = (
  _id: string,
  name: string,
  img: string,
  descriptions: string,
  price: number,
  rating: number,
  dispatch: Dispatch<any>
) => {
  let cuantity = 1;
  dispatch(addItemsStorage({ _id, name, img, descriptions, price, rating, cuantity }));
  dispatch(getTotalItems());
  dispatch(getTotalPrice());
};

export default function CatalogueProducts() {
  const [token, setToken] = useState<string | null>("");
  const [addedToWishlist, setAddedToWishlist] = useState<boolean>(false);
  const [itemAddedToWishlist, setItemAddedToWishlist] = useState<string>("");
  const loginModal = useSelector((state: State) => state.loginModal);
  const Products = useSelector((state: State) => state.allWines);
  const wishlist = useSelector((state: State) => state.wishList);
  const noFilterMatch = useSelector((state: State) => state.noWinesMessage);
  let dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (wishlist.length === 0) dispatch(getWishlist());

    if (Products!.length === 0) dispatch(getWines());

    if (token?.length === 0 && localStorage.getItem("token"))
      setToken(localStorage.getItem("token"));
  }, [token]);

  const handleLogin = () => {
    navigate("/login");
    dispatch(showLoginModal());
  };

  return (
    <>
      <Navbar />
      <CarritoFull />
      <Banner />
      <CatalogoContainer>
        <Filter />
        <TitleCategory>Most Recommended</TitleCategory>
        <div className="productCointainer">
          {noFilterMatch.length > 0 ? (
            <p className="no-wines">{noFilterMatch}</p>
          ) : Products.length === 0 ? (
            <Loading />
          ) : (
            Products?.map((el) => {
              return (
                <Card
                  key={el._id}
                  _id={el._id}
                  name={el.name}
                  descriptions={el.description}
                  img={el.images[0]}
                  price={el.price}
                  rating={el.rating}
                  dispatch={dispatch}
                  token={token}
                  setAddedToWishlist={setAddedToWishlist}
                  setItemAddedToWishlist={setItemAddedToWishlist}
                />
              );
            })
          )}
        </div>
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
      </CatalogoContainer>
      <Footer />
    </>
  );
}
