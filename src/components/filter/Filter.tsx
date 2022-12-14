import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { FilterStyled } from "./FilterStyled";
import { State } from "../../redux/reducer";
import React, { useState, useEffect } from "react";
import {
  filterByQuery,
  getWineNamesAndBrands,
  getWines,
  sortWinesByPrice,
  sortWinesByRating,
} from "../../redux/action-creators";
import SearchBar from "../searchbar/SearchBar";

export default function Filter() {
  const dispatch: Dispatch<any> = useDispatch();
  const Products = useSelector((state: State) => state.allWines);
  const wineNames = useSelector((state: State) => state.wineNames);
  const wineBrands = useSelector((state: State) => state.wineBrands);
  const [url, setUrl] = useState<string>("");

  const ratings: number[] = [1, 2, 3, 4, 5];
  // const wineTypes: string[] = ["red", "white", "sparkling"];

  useEffect(() => {
    if (wineNames.length === 0 || wineBrands.length === 0) {
      dispatch(getWineNamesAndBrands());
    }
    // eslint-disable-next-line
  }, [Products]);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetValue = e.target.value;
    const targetInnerHTML = e.target[0].innerHTML;
    switch (targetInnerHTML) {
      case "Name":
        if (targetValue === "Name") return;
        else if (!url.includes(targetInnerHTML.toLowerCase())) {
          setUrl((url) =>
            url.length > 0
              ? `${url}&name=${targetValue}`
              : `${url}name=${targetValue}`
          );
        } else {
          let urlToArray = url.slice().split("&");
          const index = urlToArray.findIndex((el) => el.startsWith("name"));
          urlToArray.splice(index, 1, `name=${targetValue}`);
          const urlUpdated = urlToArray.join("&");
          setUrl(urlUpdated);
        }
        break;

      case "Brand":
        if (targetValue === "Brand") return;
        else if (!url.includes(targetInnerHTML.toLowerCase())) {
          setUrl((url) =>
            url.length > 0
              ? `${url}&brand=${targetValue}`
              : `${url}brand=${targetValue}`
          );
        } else {
          let urlToArray = url.slice().split("&");
          const index = urlToArray.findIndex((el) => el.startsWith("brand"));
          urlToArray.splice(index, 1, `brand=${targetValue}`);
          const urlUpdated = urlToArray.join("&");
          setUrl(urlUpdated);
        }
        break;

      case "Rating":
        if (targetValue === "Rating") return;
        else if (!url.includes(targetInnerHTML.toLowerCase())) {
          setUrl((url) =>
            url.length > 0
              ? `${url}&rating=${targetValue[0]}`
              : `${url}rating=${targetValue[0]}`
          );
        } else {
          let urlToArray = url.slice().split("&");
          const index = urlToArray.findIndex((el) => el.startsWith("rating"));
          urlToArray.splice(index, 1, `rating=${targetValue[0]}`);
          const urlUpdated = urlToArray.join("&");
          setUrl(urlUpdated);
        }
        break;

      default:
        return;
    }
  };

  const handleSort = (e: React.BaseSyntheticEvent) => {
    if (e.target.innerHTML === "Price") dispatch(sortWinesByPrice());
    else if (e.target.innerHTML === "Rating") dispatch(sortWinesByRating());
  };

  const cleanFilters = () => {
    dispatch(getWines());
    setUrl("");
  };

  useEffect(() => {
    if (url.length > 0) dispatch(filterByQuery(url));
  }, [url]);

  return (
    <FilterStyled>
      <form onSubmit={(e) => e.preventDefault()} className="container">
        <div className="filter-container">
          <SearchBar />
        </div>
        <div className="filter-container mb">
          <label className="options-label" htmlFor="name-filter">
            Filter by:
          </label>
          <div className="options-container">
            <select
              onChange={(e) => handleFilter(e)}
              id="name-filter"
              className="options"
            >
              <option className="filter-option" value="Name">
                Name
              </option>
              {wineNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <select onChange={(e) => handleFilter(e)} className="options">
              <option className="filter-option" value="Brand">
                Brand
              </option>
              {wineBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            {/* <select className="options">
              <option value="Type">Type</option>
              {wineTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select> */}
            <select onChange={(e) => handleFilter(e)} className="options">
              <option className="filter-option" value="Rating">
                Rating
              </option>
              {ratings.map((num) => (
                <option key={num} value={num}>
                  {num === 1 ? `${num} star` : `${num} stars`}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="filter-container">
          <label className="options-label" htmlFor="price-sort">
            Sort by:
          </label>
          <div onClick={(e) => handleSort(e)} className="options-container">
            <button>Price</button>
            <button>Rating</button>
          </div>
        </div>
        <div className="filter-container">
          <button onClick={cleanFilters}>Clean filters</button>
        </div>
      </form>
    </FilterStyled>
  );
}
