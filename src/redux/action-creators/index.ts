import {
  GET_WINES,
  GET_TOP_RATED_WINES,
  GET_WINE_DETAIL,
  GET_WINE_NAMES_AND_BRANDS,
  FILTER_BY_QUERY,
  SORT_WINES_BY_PRICE,
  SORT_WINES_BY_RATING,
  SEARCH_WINES,
  LOGIN_USER_WITH_GOOGLE,
  LOGIN_USER_WITH_FACEBOOK,
  LOGIN_USER,
} from "../actions";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { Wine } from "../reducer";
import { AdditionalUserInfo, User } from "firebase/auth";

export const getWines = () => {
  return async function (dispatch: Dispatch) {
    const resp = await fetch("http://localhost:3001/wines");
    const data = await resp.json();
    //console.log("ac", data);
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

export const filterByQuery = (url: string) => {
  return async function (dispatch: Dispatch) {
    const resp = await fetch(`http://localhost:3001/wines/filters?${url}`);
    const data = await resp.json();
    return dispatch({ type: FILTER_BY_QUERY, payload: data });
  };
};

export const searchWines = (query: string) => {
  return async function (dispatch: Dispatch) {
    const resp = await fetch(
      `http://localhost:3001/wines/search?input=${query}`
    );
    const data = await resp.json();
    return dispatch({ type: SEARCH_WINES, payload: data });
  };
};

export const getWineDetail = (_id: string) => {
  //console.log("ac", _id);
  return async function (dispatch: Dispatch) {
    const resp = await fetch(`http://localhost:3001/wine/${_id}`);
    const data = await resp.json();
    return dispatch({ type: GET_WINE_DETAIL, payload: data });
  };
};

export const postWine = (wine: Wine) => {
  return async function () {
    let post = await axios.post(`http://localhost:3001/admin`, wine);
    return post;
  };
};

export const loginUserWithGoogle = (userInfo: AdditionalUserInfo | null) => {
  return async function (dispatch: Dispatch) {
    let resp = await axios.post(`http://localhost:3001/login`, userInfo);
    return dispatch({
      type: LOGIN_USER_WITH_GOOGLE,
      payload: resp.data.token,
    });
  };
};

export const loginUserWithFacebook = (user: User) => {
  return async function (dispatch: Dispatch) {
    let resp = await axios.post(`http://localhost:3001/login`, user);
    return dispatch({
      type: LOGIN_USER_WITH_FACEBOOK,
      payload: resp.data.token,
    });
  };
};

export const loginUser = (email: string, password: string) => {
  return async function (dispatch: Dispatch) {
    let resp = await axios.post(`http://localhost:3001/login`, {
      email,
      password,
    });
    return dispatch({
      type: LOGIN_USER,
      payload: resp.data.token,
    });
  };
};

export const signUpUser = async (
  name: string | undefined,
  // lastName: string | undefined,
  // userName: string | undefined,
  email: string,
  password: string
) => {
  const resp = await axios.post(`http://localhost:3001/signup`, {
    name,
    // lastName,
    // userName,
    email,
    password,
  });
  return resp.data;
};
