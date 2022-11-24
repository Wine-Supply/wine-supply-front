import { GET_TOP_RATED_WINES, GET_WINES } from "../actions/index";

interface Wine {
  id: string;
  name: string;
  brand: string;
  description: string;
  images: Array<string>;
  alcoholVolume: number;
  rating: number;
  price: number;
}

interface Actions {
  type: string;
  payload: Array<Wine>;
}

export interface State {
  allWines: Array<Wine>;
  topRatedWines: Array<Wine>;
}

const initialState = {
  allWines: [],
  topRatedWines: [],
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
      const topRated = [...state.allWines!]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);
      return {
        ...state,
        topRatedWines: topRated,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
