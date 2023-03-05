import { authRegister } from './auth-slice';
import handleAuthRegister from './auth-handlers';
import { takeLatest } from 'redux-saga/effects';

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
}
