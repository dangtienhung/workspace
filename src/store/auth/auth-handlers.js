import { call } from 'redux-saga/effects';
import { requestAuthRegister } from './auth-requests';
import { toast } from 'react-toastify';

export default function* handleAuthRegister(action) {
  const { payload } = action;
  console.log('🚀 ~ file: auth-handlers.js:7 ~ function*handleAuthRegister ~ payload:', payload);
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log(
      '🚀 ~ file: auth-handlers.js:8 ~ function*handleAuthRegister ~ response:',
      response
    );
    if (response.status === 201) {
      toast.success('Create new account successfully!');
    }
  } catch (error) {
    console.log(error);
  }
}
