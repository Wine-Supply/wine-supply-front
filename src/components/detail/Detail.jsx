import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getWineDetail,
  buyItem,
  showLoginModal,
} from "../../redux/action-creators";
import { DetailStyled, WineData } from "./DetailStyled";
import { ButtonBuyNow, ButtonAddToCart } from "../utils/utils";
import Navbar from "../nav/navbar";
import Footer from "../footer/Footer";
import CarritoFull from "../carritoFull/CarritoFull";
import { addStorageItem } from "../catalogo/CatalogueProducts";
import LoginModal from "../login-modal/LoginModal";

export default function Detail() {
  const { id } = useParams();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const loginModal = useSelector((state) => state.loginModal);
  const navigate = useNavigate();

  const {
    name,
    brand,
    description,
    images,
    alcoholVolume,
    rating,
    price,
    body,
    type,
    cropYear,
    origin,
    strain,
    volume,
  } = useSelector((state) => state.wineDetail);

  useEffect(() => {
    dispatch(getWineDetail(id));
    if (token?.length === 0 && localStorage.getItem("token"))
      setToken(localStorage.getItem("token"));
  }, [dispatch, id, token]);

  const handleAddItemToCart = () => {
    if (token.length === 0) {
      dispatch(showLoginModal());
    } else
      addStorageItem(id, name, images, description, price, rating, dispatch);
  };

  const handleLogin = () => {
    navigate("/login");
    dispatch(showLoginModal());
  };

  //<div className={"bg-container"}><img className={"bg"} src={images} alt="bg" /></div>
  return (
    <>
      <Navbar />
      <CarritoFull />
      <DetailStyled>
        <div className={"bg"}>
          <img className={"img"} src={images} alt="img" />
        </div>
        <WineData>
          <div>
            <div className={"wine"}>
              <h1>{name}</h1>
              <span>{rating}/5★</span>
            </div>
            <p className={"body"}>{body}</p>
          </div>
          <div className={"data"}>
            <div>
              <h3>Type: {type}</h3>
              <h3>Year: {cropYear}</h3>
              <h3>Origin: {origin}</h3>
              <h3>Strain: {strain}</h3>
            </div>
            <div>
              <h3>Brand: {brand}</h3>
              <h3>Volume: {volume}ml</h3>
              <h3>Alcohol: {alcoholVolume}vl</h3>
            </div>
          </div>
          <p className={"description"}>{description}</p>
        </WineData>
        <div className="column">
          <h3 className={"price"}>${price}</h3>
          <p className={"add"}>Add to WishList +</p>
          <div className="btns">
            <ButtonAddToCart
              onClick={handleAddItemToCart}
              style={{ transform: "scale(1.5)", margin: "1.2rem" }}
            >
              Add to Cart
            </ButtonAddToCart>
            <ButtonBuyNow
              onClick={() => buyItem(id, token)}
              style={{ transform: "scale(1.5)", margin: "1.2rem" }}
            >
              Buy now
            </ButtonBuyNow>
          </div>
        </div>
        {loginModal && <LoginModal handleLogin={handleLogin} />}
      </DetailStyled>
      <Footer />
    </>
  );
}
