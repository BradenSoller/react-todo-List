import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";

 function* getAllTodos() {
        try {
          const response = yield axios({
            method: "GET",
            url: "/api/todo",
          });
          yield put({
            type: "SET_TODOS",
            payload: response.data,
          });
        } catch (error) {
          console.log("Unable to get pending events from server", error);
        }

 }


export default function* TodoSaga() {
    yield takeLatest("FETCH_ALL_TODOS", getAllTodos)

   }