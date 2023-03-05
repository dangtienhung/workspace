import axios from 'axios';

export const requestAuthRegister = (data) => {
  console.log('🚀 ~ file: auth-requests.js:4 ~ requestAuthRegister ~ data:', data);
  return axios.post('/auth/register', { ...data });
};
