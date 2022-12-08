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
  GET_ITEMS_STORAGE,
  GET_TOTAL_ITEMS,
  GET_TOTAL_PRICE,
  OPEN_CART,
  GET_WINE_REVIEWS,
  GET_USER_ID,
  SHOW_LOGIN_MODAL,
} from "../actions/index";

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
  topRatedWines: Array<Wine>;
  wineDetail: Array<Wine>;
  wineReviews: WineReview[];
  wineNames: string[];
  wineBrands: string[];
  itemsStorage: Object[];
  openCart: boolean;
  loginModal: boolean;
  totalItems: number;
  totalPrice: number;
  user: Object;
}

const initialState = {
  allWines: [],
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
};

const rootReducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case GET_WINES:
      return {
        ...state,
        allWines: action.payload,
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
        wineNames: names,
        wineBrands: brands,
      };

    case FILTER_BY_QUERY:
      return {
        ...state,
        allWines: action.payload,
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

    case GET_TOTAL_ITEMS:
      return {
        ...state,
        totalItems: action.payload,
      };

    case GET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    case OPEN_CART:
      return {
        ...state,
        openCart: !state.openCart,
      };

    case GET_WINE_REVIEWS:
      return {
        ...state,
        wineReviews: action.payload,
      };

    case GET_USER_ID:
      return {
        ...state,
        user: action.payload,
      };

    case SHOW_LOGIN_MODAL:
      return {
        ...state,
        loginModal: !state.loginModal,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
