import {
  GET_WINES,
  GET_TOP_RATED_WINES,
  GET_WINE_DETAIL,
  GET_WINE_NAMES_AND_BRANDS,
  FILTER_BY_QUERY,
  SORT_WINES_BY_PRICE,
  SORT_WINES_BY_RATING,
  GET_WINE_NAME,
  SEARCH_WINES,
  ADD_ITEMS_STORAGE,
  GET_ITEMS_STORAGE
} from "../actions";
import axios from "axios";

export const getWines = () => {
  return async function (dispatch) {
    const resp = await fetch("http://localhost:3001/wines");
    const data = await resp.json();
    return dispatch({ type: GET_WINES, payload: data });
  };
};

export const getTopRatedWines = () => ({ type: GET_TOP_RATED_WINES });

export const getWineNamesAndBrands = () => ({
  type: GET_WINE_NAMES_AND_BRANDS,
});

export const sortWinesByPrice = () => ({
  type: SORT_WINES_BY_PRICE,
});

export const sortWinesByRating = () => ({
  type: SORT_WINES_BY_RATING,
});

export const filterByQuery = (url) => {
  return async function (dispatch) {
    const resp = await fetch(`http://localhost:3001/wines/filters?${url}`);
    const data = await resp.json();
    return dispatch({ type: FILTER_BY_QUERY, payload: data });
  };
};

export const searchWines = (query) => {
  return async function (dispatch) {
    const resp = await fetch(
      `http://localhost:3001/wines/search?input=${query}`
    );
    const data = await resp.json();
    return dispatch({ type: SEARCH_WINES, payload: data });
  };
};

export const getWineDetail = (_id) => {
  return async function (dispatch) {
    const resp = await fetch(`http://localhost:3001/wine/${_id}`);
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

export const getWineName = (input) => {
  return async function (dispatch) {
    let resp = await axios.get(
      `http://localhost:3001/wines/search?input=${input}`
    );
    const data = await resp.json();
    return dispatch({
      type: GET_WINE_NAME,
      payload: data,
    });
  };
};

export const getItemsStorage = () =>{
  return ({
    type: GET_ITEMS_STORAGE,
    payload: JSON.parse(localStorage.getItem('item')),
  });
}

export const addItemsStorage = (object) =>{
    return ({
      type: ADD_ITEMS_STORAGE,
      payload: object,
    })
}
