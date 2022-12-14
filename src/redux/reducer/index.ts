import {
  GET_TOP_RATED_WINES,
  GET_WINES,
  GET_WINE_DETAIL,
  POST_WINE,
  GET_WINE_NAMES_AND_BRANDS,
  FILTER_BY_QUERY,
  SORT_WINES_BY_PRICE,
  SORT_WINES_BY_RATING,
  SEARCH_WINES,
  ADD_ITEMS_STORAGE,
  SUBTRACT_CUANTITY_ITEMS,
  ADD_CUANTITY_ITEMS,
  GET_ITEMS_STORAGE,
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
} from "../actions/index";

export type Users = {
  _id?: string;
  name?: string;
  lastName?: string;
  userName?: string;
  address?: any[];
  email?: string;
  avatar?: string[];
  isActive?: boolean;
  isAdmin?: string;
  membership_id?: number[];
  order?: string[];
  shopping_cart?: object[];
  updatedAt?: string;
  createdAt?: string;
  whishList?: string[];
};

type Item = {
  id: string;
  category_id: string;
  currency_id: string;
  description: string;
  picture_url: string | null;
  title: string;
  quantity: number;
  unit_price: number;
};

type ShopOrder = {
  _id: string;
  user_id: string;
  user: string;
  order_address: string;
  items: Item[];
  orderDate: string;
  payment: string;
  shippingMethod: string;
  orderTotal: number;
  orderStatus: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export interface Wine {
  _id: string;
  name: string;
  brand: string;
  description: string;
  images: string[];
  alcoholVolume: number;
  rating: number;
  price: number;
  body?: string;
  type?: string;
  cropYear?: number;
  origin?: string;
  strain?: string;
  volume?: number;
  cuantity: number;
}

interface WineReview {
  review_id: string;
  wine_id: string;
  comment: string;
  rating: number;
}

interface Actions {
  type: string;
  payload: Wine[] | any;
}

export interface State {
  allWines: Array<Wine>;
  noWinesMessage: string;
  topRatedWines: Array<Wine>;
  wineDetail: Array<Wine>;
  wineReviews: WineReview[];
  wineNames: string[];
  wineBrands: string[];
  itemsStorage: Array<Wine>;
  openCart: boolean;
  loginModal: boolean;
  totalItems: number;
  totalPrice: number;
  user: Users;
  wishList: Wine[];
  userOrders: ShopOrder[];
}

const initialState = {
  allWines: [],
  noWinesMessage: "",
  topRatedWines: [],
  wineNames: [],
  wineBrands: [],
  wineDetail: [],
  wineReviews: [],
  itemsStorage: [],
  openCart: false,
  loginModal: false,
  totalItems: 0,
  totalPrice: 0,
  user: {},
  wishList: [],
  userOrders: [],
};

const rootReducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case GET_WINES:
      return {
        ...state,
        allWines: action.payload,
        noWinesMessage: "",
      };

    case GET_TOP_RATED_WINES:
      const topRated = [...state.allWines]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
      return {
        ...state,
        topRatedWines: topRated,
      };
    case GET_WINE_NAMES_AND_BRANDS:
      let names: string[] = [];
      let brands: string[] = [];

      for (const wine of state.allWines) {
        if (!names.includes(wine.name)) names.push(wine.name);
        if (!brands.includes(wine.brand)) brands.push(wine.brand);
      }

      return {
        ...state,
        wineNames: names.sort(),
        wineBrands: brands.sort(),
      };

    case FILTER_BY_QUERY:
      if (typeof action.payload[0] === "object")
        return {
          ...state,
          allWines: action.payload,
        };
      else
        return {
          ...state,
          noWinesMessage: action.payload[0],
        };

    case SEARCH_WINES:
      return {
        ...state,
        allWines: action.payload,
      };

    case SORT_WINES_BY_PRICE:
      return {
        ...state,
        allWines: [...state.allWines].sort((a, b) => a.price - b.price),
      };

    case SORT_WINES_BY_RATING:
      return {
        ...state,
        allWines: [...state.allWines].sort((a, b) => b.rating - a.rating),
      };

    case GET_WINE_DETAIL:
      return {
        ...state,
        wineDetail: action.payload,
      };

    case POST_WINE:
      return {
        ...state,
      };

    case GET_ITEMS_STORAGE:
      return {
        ...state,
        itemsStorage:
          action.payload === null || action.payload === ""
            ? state.itemsStorage
            : JSON.parse(action.payload),
      };

    case ADD_ITEMS_STORAGE:
      let searchItem = state.itemsStorage.some(
        (el: any) => el._id === action.payload._id
      );
      return {
        ...state,
        itemsStorage: searchItem
          ? state.itemsStorage
          : [...state.itemsStorage, action.payload],
      };

    case SUBTRACT_CUANTITY_ITEMS:
      let item: Wine | undefined = state.itemsStorage.find(
        (el: any) => el._id === action.payload
      );
      let index = state.itemsStorage.findIndex(
        (el: any) => el._id === action.payload
      );
      let itemFilter = state.itemsStorage.filter(
        (el: any) => el._id !== action.payload
      );
      if (item !== undefined) {
        item.cuantity -= 1
        itemFilter.splice(index, 0, item)
      }
      return {
        ...state,
        itemsStorage: itemFilter
      };

    case ADD_CUANTITY_ITEMS:
      let itemSearch: Wine | undefined = state.itemsStorage.find(
        (el: any) => el._id === action.payload
      );
      let indexItem = state.itemsStorage.findIndex(
        (el: any) => el._id === action.payload
      );
      let itemsFilter = state.itemsStorage.filter(
        (el: any) => el._id !== action.payload
      );
      if (itemSearch !== undefined) {
        itemSearch.cuantity += 1
        itemsFilter.splice(indexItem, 0, itemSearch)
      }
      return {
        ...state,
        itemsStorage: itemsFilter
      };

    case GET_TOTAL_ITEMS:
      let totalItems = state.itemsStorage.reduce((acc, item) => acc + item.cuantity, 0)
      return {
        ...state,
        totalItems: totalItems
      };

    case GET_TOTAL_PRICE:
      let priceArray:number[] = []
      state.itemsStorage.map(i =>{
        priceArray.push(i.price * i.cuantity)
      })
      const priceTotal = priceArray.reduce(
        (acc, curr) => acc + curr,
        0
      );
      return{
        ...state,
        totalPrice: parseFloat(priceTotal.toString().substring(0, 5))
      }

    case OPEN_CART:
      return {
        ...state,
        openCart: !state.openCart,
      };

    case CLEAR_ITEM_CART:
      let itemCart = state.itemsStorage.filter(it => it._id !== action.payload)
      return{
        ...state,
        itemsStorage: itemCart,
      };
      
    case HANDLE_EMPTY_CART:
      return{
        ...state,
        itemsStorage: [],
        totalItems: 0,
        totalPrice: 0,
      }

    case GET_WINE_REVIEWS:
      return {
        ...state,
        wineReviews: action.payload,
      };

    case GET_USER_ID:
      return {
        ...state,
        user: action.payload,
        itemsStorage: action.payload.shopping_cart.length > 0 ? action.payload.shopping_cart : []
      };

    case SHOW_LOGIN_MODAL:
      return {
        ...state,
        loginModal: !state.loginModal,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        wineDetail: {},
      };

    case GET_WISHLIST:
      return {
        ...state,
        wishList: JSON.parse(localStorage.getItem("wishlist") ?? "[]"),
      };

    case GET_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
