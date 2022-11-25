import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { FilterStyled } from "./FilterStyled";
import { State } from "../../redux/reducer";
import React, { useEffect, useState } from "react";
import {
  filterByQuery,
  getWineNamesAndBrands,
} from "../../redux/action-creators";

export default function Filter() {
  const dispatch: Dispatch<any> = useDispatch();
  const wineNames = useSelector((state: State) => state.wineNames);
  const wineBrands = useSelector((state: State) => state.wineBrands);
  const [url, setUrl] = useState<string>("");

  const ratings: number[] = [1, 2, 3, 4, 5];
  // const wineTypes: string[] = ["red", "white", "sparkling"];

  useEffect(() => {
    dispatch(getWineNamesAndBrands());
  }, []);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target[0].innerHTML === "Name")
      setUrl((url) =>
        url.length
          ? `${url}&name=${e.target.value}`
          : `${url}name=${e.target.value}`
      );
    else if (e.target[0].innerHTML === "Brand")
      setUrl((url) =>
        url.length
          ? `${url}&brand=${e.target.value}`
          : `${url}brand=${e.target.value}`
      );
    else if (e.target[0].innerHTML === "Rating")
      setUrl((url) =>
        url.length
          ? `${url}&rating=${e.target.value}`
          : `${url}rating=${e.target.value}`
      );

    console.log(url);

    dispatch(filterByQuery(url));
  };

  return (
    <FilterStyled>
      <form onSubmit={(e) => e.preventDefault()} className="container">
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
              <option value="Name">Name</option>
              {wineNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <select onChange={(e) => handleFilter(e)} className="options">
              <option value="Brand">Brand</option>
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
              <option value="Rating">Rating</option>
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
          <div className="options-container">
            <button>Price</button>
            <button>Rating</button>
          </div>
        </div>
      </form>
    </FilterStyled>
  );
}
