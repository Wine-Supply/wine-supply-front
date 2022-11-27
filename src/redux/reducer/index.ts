import {
  GET_TOP_RATED_WINES,
  GET_WINES,
  GET_WINE_DETAIL,
  POST_WINE,
  GET_WINE_NAMES_AND_BRANDS,
  FILTER_BY_QUERY,
  SORT_WINES_BY_PRICE,
  SORT_WINES_BY_RATING,
} from "../actions/index";

export interface Wine {
  id: string;
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
}

const initialState = {
  allWines: [],
  topRatedWines: [],
  wineNames: [],
  wineBrands: [],
  wineDetail: [],
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
      console.log('estoy aca')
      let names: string[] = [];
      let brands: string[] = [];

action.payload.map(el=>{
  if (!names.includes(el.name)) names.push(el.name)
  if (!brands.includes(el.brand)) brands.push(el.brand)
})

      /* for (const wine of action.payload) {
        /* console.log(wine)
        names = [...names, wine.name]
        brands = [...names, wine.brand] 
        if (!names.includes(action.payload)) names.push(action.payload.name);
        if (!brands.includes(action.payload.brand)) brands.push(action.payload.brand);
      } */

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

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
