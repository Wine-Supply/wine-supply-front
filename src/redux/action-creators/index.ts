import {
  GET_WINES,
  GET_TOP_RATED_WINES,
  GET_WINE_DETAIL,
  GET_WINE_NAMES_AND_BRANDS,
  FILTER_BY_QUERY,
  SORT_WINES_BY_PRICE,
  SORT_WINES_BY_RATING,
  SEARCH_WINES,
  GET_ITEMS_STORAGE,
  ADD_ITEMS_STORAGE,
  GET_TOTAL_ITEMS,
  GET_TOTAL_PRICE,
  OPEN_CART,
} from "../actions";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { Wine } from "../reducer";
import { AdditionalUserInfo, User } from "firebase/auth";

const URL = "http://localhost:3001";

export const getWines = () => {
  return async function (dispatch: Dispatch) {
    try {
      const resp = await fetch(`${URL}/wines`);
      const data = await resp.json();
      //console.log("ac", data);
      return dispatch({ type: GET_WINES, payload: data });
    } catch (error) {
      return error;
    }
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

export const filterByQuery = (query: string) => {
  return async function (dispatch: Dispatch) {
    const resp = await fetch(`${URL}/wines/filters?${query}`);
    const data = await resp.json();
    return dispatch({ type: FILTER_BY_QUERY, payload: data });
  };
};

export const searchWines = (query: string) => {
  return async function (dispatch: Dispatch) {
    const resp = await fetch(`${URL}/wines/search?input=${query}`);
    const data = await resp.json();
    return dispatch({ type: SEARCH_WINES, payload: data });
  };
};

export const getWineDetail = (_id: string) => {
  //console.log("ac", _id);
  return async function (dispatch: Dispatch) {
    const resp = await fetch(`${URL}/wine/${_id}`);
    const data = await resp.json();
    return dispatch({ type: GET_WINE_DETAIL, payload: data });
  };
};

export const postWine = (wine: Wine) => {
  return async function () {
    let post = await axios.post(`${URL}/admin`, wine);
    return post;
  };
};

export const loginUserWithGoogle = async (
  userInfo: AdditionalUserInfo | null
) => {
  const resp = await axios.post(`${URL}/login`, userInfo);
  localStorage.setItem("token", JSON.stringify(resp.data.token));
};

export const loginUserWithFacebook = async (user: User) => {
  const resp = await axios.post(`${URL}/login`, user);
  localStorage.setItem("token", JSON.stringify(resp.data.token));
};

export const loginUser = async (email: string, password: string) => {
  const resp = await axios.post(`${URL}/login`, {
    email,
    password,
  });
  localStorage.setItem("token", JSON.stringify(resp.data.token));
};

export const signUpUser = async (
  name: string | undefined,
  lastName: string | undefined,
  userName: string | undefined,
  email: string,
  password: string
) => {
  const resp = await axios.post(`${URL}/signup`, {
    name,
    lastName,
    userName,
    email,
    password,
  });
  return resp.data;
};

export const getItemsStorage = () => {
  return {
    type: GET_ITEMS_STORAGE,
    payload: localStorage.getItem("item"),
  };
};

export const addItemsStorage = (object: Object) => {
  return {
    type: ADD_ITEMS_STORAGE,
    payload: object,
  };
};

export const getTotalItems = (total: number) => {
  return {
    type: GET_TOTAL_ITEMS,
    payload: total,
  };
};

export const getTotalPrice = (price: number) => {
  return {
    type: GET_TOTAL_PRICE,
    payload: price,
  };
};

export const buyItems = async (cart: any, token: any) => {
  const res = await axios.post(`${URL}/payment`, cart, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
      items: JSON.stringify(cart),
    },
  });
  window.location.replace(res.data);
};

export const buyItem = async (id: any, token: any) => {
  console.log(id);
  const res = await axios.post(`${URL}/payment`, id, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
      item: id,
    },
  });

  window.location.replace(res.data);
};

export const openCart = () => {
  return {
    type: OPEN_CART,
  };
};
