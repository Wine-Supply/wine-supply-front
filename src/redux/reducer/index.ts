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
  LOGIN_USER_WITH_GOOGLE,
  LOGIN_USER_WITH_FACEBOOK,
  LOGIN_USER,
  SIGN_UP_USER,
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

interface Actions {
  type: string;
  payload: Wine[];
}

export interface State {
  allWines: Array<Wine>;
  topRatedWines: Array<Wine>;
  wineDetail: Array<Wine>;
  wineNames: string[];
  wineBrands: string[];
  isUserLoggedIn: boolean;
}

const initialState = {
  allWines: [],
  topRatedWines: [],
  wineNames: [],
  wineBrands: [],
  wineDetail: [],
  isUserLoggedIn: false,
};

const rootReducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case GET_WINES:
      console.log("rex", action.payload);
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
      console.log("act", action.payload);
      return {
        ...state,
        wineDetail: action.payload,
      };

    case POST_WINE:
      return {
        ...state,
      };

    case LOGIN_USER_WITH_GOOGLE:
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        isUserLoggedIn: true,
      };

    case LOGIN_USER:
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        isUserLoggedIn: true,
      };

    case SIGN_UP_USER:
      localStorage.setItem("token", JSON.stringify(action.payload));
      console.log("signup, reducer");

      return {
        ...state,
        isUserLoggedIn: true,
      };

    case LOGIN_USER_WITH_FACEBOOK:
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        isUserLoggedIn: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
