import { takeLatest, call, put } from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
import { Types } from './types';
import { CUSTOMER_TOKEN } from '../../config/Constants';
import actions, { initializeApp } from './actions';
import authActions from '../auth/actions';

/**
 *  app
 * @param action
 */
function* initializeService(action: ReturnType<typeof initializeApp>) {
  const { payload } = action;
  try {
    // auth state
    const token = yield localStorage.getItem(CUSTOMER_TOKEN);
    yield put(authActions.changeToken(token));

  } catch (error) {
    console.log('service', error);
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(Types.initializeApp, initializeService);
}
