import { createStore, combineReducers, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { Router } from "react-router-dom/cjs/react-router-dom.min";


const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
    combineReducers({
   
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger)
  );
  
  // Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);
  
export default store;