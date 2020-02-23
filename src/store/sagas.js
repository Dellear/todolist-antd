import {put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';

function* getInitList() {
  console.log('aaa');
  try {
    const { data } = yield axios.get('/api/todolist');
    const action = initListAction(data);
    yield put(action);
    console.log(action);
  } catch (error) {
    throw new Error(error);
  }
}

// generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;