import { GET_WINES } from '../actions/index'

interface Actions{
  type: string,
  payload?:Array<Object>
}

export interface State{
  allWines?:Array<Object>
}

const initialState = {
  allWines:[]
};

const rootReducer = (state:State= initialState, action: Actions) => {
  switch (action.type) {
    case GET_WINES:
      return{
        ...state,
        allWines: action.payload
      }
  
    default:
     return {
      ...state
    };
  }
};

export default rootReducer;
