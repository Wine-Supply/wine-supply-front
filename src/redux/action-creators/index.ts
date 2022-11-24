import { GET_WINES } from '../actions';
import { Dispatch } from 'redux';

export const getWines = () => {
  return async function(dispatch:Dispatch){
    const resp = await fetch('http://localhost:3001/wines')
    const data = await resp.json()
      return dispatch({type: GET_WINES, payload: data})
  }
};
