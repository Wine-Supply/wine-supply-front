import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addItemsStorage, getWines } from "../../redux/action-creators";
import Filter from "../filter/Filter";
import SearchBar from "../searchbar/SearchBar";
import Card from "../card/Card";
import { CatalogoContainer, TitleCategory } from "./CatalogoStyle";
import { State } from "../../redux/reducer/index";
import Navbar from "../nav/navbar";
import Footer from "../footer/Footer";
import CarritoFull from "../carritoFull/CarritoFull";
import { useNavigate } from "react-router-dom";

export default function CatalogueProducts() {
  // const [cartOpen, setCartOpen] = useState(false);
  const [token, setToken] = useState<string | null>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const Products = useSelector((state: State) => state.allWines);
  let dispatch: Dispatch<any> = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (Products!.length === 0) {
      dispatch(getWines());
    }
    if (token?.length === 0 && localStorage.getItem("token"))
      setToken(localStorage.getItem("token"));
    console.log(token);
  }, [token]);

  const addStorageItem = (
    _id: string,
    name: string,
    img: string,
    descriptions: string,
    price: number,
    rating: number
  ) => {
    dispatch(addItemsStorage({ _id, name, img, descriptions, price, rating }));
    let getStorage: any = localStorage.getItem("item");
    if (getStorage === null) {
      let addItem = JSON.stringify([
        { _id, name, img, descriptions, price, rating },
      ]);
      return localStorage.setItem("item", addItem);
    } else {
      let localItems = JSON.parse(getStorage);
      localItems.push({ _id, name, img, descriptions, price, rating });
      let addItemStorage = JSON.stringify(localItems);
      return localStorage.setItem("item", addItemStorage);
    }
  };

  const handleLogin = () => {
    navigate("/login");
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <CarritoFull />
      <CatalogoContainer>
        <Filter />
        <SearchBar />
        <div>
          <TitleCategory>Most Recommended</TitleCategory>
          <div className="productCointainer">
            {Products?.map((el) => {
              return (
                <div key={el._id}>
                  <Card
                    _id={el._id}
                    name={el.name}
                    descriptions={el.description}
                    img={el.images[0]}
                    price={el.price}
                    rating={el.rating}
                    addStorageItem={addStorageItem}
                    token={token}
                    setShowModal={setShowModal}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {showModal && (
          <>
            <div className="overlay"></div>
            <div className="login-modal">
              <p>Login to purchase products</p>
              <div className="btn-container">
                <button onClick={handleLogin} className="modal-btn">
                  Login
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="modal-btn"
                >
                  Keep looking
                </button>
              </div>
            </div>
          </>
        )}
      </CatalogoContainer>
      <Footer />
    </>
  );
}
