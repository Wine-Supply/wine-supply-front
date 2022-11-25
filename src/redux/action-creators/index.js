import {
  GET_WINES,
  GET_TOP_RATED_WINES,
  GET_WINE_DETAIL,
  GET_WINE_NAMES_AND_BRANDS,
  FILTER_BY_QUERY,
} from "../actions";
import axios from "axios";

export const getWines = () => {
  return async function (dispatch) {
    const resp = await fetch("http://localhost:3001/wines");
    const data = await resp.json();
    console.log("ac", data);
    return dispatch({ type: GET_WINES, payload: data });
  };
};

export const getTopRatedWines = () => ({ type: GET_TOP_RATED_WINES });

export const getWineNamesAndBrands = () => ({
  type: GET_WINE_NAMES_AND_BRANDS,
});

export const filterByQuery = (url) => {
  return async function (dispatch) {
    const resp = await fetch(`http://localhost:3001/wines/filters?${url}`);
    const data = await resp.json();
    return dispatch({ type: FILTER_BY_QUERY, payload: data });
  };
};

export const getWineDetail = (id) => {
  console.log("ac", id);
  return async function (dispatch) {
    const resp = await fetch(`http://localhost:3001/wine/${id}`);
    const data = await resp.json();
    return dispatch({ type: GET_WINE_DETAIL, payload: data });
  };
};

export const postWine = (wine) => {
  return async function () {
    let post = await axios.post(`http://localhost:3001/admin`, wine);
    return post;
  };
};
