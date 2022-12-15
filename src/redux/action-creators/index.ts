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
  SUBTRACT_CUANTITY_ITEMS,
  ADD_CUANTITY_ITEMS,
  GET_TOTAL_ITEMS,
  GET_TOTAL_PRICE,
  OPEN_CART,
  GET_WINE_REVIEWS,
  GET_USER_ID,
  SHOW_LOGIN_MODAL,
  CLEAR_DETAIL,
  GET_WISHLIST,
  GET_USER_ORDERS,
  CLEAR_ITEM_CART,
  HANDLE_EMPTY_CART,
} from "../actions";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { Users, Wine } from "../reducer";
import { AdditionalUserInfo, User } from "firebase/auth";

const URL = "https://wine-supply-back-production.up.railway.app";
// const URL = "https://wine-supply-back-production.up.railway.app";

export const getWines = () => {
  return async function (dispatch: Dispatch) {
    try {
      const resp = await fetch(`${URL}/wines`);
      const data = await resp.json();
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
    const resp = await fetch(
      `${URL}/wines/search?input=${query}&isActive=true`
    );
    const data = await resp.json();
    return dispatch({ type: SEARCH_WINES, payload: data });
  };
};

export const getWineDetail = (_id: string) => {
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

export const showLoginModal = () => {
  return {
    type: SHOW_LOGIN_MODAL,
  };
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

//---REVISAR PARA TRAER DESDE BACK
/* export const getItemsStorage = () => {
  return {
    type: GET_ITEMS_STORAGE,
    payload: localStorage.getItem("item"),
  };
}; */

export const subtractCuantityItems = (_id: string) => {
  return {
    type: SUBTRACT_CUANTITY_ITEMS,
    payload: _id,
  };
};

export const addCuantityItems = (_id: string) => {
  return {
    type: ADD_CUANTITY_ITEMS,
    payload: _id,
  };
};

export const addItemsStorage = (object: Object) => {
  return {
    type: ADD_ITEMS_STORAGE,
    payload: object,
  };
};

export const getTotalItems = () => {
  return {
    type: GET_TOTAL_ITEMS,
  };
};

export const getTotalPrice = () => {
  return {
    type: GET_TOTAL_PRICE,
  };
};

export const addItemsCartDataBase = async (cart: Array<Wine>) => {
  let token = localStorage.getItem("token") || "";
  if (token) {
    try {
      const res = await axios.post(`${URL}/addcartitem`, cart, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          items: JSON.stringify(cart),
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }
};

export const buyItems = async (cart: any, token: any) => {
  try {
    const res = await axios.post(`${URL}/payment`, cart, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        items: JSON.stringify(cart),
      },
    });
    window.location.replace(res.data);
    handleEmptyCart();
  } catch (error) {
    console.error(error);
  }
};

export const buyMembership = async (type: string) => {
  console.log(type, localStorage.getItem("token"));

  try {
    const res = await axios.post(`${URL}/paymentsubs`, type, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token") ?? ""
        )}`,
        sub_type: type,
      },
    });
    window.location.replace(res.data);
    // handleEmptyCart();
  } catch (error) {
    console.error(error);
  }
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

export const getUserId = () => {
  let token = localStorage.getItem("token");
  return async function (dispatch: Dispatch) {
    if (token !== null) {
      const res = await axios.get(`${URL}/getuser`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "application/json, charset=utf-8",
        },
      });
      console.log(res.data);

      return dispatch({ type: GET_USER_ID, payload: res.data });
    }
  };
};

export const openCart = () => {
  return {
    type: OPEN_CART,
  };
};

export const getWineReviews = (_id: String) => {
  return async function (dispatch: Dispatch) {
    const resp = await fetch(`${URL}/getWineReviews/${_id}`);
    const data = await resp.json();
    return dispatch({ type: GET_WINE_REVIEWS, payload: data });
  };
};

export function clearPage() {
  return {
    type: CLEAR_DETAIL,
  };
}

export const addToWishlist = (id: string, wines: Wine[]) => {
  const wineAdded = wines.find((wine) => wine._id === id);
  const existingWishlist = localStorage.getItem("wishlist");
  if (existingWishlist) {
    const parsed = JSON.parse(existingWishlist);
    localStorage.setItem("wishlist", JSON.stringify([...parsed, wineAdded]));
  } else localStorage.setItem("wishlist", JSON.stringify([wineAdded]));
};

export const getWishlist = () => {
  return {
    type: GET_WISHLIST,
  };
};

export const getUserOrders = (id: string | undefined) => {
  return async function (dispatch: Dispatch) {
    const res = await axios.get(`${URL}/getorders`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token") ?? ""
        )}`,
        user: id,
        "Content-Type": "application/json, charset=utf-8",
      },
    });
    console.log(res.data);
    return dispatch({ type: GET_USER_ORDERS, payload: res.data });
  };
};

export const updateUserInfo = async (data: {
  email: string;
  userName: string;
  // avatar: string[];
  isActive: boolean | undefined;
  user: Users;
}) => {
  const res = await axios.put(`${URL}/user/update`, data, {
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("token") ?? ""
      )}`,
    },
  });
  return res.status;
};

export const clearItemToCart = (_id: string) => {
  return {
    type: CLEAR_ITEM_CART,
    payload: _id,
  };
};

export const handleEmptyCart = () => {
  return {
    type: HANDLE_EMPTY_CART,
  };
};
