import { GET_WINES } from '../actions';
import { Dispatch } from 'redux';

export const getWines = () => {
  return async function(dispatch:Dispatch){
    const resp = await fetch('http://localhost:3001/wines')
    const data = await resp.json()
    console.log('ac', data)
      return dispatch({type: GET_WINES, payload: data})
  }
};

/* export const getWines = () => {
  console.log('aca estamos')
  return ({type: GET_WINES, payload: 'llego'})
} */


