import { all } from 'redux-saga/effects';
import TodoSaga from './todo.saga';
export default function* rootSaga() {
    yield all([
    TodoSaga()

    ]);
  }