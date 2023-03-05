import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4001/api',
});

export const baseURL = 'http://localhost:4001/api';
export const imgbbAPI = 'https://api.imgbb.com/1/upload?key=87c6dbc457af9764143a48715ccc1fc7';
