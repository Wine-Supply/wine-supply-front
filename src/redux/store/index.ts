
//import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//import thunk from "redux-thunk";
//import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducer";

const store = configureStore(
    {reducer:rootReducer},
 //   composeWithDevTools(applyMiddleware(thunk))
);

export default store;
