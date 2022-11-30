import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getWines } from "../../redux/action-creators";
import Filter from "../filter/Filter";
import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { CatalogoContainer, TitleCategory } from "./CatalogoStyle";
import { State } from "../../redux/reducer/index";
import Navbar from "../nav/navbar";
import Footer from "../footer/Footer";

export default function CatalogueProducts() {
  const Products = useSelector((state: State) => state.allWines);

  let dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (Products!.length === 0) {
      dispatch(getWines());
    }
  }, []);

  return (
    <>
      <Navbar />
      <CatalogoContainer>
        <Filter />
        <SearchBar />
        <div>
          <TitleCategory>Most Recommended</TitleCategory>
          <div className="productCointainer">
            {Products?.map((el) => {
              return (
                <Link to={`detail/${el._id}`} key={el._id}>
                  <Card
                    name={el.name}
                    descriptions={el.description}
                    img={el.images[0]}
                    price={el.price}
                    rating={el.rating}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </CatalogoContainer>
      <Footer />
    </>
  );
}
