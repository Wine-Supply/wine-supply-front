import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWineDetail, buyItem } from "../../redux/action-creators";
import { DetailStyled, WineData } from "./DetailStyled";
import { ButtonBuyNow, ButtonAddToCart } from "../utils/utils";
import Navbar from "../nav/navbar";
import Footer from "../footer/Footer";
import CarritoFull from "../carritoFull/CarritoFull";
import { addStorageItem } from "../catalogo/CatalogueProducts";

export default function Detail() {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

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
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      <CarritoFull />
      <DetailStyled>
        <div className={"bg-container"}>
          <img className={"bg"} src={images} alt="bg" />
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
              onClick={() =>
                addStorageItem(
                  id,
                  name,
                  images,
                  description,
                  price,
                  rating,
                  dispatch
                )
              }
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
      </DetailStyled>
      <Footer />
    </>
  );
}
